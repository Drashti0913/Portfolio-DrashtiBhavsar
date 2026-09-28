// Entry point. Each HTML page sets data-page on <body>, and this module runs
// the matching setup for that page.

import {
  profile,
  skills,
  projects,
  experience,
  education,
  research,
  articles,
} from "./data.js";
import {
  renderProfile,
  renderTimeline,
  renderContact,
  renderProjects,
  renderEntries,
} from "./render.js";
import { initSky } from "./sky.js";
import { initProjectFilter } from "./filter.js";

function setFooterYear() {
  const year = String(new Date().getFullYear());
  document.querySelectorAll(".site-footer__year").forEach((node) => {
    node.textContent = year;
  });
}

function highlightLinkedProject() {
  const id = decodeURIComponent(window.location.hash.slice(1));
  const target = id ? document.getElementById(id) : null;
  if (target && target.classList.contains("project")) {
    target.classList.add("project--highlight");
    target.scrollIntoView({ block: "start" });
  }
}

function initHome() {
  renderProfile(document, profile);
  renderTimeline(document.querySelector(".timeline--experience"), experience);
  renderTimeline(document.querySelector(".timeline--education"), education);
  renderContact(document.querySelector(".contact__list"), profile);
  initSky(document.querySelector(".sky"), { skills, projects });
}

function initProjects() {
  const list = document.querySelector(".project-list");
  renderProjects(list, projects, skills);
  initProjectFilter({
    bar: document.querySelector(".filter"),
    list,
    status: document.querySelector(".filter__status"),
    skills,
  });
  renderEntries(document.querySelector(".research-list"), research);
  renderEntries(document.querySelector(".article-list"), articles);
  highlightLinkedProject();
}

const pages = {
  home: initHome,
  projects: initProjects,
};

setFooterYear();
pages[document.body.dataset.page]?.();
