// Small DOM helpers plus the functions that turn data.js into page content.

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

export function link(href, text, className = "") {
  const anchor = el("a", className, text);
  anchor.href = href;
  if (/^https?:/.test(href)) {
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
  }
  return anchor;
}

export function renderProfile(root, profile) {
  root.querySelector(".hero__role").textContent = profile.role;
  root.querySelector(".hero__intro").textContent = profile.intro;
 
  root
    .querySelector(".about__bio")
    .replaceChildren(
      ...profile.bio.map((paragraph) => el("p", "about__paragraph", paragraph)),
    );
}

export function renderTimeline(list, items) {
  list.replaceChildren(
    ...items.map((item) => {
      const entry = el("li", "timeline__item");
      entry.append(
        el("p", "timeline__when", item.when),
        el("h3", "timeline__title", item.title),
        el("p", "timeline__where", item.where),
      );
      if (item.summary) {
        entry.append(el("p", "timeline__summary", item.summary));
      }
      if (item.points && item.points.length > 0) {
        const points = el("ul", "timeline__points");
        item.points.forEach((point) => {
          points.append(el("li", "timeline__point", point));
        });
        entry.append(points);
      }
      return entry;
    }),
  );
}

export function renderContact(list, profile) {
  list.replaceChildren(
    ...profile.contact
      .filter((channel) => channel.href)
      .map((channel) => {
        const item = el("li", "contact__item");
        item.append(
          el("span", "contact__label", channel.label),
          link(channel.href, channel.text, "contact__link"),
        );
        return item;
      }),
  );
}

export function renderProjects(list, projects, skills) {
  const labels = new Map(skills.map((skill) => [skill.id, skill.label]));

  list.replaceChildren(
    ...projects.map((project) => {
      const article = el("article", "project");
      article.id = `project-${project.id}`;
      article.dataset.skills = project.skills.join(" ");

      const body = el("div", "project__body");
      body.append(el("h3", "project__title", project.title));
      if (project.category) {
        body.append(el("p", "project__meta", project.category));
      }
      body.append(el("p", "project__summary", project.summary));
      if (project.tools) {
        body.append(el("p", "project__tools", `Tools: ${project.tools}`));
      }

      const tags = el("ul", "project__skills");
      tags.setAttribute("aria-label", "Skills used");
      project.skills.forEach((id) => {
        tags.append(el("li", "project__skill", labels.get(id) ?? id));
      });
      body.append(tags);

      const links = el("p", "project__links");
      if (project.code) {
        links.append(link(project.code, "Code", "project__link"));
      }
      if (project.demo) {
        links.append(link(project.demo, "Live demo", "project__link"));
      }
      if (links.childElementCount > 0) {
        body.append(links);
      }

      article.append(body);
      return article;
    }),
  );
}

export function renderEntries(list, entries) {
  list.replaceChildren(
    ...entries.map((entry) => {
      const item = el("li", "entry");
      const title = el("h3", "entry__title");
      title.append(entry.url ? link(entry.url, entry.title) : entry.title);
      item.append(title, el("p", "entry__meta", entry.meta));
      if (entry.summary) {
        item.append(el("p", "entry__summary", entry.summary));
      }
      return item;
    }),
  );
}
