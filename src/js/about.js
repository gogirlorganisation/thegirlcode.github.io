import '../sass/about.scss';
import './nav';
import team from '../static/data/team.json';

function createCard(src, name, designation, description) {
  // Filter src
  src = src.match(/https/g) ? src : `../${src}`;

  const card = document.createElement('div');
  card.className = 'card';

  const imgContainer = document.createElement('div');
  imgContainer.className = 'img';
  const img = document.createElement('img');
  img.src = src;
  img.alt = name;
  imgContainer.appendChild(img);
  card.appendChild(imgContainer);

  const infoContainer = document.createElement('div');
  infoContainer.className = 'info';
  const nameDiv = document.createElement('div');
  nameDiv.className = 'name';
  nameDiv.innerText = name;
  infoContainer.appendChild(nameDiv);
  const designationDiv = document.createElement('div');
  designationDiv.className = 'designation';
  designationDiv.innerText = designation;
  infoContainer.appendChild(designationDiv);
  const descriptionDiv = document.createElement('div');
  descriptionDiv.className = 'description';
  descriptionDiv.innerText = description;
  infoContainer.appendChild(descriptionDiv);
  card.appendChild(infoContainer);

  return card;
}

const cards = document.querySelector('div.cards');
cards.innerHTML = '';
for (let member of team) {
  cards.appendChild(
    createCard(member.img, member.name, member.designation, member.desc)
  );
}
