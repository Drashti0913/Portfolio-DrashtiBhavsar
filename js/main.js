// Entry point: renders every section from data.js and wires up the page's
// small interactions (project filter, mobile menu, reveal on scroll).

import {
  profile,
  skillGroups,
  projectFilters,
  projects,
  experience,
  education,
  achievements,
  publications,
} from "./data.js";
import {
  renderProfile,
  renderHighlights,
  renderSkillGroups,
  renderFilters,
  renderProjects,
  renderExperience,
  renderEducation,
  renderAchievements,
  renderPublications,
  renderContact,
} from "./render.js";

const INITIAL_PROJECTS = 6;
const listed = projects.filter((project) => project.code);

function setFooterYear() {
  const year = String(new Date().getFullYear());
  document.querySelectorAll(".site-footer__year").forEach((node) => {
    node.textContent = year;
  });
}

function initProjects() {
  const list = document.querySelector(".card-grid");
  const bar = document.querySelector(".filter");
  const more = document.querySelector(".projects__more");
  const status = document.querySelector(".projects__status");
  let expanded = false;
  let current = "all";

  renderProjects(list, listed);
  const cards = [...list.children];

  function apply() {
    let shown = 0;
    cards.forEach((card) => {
      const matches = current === "all" || card.dataset.category === current;
      const withinLimit =
        current !== "all" || expanded || shown < INITIAL_PROJECTS;
      const visible = matches && withinLimit;
      card.hidden = !visible;
      if (visible) {
        shown += 1;
      }
    });
    const total = cards.filter(
      (card) => current === "all" || card.dataset.category === current
    ).length;
    bar.querySelectorAll(".chip").forEach((chip) => {
      chip.setAttribute(
        "aria-pressed",
        String(chip.dataset.filter === current)
      );
    });
    more.hidden = current !== "all" || expanded || total <= INITIAL_PROJECTS;
    more.textContent = `Show all ${total} projects`;
    status.textContent = `Showing ${shown} of ${total} projects`;
  }

  renderFilters(bar, projectFilters, (id) => {
    current = id;
    apply();
  });
  more.addEventListener("click", () => {
    expanded = true;
    apply();
  });
  apply();
}

function initMenu() {
  const toggle = document.querySelector(".nav__toggle");
  const menu = document.querySelector(".nav__menu");
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(open));
    menu.classList.toggle("is-open", open);
  });
  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      toggle.setAttribute("aria-expanded", "false");
      menu.classList.remove("is-open");
    }
  });
}

function initReveal() {
  const targets = document.querySelectorAll(".reveal");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced || !("IntersectionObserver" in window)) {
    return;
  }
  document.documentElement.classList.add("js-reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px" }
  );
  targets.forEach((node) => observer.observe(node));
}

function init() {
  setFooterYear();
  renderProfile(document, profile);
  renderHighlights(document.querySelector(".highlights"), profile.highlights);
  renderSkillGroups(document.querySelector(".tiles"), skillGroups);
  initProjects();
  renderExperience(document.querySelector(".jobs"), experience);
  renderAchievements(document.querySelector(".achievements"), achievements);
  renderPublications(document.querySelector(".pubs"), publications);
  renderEducation(document.querySelector(".edus"), education);
  renderContact(document.querySelector(".contact__list"), profile);
  initMenu();
  initReveal();
}

init();
