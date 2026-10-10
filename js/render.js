// Small DOM helpers plus the functions that turn data.js into page content.

const ICONS = {
  github:
    '<path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"/>',
  linkedin:
    '<path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11.5H3V9.75Zm6.5 0h3.83v1.57h.06c.53-1 1.84-2.07 3.79-2.07 4.05 0 4.8 2.67 4.8 6.13v5.87h-4v-5.2c0-1.24-.02-2.84-1.73-2.84-1.73 0-2 1.35-2 2.75v5.29h-4V9.75Z"/>',
  scholar:
    '<path d="M12 2 1 9l11 7 9-5.73V17h2V9L12 2Zm-6 10.95v4.3C6 19.3 8.7 21 12 21s6-1.7 6-3.75v-4.3l-6 3.82-6-3.82Z"/>',
  x: '<path d="M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.19L2 3h6.33l4.37 5.77L17.75 3Zm-1.08 16.17h1.7L7.4 4.74H5.58l11.1 14.43Z"/>',
  phone:
    '<path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1L6.6 10.8Z"/>',
  mail: '<path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm9 7.2L4.6 7h14.8L12 12.2ZM4 9.1V17h16V9.1l-8 5.6-8-5.6Z"/>',
  arrow:
    '<path d="M7 17 17 7M9 7h8v8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  download:
    '<path d="M12 4v11m0 0-4-4m4 4 4-4M5 20h14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
};

export function el(tag, className = "", text) {
  const node = document.createElement(tag);
  if (className) {
    node.className = className;
  }
  if (text !== undefined) {
    node.textContent = text;
  }
  return node;
}

// ICONS holds fixed markup from this file, never user or remote content.
export function icon(name) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("class", "icon");
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("fill", "currentColor");
  svg.innerHTML = ICONS[name];
  return svg;
}

export function link(href, text, className = "", iconName = "") {
  const anchor = el("a", className);
  anchor.href = href;
  if (iconName) {
    anchor.append(icon(iconName));
  }
  anchor.append(document.createTextNode(text));
  if (/^https?:/.test(href)) {
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
  }
  return anchor;
}

function tagList(tags, className) {
  const list = el("ul", className);
  tags.forEach((tag) => list.append(el("li", `${className}-item`, tag)));
  return list;
}

function pad(index) {
  return String(index + 1).padStart(2, "0");
}

export function renderProfile(root, profile) {
  root.querySelector(".hero__status").textContent = profile.status;
  root.querySelector(".hero__intro").textContent = profile.intro;
  const bio = root.querySelector(".about__bio");
  profile.bio.forEach((paragraph) => bio.append(el("p", "", paragraph)));

  root.querySelectorAll(".resume-links").forEach((slot) => {
    profile.resumes.forEach((resume) => {
      const anchor = link(
        `./${resume.file}`,
        resume.label,
        "button button--ghost",
        "download"
      );
      anchor.target = "_blank";
      anchor.rel = "noopener";
      slot.append(anchor);
    });
  });

  const socials = [
    { href: profile.github, label: "GitHub", icon: "github" },
    { href: profile.linkedin, label: "LinkedIn", icon: "linkedin" },
    { href: profile.scholar, label: "Google Scholar", icon: "scholar" },
    { href: profile.twitter, label: "X", icon: "x" },
    { href: `mailto:${profile.email}`, label: "Email", icon: "mail" },
    {
      href: `tel:${profile.phone.replace(/[^+\d]/g, "")}`,
      label: `Call ${profile.phone}`,
      icon: "phone",
    },
  ];
  root.querySelectorAll(".socials").forEach((list) => {
    socials.forEach((item) => {
      const li = el("li");
      const anchor = link(item.href, "", "socials__link", item.icon);
      anchor.setAttribute("aria-label", item.label);
      anchor.title = item.label;
      li.append(anchor);
      list.append(li);
    });
  });
}

export function renderTicker(track, words) {
  // The list is doubled so the CSS loop can scroll half its width seamlessly.
  [...words, ...words].forEach((word) => {
    track.append(el("span", "ticker__item", word));
  });
}

export function renderStats(list, highlights) {
  highlights.forEach((item) => {
    const li = el("li", "stat reveal");
    const value = el("p", "stat__value");
    const number = el("span", "count", String(item.value));
    number.dataset.target = String(item.value);
    value.append(number, document.createTextNode(item.suffix));
    li.append(value, el("p", "stat__label", item.label));
    list.append(li);
  });
}

export function renderSkillGroups(list, groups) {
  groups.forEach((group, index) => {
    const li = el("li", "tile reveal");
    li.append(
      el("p", "tile__index", pad(index)),
      el("h3", "tile__title", group.label),
      el("p", "tile__blurb", group.blurb),
      tagList(group.items, "tags")
    );
    list.append(li);
  });
}

export function renderFilters(bar, filters, onSelect) {
  filters.forEach((filter) => {
    const chip = el("button", "chip", filter.label);
    chip.type = "button";
    chip.dataset.filter = filter.id;
    chip.setAttribute("aria-pressed", String(filter.id === "all"));
    chip.addEventListener("click", () => onSelect(filter.id));
    bar.append(chip);
  });
}

export function renderProjects(list, projects) {
  projects.forEach((project, index) => {
    const card = el("article", "card reveal");
    if (project.featured) {
      card.classList.add("card--featured");
    }
    card.dataset.category = project.category;

    const top = el("div", "card__top");
    top.append(
      el("span", "card__index", pad(index)),
      el("span", "card__metric", project.metric)
    );

    const links = el("p", "card__links");
    if (project.code) {
      links.append(link(project.code, "Code", "card__link", "github"));
    }
    project.extra.forEach((item) => {
      links.append(link(item.href, item.label, "card__link", "arrow"));
    });

    card.append(
      top,
      el("h3", "card__title", project.title),
      el("p", "card__summary", project.summary),
      tagList(project.tags, "tags")
    );
    if (links.children.length) {
      card.append(links);
    }
    list.append(card);
  });
}

export function renderExperience(list, items) {
  items.forEach((job) => {
    const li = el("li", "job reveal");
    if (!job.points) {
      li.classList.add("job--short");
    }
    const head = el("div", "job__head");
    const titles = el("div");
    titles.append(
      el("h3", "job__title", job.title),
      el("p", "job__where", `${job.where} · ${job.place}`)
    );
    const meta = el("div", "job__meta");
    meta.append(el("p", "job__when", job.when));
    if (job.win) {
      meta.append(el("p", "job__win", job.win));
    }
    head.append(titles, meta);
    li.append(head);

    if (job.points) {
      const points = el("ul", "job__points");
      job.points.forEach((point) => points.append(el("li", "", point)));
      li.append(points);
    } else {
      li.append(el("p", "job__summary", job.summary));
    }
    li.append(tagList(job.tags, "tags"));
    list.append(li);
  });
}

export function renderLeadership(list, items) {
  items.forEach((item) => {
    const li = el("li", "lead reveal");
    li.append(
      el("p", "lead__when", item.when),
      el("h3", "lead__title", item.title),
      el("p", "lead__where", item.where),
      el("p", "lead__text", item.text)
    );
    list.append(li);
  });
}

export function renderChips(list, items) {
  items.forEach((item) => list.append(el("li", "tags-item", item)));
}

export function renderScholar(list, stats) {
  stats.forEach((item) => {
    const li = el("li", "scholar__item reveal");
    const number = el("span", "count", String(item.value));
    number.dataset.target = String(item.value);
    const value = el("p", "scholar__value");
    value.append(number);
    li.append(value, el("p", "scholar__label", item.label));
    list.append(li);
  });
}

export function renderPublications(list, items) {
  const most = Math.max(...items.map((item) => item.cites), 1);
  items.forEach((pub) => {
    const li = el("li", "pub reveal");
    const title = pub.url
      ? link(pub.url, pub.title, "pub__title")
      : el("span", "pub__title", pub.title);
    const meta = el("p", "pub__meta", `${pub.venue} · ${pub.year}`);
    li.append(title, meta);

    const cites = el("p", "pub__cites");
    if (pub.cites) {
      const bar = el("span", "pub__bar");
      bar.style.setProperty("--w", `${(pub.cites / most) * 100}%`);
      cites.append(bar, el("span", "pub__count", `${pub.cites} citations`));
    } else {
      cites.append(el("span", "pub__new", "New in 2026"));
    }
    li.append(cites);
    list.append(li);
  });
}

export function renderAchievements(list, items) {
  items.forEach((item, index) => {
    const li = el("li", "award reveal");
    li.append(
      el("p", "award__index", pad(index)),
      el("h3", "award__title", item.title),
      el("p", "award__org", item.org),
      el("p", "award__text", item.text)
    );
    list.append(li);
  });
}

export function renderPhotos(track, photos) {
  // Doubled for a seamless loop. The copy is hidden from assistive tech.
  [...photos, ...photos].forEach((photo, index) => {
    const li = el("li", "photo");
    if (index >= photos.length) {
      li.setAttribute("aria-hidden", "true");
    }
    const img = el("img");
    img.src = photo.src;
    img.alt = index >= photos.length ? "" : photo.alt;
    img.loading = "lazy";
    img.width = 618;
    img.height = 1100;
    li.append(img, el("p", "photo__caption", photo.caption));
    track.append(li);
  });
}

export function renderEducation(list, items) {
  items.forEach((item) => {
    const li = el("li", "edu reveal");
    li.append(
      el("p", "edu__when", item.when),
      el("h3", "edu__where", item.where),
      el("p", "edu__degree", item.degree),
      el("p", "edu__place", item.place)
    );
    if (item.note) {
      li.append(el("p", "edu__note", item.note));
    }
    list.append(li);
  });
}
