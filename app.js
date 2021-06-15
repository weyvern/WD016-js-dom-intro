const hero = document.getElementById('hero');
const header = document.getElementById('header');
const form = document.getElementById('contact');
/* const header2 = document.querySelector('#header'); */
header.innerHTML = 'Magic?';
header.style.color = 'red';
header.style.border = '1px dotted blue';

const paragraphs = document.querySelectorAll('.red-p');
paragraphs.forEach(p => (p.style.color = 'blue'));

const h1 = document.createElement('h1');
h1.innerHTML = 'Click to make a cat appear';

hero.appendChild(h1);
hero.addEventListener('click', () => {
  // logic
  console.log('clicked...');
  const img = document.createElement('img');
  img.src = 'https://pbs.twimg.com/media/Ez-AaifWYAIiFSQ.jpg';
  img.alt = 'Cat';
  img.style.width = '50%';
  hero.appendChild(img);
});

const submitHandler = event => {
  event.preventDefault();
  console.log(event.target);
  console.log('Submitting...');
};

form.addEventListener('submit', submitHandler);
