// Skill sky map: the site's original component.
// Each skill is a star placed on a round star chart. A star's size shows how
// many projects use that skill. Picking a star draws lines to every skill it
// was used with; picking a project draws that project's constellation.

import { el, link } from "./render.js";

const SVG_NS = "http://www.w3.org/2000/svg";
const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));
const SKY_RADIUS = 38; // Percent of the chart's width.

// Lays stars out on a sunflower spiral so they spread evenly across the
// circle, with the most-used skills closest to the center.
export function placeStars(skills, projects) {
  const counts = new Map(skills.map((skill) => [skill.id, 0]));
  projects.forEach((project) => {
    project.skills.forEach((id) => {
      if (counts.has(id)) {
        counts.set(id, counts.get(id) + 1);
      }
    });
  });

  const byUse = (a, b) => counts.get(b.id) - counts.get(a.id);
  const sorted = [...skills].sort(byUse);

  return sorted.map((skill, index) => {
    const radius = SKY_RADIUS * Math.sqrt((index + 0.5) / sorted.length);
    const angle = index * GOLDEN_ANGLE - Math.PI / 2;
    return {
      ...skill,
      count: counts.get(skill.id),
      x: 50 + radius * Math.cos(angle),
      y: 50 + radius * Math.sin(angle),
    };
  });
}

// Orders points by angle around their center so a constellation's path
// sweeps around the shape instead of zigzagging across it. The path starts
// just after the widest angular gap, so the one missing edge is the longest.
function orderAroundCenter(points) {
  if (points.length < 3) {
    return points;
  }
  const cx = points.reduce((sum, point) => sum + point.x, 0) / points.length;
  const cy = points.reduce((sum, point) => sum + point.y, 0) / points.length;
  const withAngles = points.map((point) => ({
    point,
    angle: Math.atan2(point.y - cy, point.x - cx),
  }));
  const byAngle = withAngles.sort((a, b) => a.angle - b.angle);

  let start = 0;
  let widestGap = -1;
  byAngle.forEach((item, index) => {
    const next = byAngle[(index + 1) % byAngle.length];
    const gap = (next.angle - item.angle + 2 * Math.PI) % (2 * Math.PI);
    if (gap > widestGap) {
      widestGap = gap;
      start = (index + 1) % byAngle.length;
    }
  });

  const ordered = [...byAngle.slice(start), ...byAngle.slice(0, start)];
  return ordered.map((item) => item.point);
}

function pluralize(count, word) {
  return count === 1 ? `1 ${word}` : `${count} ${word}s`;
}

export function initSky(root, { skills, projects }) {
  const stars = placeStars(skills, projects);
  const starsById = new Map(stars.map((star) => [star.id, star]));
  const starList = root.querySelector(".sky__stars");
  const lineLayer = root.querySelector(".sky__lines");
  const projectList = root.querySelector(".sky__projects");
  const readout = root.querySelector(".sky__readout");
  const clearButton = root.querySelector(".sky__clear");
  const copy = (node) => node.cloneNode(true);
  const idleReadout = [...readout.childNodes].map(copy);
  const starItems = new Map();
  const starButtons = new Map();
  const projectButtons = new Map();
  let selection = null;

  function drawLines(pairs) {
    const lines = pairs.map(([from, to], index) => {
      const line = document.createElementNS(SVG_NS, "line");
      line.setAttribute("x1", from.x.toFixed(2));
      line.setAttribute("y1", from.y.toFixed(2));
      line.setAttribute("x2", to.x.toFixed(2));
      line.setAttribute("y2", to.y.toFixed(2));
      line.setAttribute("pathLength", "1");
      line.classList.add("sky__line");
      line.style.animationDelay = `${index * 90}ms`;
      return line;
    });
    lineLayer.replaceChildren(...lines);
  }

  function lightStars(ids) {
    starItems.forEach((item, id) => {
      item.classList.toggle("is-lit", ids.includes(id));
    });
  }

  function showSkill(skillId) {
    const star = starsById.get(skillId);
    const usedIn = projects.filter((p) => p.skills.includes(skillId));
    const related = new Set(usedIn.flatMap((p) => p.skills));
    const isNeighbour = (id) => id !== skillId && starsById.has(id);
    const neighbours = [...related].filter(isNeighbour);

    drawLines(neighbours.map((id) => [star, starsById.get(id)]));
    lightStars([skillId, ...neighbours]);

    if (usedIn.length === 0) {
      const message = `${star.label} isn't part of a listed project yet.`;
      readout.replaceChildren(el("p", "sky__readout-lead", message));
      return;
    }

    const list = el("ul", "sky__readout-list");
    usedIn.forEach((project) => {
      const item = el("li");
      item.append(link(`./projects.html#project-${project.id}`, project.title));
      list.append(item);
    });

    const count = pluralize(usedIn.length, "project");
    const lead = `${star.label} appears in ${count}.`;
    const hint = "The lines lead to the skills it was used with.";
    const filterUrl = `./projects.html?skill=${encodeURIComponent(skillId)}`;
    const filterText = `See all ${star.label} projects`;

    readout.replaceChildren(
      el("p", "sky__readout-lead", `${lead} ${hint}`),
      list,
      link(filterUrl, filterText, "sky__readout-link")
    );
  }

  function showProject(projectId) {
    const project = projects.find((item) => item.id === projectId);
    const skillStars = project.skills.map((id) => starsById.get(id));
    const points = orderAroundCenter(skillStars.filter(Boolean));
    const pairs = points.slice(1).map((point, index) => [points[index], point]);

    drawLines(pairs);
    lightStars(points.map((point) => point.id));

    const projectUrl = `./projects.html#project-${project.id}`;

    readout.replaceChildren(
      el("p", "sky__readout-lead", project.title),
      el("p", "sky__readout-text", project.summary),
      link(projectUrl, "Read about this project", "sky__readout-link")
    );
  }

  function render() {
    const active = selection !== null;
    root.classList.toggle("sky--focused", active);
    clearButton.disabled = !active;

    starButtons.forEach((button, id) => {
      const pressed =
        active && selection.type === "skill" && selection.id === id;
      button.setAttribute("aria-pressed", String(pressed));
    });
    projectButtons.forEach((button, id) => {
      const pressed =
        active && selection.type === "project" && selection.id === id;
      button.setAttribute("aria-pressed", String(pressed));
    });

    if (!active) {
      lineLayer.replaceChildren();
      lightStars([]);
      readout.replaceChildren(...idleReadout.map(copy));
      return;
    }

    if (selection.type === "skill") {
      showSkill(selection.id);
    } else {
      showProject(selection.id);
    }
  }

  function toggle(next) {
    const same =
      selection !== null &&
      selection.type === next.type &&
      selection.id === next.id;
    selection = same ? null : next;
    render();
  }

  stars.forEach((star) => {
    const item = el("li", "sky__star");
    item.style.setProperty("--x", `${star.x.toFixed(2)}%`);
    item.style.setProperty("--y", `${star.y.toFixed(2)}%`);
    item.style.setProperty("--magnitude", String(star.count));
    if (star.x > 55) {
      item.classList.add("sky__star--label-left");
    }

    const button = el("button", "star");
    button.type = "button";
    button.setAttribute(
      "aria-label",
      `${star.label}, used in ${pluralize(star.count, "project")}`
    );
    const dot = el("span", "star__dot");
    dot.setAttribute("aria-hidden", "true");
    button.append(dot, el("span", "star__label", star.label));
    button.addEventListener("click", () => {
      toggle({ type: "skill", id: star.id });
    });

    item.append(button);
    starList.append(item);
    starItems.set(star.id, item);
    starButtons.set(star.id, button);
  });

  projects.forEach((project) => {
    const item = el("li");
    const button = el("button", "chip", project.title);
    button.type = "button";
    button.addEventListener("click", () => {
      toggle({ type: "project", id: project.id });
    });
    item.append(button);
    projectList.append(item);
    projectButtons.set(project.id, button);
  });

  clearButton.addEventListener("click", () => {
    selection = null;
    render();
  });

  root.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && selection !== null) {
      selection = null;
      render();
    }
  });

  render();
}
