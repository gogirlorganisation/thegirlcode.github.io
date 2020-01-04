import "../sass/about.scss";
import "./nav";
import team from "../static/data/team.json";

function createCard(src, name, designation, description, member) {
  // Filter src
  src = src.match(/https/g) ? src : `../${src}`;

  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <div class="img">
      <img src="${src}" alt="${name}">
    </div>
    <div class="info">
      <div class="name">${name}</div>
      <div class="designation">${
        member
          ? `<span class="member pill">Member</span> `
          : `<span class="intern pill">Intern</span> `
      }${designation}</div>
      <div class="description">${description}</div>
    </div>
  `;

  return card;
}

const cards = document.querySelector("div.cards");
cards.innerHTML = "";
cards.append(
  ...team.map(({ img, name, designation, desc, member }) =>
    createCard(img, name, designation, desc, member || false)
  )
);
