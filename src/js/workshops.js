import '../sass/workshops.scss';
import './nav';

import workshops from '../static/data/workshops.json';

function Workshop(workshop) {
  const workshopDiv = document.createElement('div');
  workshopDiv.className = 'workshop';

  const backgroundDiv = document.createElement('div');
  backgroundDiv.className = 'background';
  backgroundDiv.style.backgroundImage = `url(/${workshop.thumbnail})`;

  const overlayDiv = document.createElement('div');
  overlayDiv.className = 'overlay';

  const nameDiv = document.createElement('div');
  nameDiv.className = 'name';
  nameDiv.innerText = workshop.school;
  overlayDiv.appendChild(nameDiv);

  const dateDiv = document.createElement('div');
  dateDiv.className = 'date';
  dateDiv.innerText = workshop.date;
  overlayDiv.appendChild(dateDiv);

  workshopDiv.appendChild(overlayDiv);
  workshopDiv.appendChild(backgroundDiv);

  return workshopDiv;
}

function linkWorkshop(workshopDiv, slug) {
  workshopDiv.addEventListener('click', e => {
    e.preventDefault();
    window.location.assign(`workshop?slug=${workshop.slug}`);
  });

  return workshopDiv;
}

function createFragment(workshops, f, m) {
  const workshopDivs = workshops.filter(f).map(m);
  const fragment = document.createDocumentFragment();
  for (let div of workshopDivs) {
    fragment.appendChild(div);
  }

  return fragment;
}

document
  .querySelector('.section.upcoming .workshops')
  .appendChild(createFragment(workshops, w => !w.past, Workshop));

document
  .querySelector('.section.past .workshops')
  .appendChild(
    createFragment(
      workshops,
      w => w.past,
      w => linkWorkshop(Workshop(w), w.slug)
    )
  );
// const pastWorkshopDivs = workshops
//   .filter(w => w.past)
//   .map(w => linkWorkshop(Workshop(w), w.slug));
// const pastFragment = document.createDocumentFragment();
// for (let pastWorkshopDiv of pastWorkshopDivs) {
//   pastFragment.appendChild(pastWorkshopDiv);
// }
