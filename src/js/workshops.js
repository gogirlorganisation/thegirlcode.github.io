import '../sass/workshops.scss';
import './nav';

import workshops from '../static/data/workshops.json';

function Workshop(workshop) {
  const workshopEl = document.createElement('a');
  workshopEl.className = 'workshop';

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

  workshopEl.appendChild(overlayDiv);
  workshopEl.appendChild(backgroundDiv);

  return workshopEl;
}

function linkWorkshop(workshopEl, slug) {
  workshopEl.setAttribute('href', `/workshop?s=${slug}`);

  return workshopEl;
}

function createFragment(workshops, f, m) {
  const workshopEls = workshops.filter(f).map(m);
  const fragment = document.createDocumentFragment();
  for (let div of workshopEls) {
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
