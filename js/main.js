// Entry point: renders every section from data.js and wires up the page's
// interactions (rotating headline, hero photos, project filter, count-up
// stats, scroll progress, spotlight, mobile menu, reveal on scroll).

import {
  profile,
  ticker,
  skillGroups,
  projectFilters,
  projects,
  experience,
  education,
  achievements,
  publications,
  scholarStats,
  photos,
} from "./data.js";
import {
  el,
  renderProfile,
  renderTicker,
  renderStats,
  renderSkillGroups,
  renderFilters,
  renderProjects,
  renderExperience,
  renderScholar,
  renderPublications,
  renderAchievements,
  renderPhotos,
  renderEducation,
} from "./render.js";

const INITIAL_PROJECTS = 8;
const listed = projects.filter((project) => project.code);
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function setFooterYear() {
  const year = String(new Date().getFullYear());
  document.querySelectorAll(".site-footer__year").forEach((node) => {
    node.textContent = year;
  });
}

// Types and deletes each word in turn. Screen readers get one stable label.
function initRotator() {
  const word = document.querySelector(".hero__word");
  const title = document.querySelector(".hero__title");
  title.setAttribute(
    "aria-label",
    "Drashti Bhavsar. I build intelligent systems that actually ship."
  );
  if (reduced) {
    word.textContent = profile.rotating[0];
    return;
  }
  let index = 0;
  let length = 0;
  let deleting = false;
  word.textContent = "";

  function tick() {
    const target = profile.rotating[index];
    length += deleting ? -1 : 1;
    word.textContent = target.slice(0, length);
    let delay = deleting ? 40 : 85;
    if (!deleting && length === target.length) {
      deleting = true;
      delay = 1800;
    } else if (deleting && length === 0) {
      deleting = false;
      index = (index + 1) % profile.rotating.length;
      delay = 350;
    }
    window.setTimeout(tick, delay);
  }
  tick();
}

// Crossfades the hero photo through the photo list.
function initHeroPhotos() {
  const frame = document.querySelector(".hero__frame");
  const first = frame.querySelector(".hero__photo");
  const images = [first];
  photos.slice(1, 5).forEach((photo) => {
    const img = el("img", "hero__photo");
    img.src = photo.src;
    img.alt = "";
    img.loading = "lazy";
    img.width = 618;
    img.height = 1100;
    frame.append(img);
    images.push(img);
  });
  if (reduced) {
    return;
  }
  let current = 0;
  window.setInterval(() => {
    images[current].classList.remove("is-active");
    current = (current + 1) % images.length;
    images[current].classList.add("is-active");
  }, 3500);
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
        card.classList.add("is-visible");
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

  // Cards light up where the pointer is.
  list.addEventListener("pointermove", (event) => {
    const card = event.target.closest(".card");
    if (!card) {
      return;
    }
    const box = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${event.clientX - box.left}px`);
    card.style.setProperty("--my", `${event.clientY - box.top}px`);
  });
}

function countUp(node) {
  const target = Number(node.dataset.target);
  const decimals = String(target).includes(".") ? 1 : 0;
  if (reduced) {
    node.textContent = target.toFixed(decimals);
    return;
  }
  const start = performance.now();
  const duration = 1400;
  function frame(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    node.textContent = (target * eased).toFixed(decimals);
    if (progress < 1) {
      requestAnimationFrame(frame);
    }
  }
  requestAnimationFrame(frame);
}

function initReveal() {
  const targets = document.querySelectorAll(".reveal");
  const counters = document.querySelectorAll(".count");
  if (reduced || !("IntersectionObserver" in window)) {
    counters.forEach(countUp);
    return;
  }
  document.documentElement.classList.add("js-reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.add("is-visible");
        entry.target.querySelectorAll(".count").forEach(countUp);
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px" }
  );
  targets.forEach((node) => observer.observe(node));
}

function initScrollEffects() {
  const bar = document.querySelector(".progress");
  const header = document.querySelector(".site-header");
  const spotlight = document.querySelector(".spotlight");
  function onScroll() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  if (!reduced && window.matchMedia("(pointer: fine)").matches) {
    window.addEventListener("pointermove", (event) => {
      spotlight.style.setProperty("--x", `${event.clientX}px`);
      spotlight.style.setProperty("--y", `${event.clientY}px`);
    });
  }
}

function initCopyEmail() {
  const button = document.querySelector(".contact__copy");
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      button.textContent = "Copied!";
    } catch {
      button.textContent = profile.email;
    }
    window.setTimeout(() => {
      button.textContent = "Copy email";
    }, 2200);
  });
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

function init() {
  setFooterYear();
  renderProfile(document, profile);
  renderTicker(document.querySelector(".ticker__track"), ticker);
  renderStats(document.querySelector(".stats"), profile.highlights);
  renderSkillGroups(document.querySelector(".tiles"), skillGroups);
  initProjects();
  renderExperience(document.querySelector(".jobs"), experience);
  renderScholar(document.querySelector(".scholar"), scholarStats);
  renderPublications(document.querySelector(".pubs"), publications);
  renderAchievements(document.querySelector(".achievements"), achievements);
  renderPhotos(document.querySelector(".photo-strip__track"), photos);
  renderEducation(document.querySelector(".edus"), education);
  initRotator();
  initHeroPhotos();
  initMenu();
  initCopyEmail();
  initScrollEffects();
  initReveal();
}

init();
