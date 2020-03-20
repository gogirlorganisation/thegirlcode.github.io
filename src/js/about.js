import '../sass/about.scss';
import './nav';
import team from '../static/data/team.json';
import chapter from '../static/data/chapter.json';

function createCard(src, name, designation, description, member, tag) {
  // Filter src
  src = src.match(/https/g) ? src : `../${src}`;

  const card = document.createElement('div');
  card.className = 'card';

  card.innerHTML = `
    <div class="img">
      <img src="${src}" alt="${name}">
    </div>
    <div class="info">
      <div class="name">${name}</div>
			<div class="designation">${
        tag
          ? member
            ? `<span class="member pill">Member</span> `
            : `<span class="intern pill">Intern</span> `
          : ''
      }${designation}</div>
      <div class="description">${description}</div>
    </div>
  `;

  return card;
}

function populateCards(el, cards, tag) {
  el.innerHTML = '';
  el.append(
    ...cards.map(({ img, name, designation, desc, member }) =>
      createCard(img, name, designation, desc, member, tag)
    )
  );
}

populateCards(
  document.querySelector('div.team div.cards'),
  team.filter(m => !m.past),
  true
);
populateCards(
  document.querySelector('div.past div.cards'),
  team.filter(m => m.past)
);

//For Chapters section

function createChapCard(chapterName, members) {
  const chapCard = document.createElement('div');
  const memberClass = document.createElement('div');
  chapCard.className = 'chapter';
  memberClass.className = 'members';
  chapCard.innerHTML = `
  <div class="name">${chapterName}</div>`;
  // chapCard.appendChild(memberClass);
  for (let i in members) {
    memberClass.innerHTML += `
            <div class="member">
              <img src="${members[i].src}" alt="${members[i].name}" />
              <div class="name">${members[i].name}</div>
            </div>
          `;
  }
  chapCard.appendChild(memberClass);
  return chapCard;
}

function createChapter(chapEle, chapArr) {
  // chapEle.innerHTML = '';
  chapEle.innerHTML = `<div class="header">Chapters</div>
  <p>
    The Girl Code currently has chapters across the world - in Delhi,
    Hyderabad and Singapore. Chapter leaders get a chance to organise
    workshops and promote the organisation in their own cities and
    communities and encourage young girls to code!
  </p>
  <p>
    If you would like to start a chapter or join an existing one, you
    can register here.
  </p>`;
  chapEle.append(
    ...chapArr.map(({ chapterName, members }) =>
      createChapCard(chapterName, members)
    )
  );
}

createChapter(document.querySelector('div.chapters div.container'), chapter);
