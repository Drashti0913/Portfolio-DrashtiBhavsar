// Small DOM helpers plus the functions that turn data.js into page content.

const ICONS = {
  github:
    '<path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"/>',
  linkedin:
    '<path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11.5H3V9.75Zm6.5 0h3.83v1.57h.06c.53-1 1.84-2.07 3.79-2.07 4.05 0 4.8 2.67 4.8 6.13v5.87h-4v-5.2c0-1.24-.02-2.84-1.73-2.84-1.73 0-2 1.35-2 2.75v5.29h-4V9.75Z"/>',
  scholar:
    '<path d="M12 2 1 9l11 7 9-5.73V17h2V9L12 2Zm-6 10.95v4.3C6 19.3 8.7 21 12 21s6-1.7 6-3.75v-4.3l-6 3.82-6-3.82Z"/>',
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

export function renderProfile(root, profile) {
  root.querySelector(".hero__intro").textContent = profile.intro;
  root.querySelector(".hero__status-text").textContent = profile.status;
  const paragraphs = profile.bio.map((p) => el("p", "about__paragraph", p));
  root.querySelector(".about__bio").replaceChildren(...paragraphs);

  const actions = root.querySelector(".hero__actions");
  if (profile.resume) {
    actions.append(
      link(profile.resume, "Resume", "button button--ghost", "download")
    );
  }
  const socials = root.querySelector(".hero__links");
  socials.replaceChildren(
    ...[
      ["GitHub", profile.github, "github"],
      ["LinkedIn", profile.linkedin, "linkedin"],
      ["Google Scholar", profile.scholar, "scholar"],
    ].map(([label, href, name]) => {
      const item = el("li");
      item.append(link(href, label, "social", name));
      return item;
    })
  );
}

export function renderHighlights(list, highlights) {
  const items = highlights.map((item) => {
    const entry = el("li", "highlight");
    entry.append(
      el("span", "highlight__value", item.value),
      el("span", "highlight__label", item.label)
    );
    return entry;
  });
  list.replaceChildren(...items);
}

export function renderSkillGroups(list, groups) {
  const items = groups.map((group, index) => {
    const entry = el("li", "tile reveal");
    entry.append(
      el("span", "tile__index", String(index + 1).padStart(2, "0")),
      el("h3", "tile__title", group.label),
      el("p", "tile__blurb", group.blurb),
      tagList(group.items, "tags")
    );
    return entry;
  });
  list.replaceChildren(...items);
}

export function renderFilters(bar, filters, onSelect) {
  const chips = filters.map((filter) => {
    const chip = el("button", "chip", filter.label);
    chip.type = "button";
    chip.dataset.filter = filter.id;
    chip.setAttribute("aria-pressed", "false");
    chip.addEventListener("click", () => onSelect(filter.id));
    return chip;
  });
  bar.replaceChildren(...chips);
}

export function renderProjects(list, projects) {
  const cards = projects.map((project) => {
    const card = el("article", "card reveal");
    card.id = `project-${project.id}`;
    card.dataset.category = project.category;

    const repo = project.code.replace("https://github.com/", "");
    card.append(
      el("p", "card__repo", repo.split("/")[1]),
      el("h3", "card__title", project.title),
      el("p", "card__summary", project.summary),
      tagList(project.tags, "tags")
    );

    const links = el("p", "card__links");
    links.append(link(project.code, "View on GitHub", "card__link", "github"));
    project.extra.forEach((extra) => {
      links.append(link(extra.href, extra.label, "card__link", "arrow"));
    });
    card.append(links);
    return card;
  });
  list.replaceChildren(...cards);
}

export function renderExperience(list, items) {
  const entries = items.map((item) => {
    const entry = el("li", "job reveal");
    const head = el("div", "job__head");
    head.append(
      el("h3", "job__title", item.title),
      el("p", "job__when", item.when)
    );
    const points = el("ul", "job__points");
    item.points.forEach((point) => points.append(el("li", "", point)));
    entry.append(
      head,
      el("p", "job__where", item.where),
      points,
      tagList(item.tags, "tags")
    );
    return entry;
  });
  list.replaceChildren(...entries);
}

export function renderEducation(list, items) {
  const entries = items.map((item) => {
    const entry = el("li", "edu reveal");
    entry.append(
      el("p", "edu__degree", item.degree),
      el("h3", "edu__field", item.field),
      el("p", "edu__where", item.where),
      el("p", "edu__when", [item.when, item.note].filter(Boolean).join(" · "))
    );
    return entry;
  });
  list.replaceChildren(...entries);
}

export function renderAchievements(list, items) {
  const entries = items.map((item) => {
    const entry = el("li", "tile tile--plain reveal");
    entry.append(
      el("h3", "tile__title", item.title),
      el("p", "tile__blurb", item.text)
    );
    return entry;
  });
  list.replaceChildren(...entries);
}

export function renderPublications(list, items) {
  const entries = items.map((item) => {
    const entry = el("li", "pub reveal");
    const title = el("h3", "pub__title");
    if (item.url) {
      title.append(link(item.url, item.title));
    } else {
      title.textContent = item.title;
    }
    entry.append(el("span", "pub__venue", item.venue), title);
    return entry;
  });
  list.replaceChildren(...entries);
}

export function renderContact(list, profile) {
  const channels = [
    ["Email", `mailto:${profile.email}`, profile.email, "mail"],
    ["GitHub", profile.github, "github.com/Drashti0913", "github"],
    [
      "LinkedIn",
      profile.linkedin,
      "linkedin.com/in/drashtibhavsar9",
      "linkedin",
    ],
    ["Scholar", profile.scholar, "Google Scholar profile", "scholar"],
  ];
  list.replaceChildren(
    ...channels.map(([label, href, text, name]) => {
      const item = el("li", "contact__item");
      item.append(
        el("span", "contact__label", label),
        link(href, text, "contact__link", name)
      );
      return item;
    })
  );
}
