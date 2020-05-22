import '../sass/build.scss';
import './nav';
import slider from './build-slider';
import reviews from '../static/data/build.json';

for (let i = 0, j = reviews.length; i < j; i++) {
  const written = document.createElement('div');
  written.setAttribute('class', 'written');

  const review = document.createElement('p');
  review.setAttribute('class', 'review');
  review.innerText = String(reviews[i].review);

  const author = document.createElement('p');
  author.setAttribute('class', 'author');
  author.innerText = String(reviews[i].author);

  const school = document.createElement('p');
  school.setAttribute('class', 'institute');
  school.innerText = String(reviews[i].school);

  written.appendChild(review);
  written.appendChild(author);
  written.appendChild(school);
  document.querySelector('.dimigo .galleryitems').appendChild(written);
  //   console.log(review, author, school);
}

slider();
