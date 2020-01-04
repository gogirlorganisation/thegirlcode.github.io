import "../sass/workshop.scss";
import "./nav";
import slider from "./slider";
import workshops from "../static/data/workshops.json";

const params = {};
const parser = document.createElement("a");
parser.href = window.location.href;
const query = parser.search.substring(1);
const vars = query.split("&");
for (let i = 0; i < vars.length; i++) {
  const pair = vars[i].split("=");
  params[pair[0]] = decodeURIComponent(pair[1]);
}
const slug = params.s;

const workshop = workshops.find(w => w.slug === slug);

if (!workshop || !workshop.past) location.href = "/workshops";

document.querySelector(
  "header"
).style.backgroundImage = `url(/${workshop.heroImg})`;
document.querySelector("header .hero .name").innerText = workshop.school;
document.querySelector("header .hero .date").innerText = workshop.date;

const bodySectionFragment = document.createDocumentFragment();
workshop.body.forEach(b => {
  const p = document.createElement("p");
  p.innerHTML = b;
  bodySectionFragment.appendChild(p);
});
document.querySelector(".section.body").appendChild(bodySectionFragment);

document.querySelector(
  ".section.three-col .participants .n"
).innerText = String(workshop.participants);
document.querySelector(".section.three-col .hours .n").innerText = String(
  workshop.hours
);
document.querySelector(".section.three-col .days .n").innerText = String(
  workshop.days
);
if (workshop.days === 1) {
  document.querySelector(".section.three-col .days .heading").innerText = "Day";
}

for (let i = 0, j = workshop.gallery.length; i < j; i++) {
  const img = document.createElement("img");
  img.src = `/${workshop.gallery[i]}`;
  document.querySelector(".galleryitems").appendChild(img);
}

slider();
