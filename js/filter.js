// Filters the projects page by skill. The chosen skill is kept in the URL
// (?skill=python) so links from the sky map open the page pre-filtered.

import { el } from "./render.js";

export function initProjectFilter({ bar, list, status, skills }) {
  const rows = [...list.querySelectorAll(".project")];
  const rowSkills = new Map();
  rows.forEach((row) => rowSkills.set(row, row.dataset.skills.split(" ")));

  function isUsed(skill) {
    return rows.some((row) => rowSkills.get(row).includes(skill.id));
  }

  const usedSkills = skills.filter(isUsed);
  const options = [{ id: "all", label: "All projects" }, ...usedSkills];

  const buttons = options.map((option) => {
    const button = el("button", "chip", option.label);
    button.type = "button";
    button.dataset.skill = option.id;
    button.addEventListener("click", () => apply(option.id, true));
    return button;
  });
  bar.replaceChildren(...buttons);

  function apply(skillId, updateUrl) {
    let shown = 0;
    rows.forEach((row) => {
      const match = skillId === "all" || rowSkills.get(row).includes(skillId);
      row.hidden = !match;
      if (match) {
        shown += 1;
      }
    });

    buttons.forEach((button) => {
      button.setAttribute(
        "aria-pressed",
        String(button.dataset.skill === skillId)
      );
    });

    const { label } = options.find((item) => item.id === skillId);
    status.textContent =
      skillId === "all"
        ? `Showing all ${rows.length} projects.`
        : `Showing ${shown} of ${rows.length} projects that use ${label}.`;

    if (updateUrl) {
      const url = new URL(window.location.href);
      if (skillId === "all") {
        url.searchParams.delete("skill");
      } else {
        url.searchParams.set("skill", skillId);
      }
      window.history.replaceState(null, "", url);
    }
  }

  const requested = new URLSearchParams(window.location.search).get("skill");
  const isKnown = options.some((option) => option.id === requested);
  apply(isKnown ? requested : "all", false);
}

