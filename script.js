const openMenuBtn = document.getElementById('menu-open');
const nav = document.getElementById('menu');
const closeMenuBtn = document.getElementById('menu-close');
const mainLogo = document.getElementById('main-logo');

function toggleMenu() {
  nav.classList.toggle('hidden');
  nav.classList.toggle('flex');
  mainLogo.classList.toggle('hidden');
  openMenuBtn.classList.toggle('hidden');
  document.body.classList.toggle('overflow-hidden');
}

openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);

// Delete this {longerVersionOfTheAbove} function it was added so I could collapse the commented function
// function longerVersionOfTheAbove() {
//   function openMenuItems() {
//     openMenu.addEventListener('click', () => {
//       nav.classList.remove('hidden');
//       nav.classList.add('flex');
//       mainLogo.classList.add('hidden');
//       openMenu.classList.add('hidden');
//       document.body.classList.add('overflow-hidden');
//     });
//   }
//   openMenuItems();
//   function closeMenuItems() {
//     closeMenu.addEventListener('click', () => {
//       nav.classList.add('hidden');
//       nav.classList.remove('flex');
//       mainLogo.classList.remove('hidden');
//       openMenu.classList.remove('hidden');
//       document.body.classList.remove('overflow-hidden');
//     });
//   }
//   closeMenuItems();
// }

const changeContent = document.getElementById('change-content');
const contentLi = changeContent.querySelectorAll('li');
const contentLinks = changeContent.querySelectorAll('li a');

const firstTab = document.getElementById('tab-one');
const secondTab = document.getElementById('tab-two');
const thirdTab = document.getElementById('tab-three');

contentLi.forEach((li, index) => {
  li.addEventListener('click', (e) => {
    e.preventDefault();

    // Remove active color and border from all links
    contentLinks.forEach((a) => {
      a.classList.remove('border-red');
      a.classList.add('border-transparent');
      a.classList.remove('text-darkblue');
      a.classList.add('text-grey-50');
    });

    // Add active color and border to clicked link
    const anchor = li.querySelector('a');
    anchor.classList.remove('border-transparent');
    anchor.classList.add('border-red');
    anchor.classList.remove('text-grey-50');
    anchor.classList.add('text-darkblue');

    // Hide all tabs first
    firstTab.classList.add('hidden');
    secondTab.classList.add('hidden');
    thirdTab.classList.add('hidden');

    // Show the correct one
    if (index === 0) {
      firstTab.classList.remove('hidden');
    } else if (index === 1) {
      secondTab.classList.remove('hidden');
    } else {
      thirdTab.classList.remove('hidden');
    }
  });
});

const questions = document.querySelectorAll('#toggle-question button');
const answers = document.querySelectorAll('#toggle-question p');

questions.forEach((que, index) => {
  que.addEventListener('click', () => {
    answers.forEach((ans, i) => {
      const currentImage = questions[i].querySelector('img');

      // Toggle question and answer
      if (i === index) {
        ans.classList.toggle('hidden');
        currentImage.classList.toggle('rotate-180');
      } else {
        ans.classList.add('hidden');
        currentImage.classList.remove('rotate-180');
      }
    });
  });
});

const form = document.querySelector('#form');
const input = document.querySelector('#input');
const formImg = document.querySelector('#form img');
const error = document.querySelector('.error');
const inputImageContainer = document.querySelector('#input-image-container');

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

const submitForm = (e) => {
  e.preventDefault();

  const value = input.value.trim();

  const resetStyles = () => {
    inputImageContainer.classList.remove(
      'bg-red',
      'bg-green-500',
      'p-[0.2rem]',
    );
    error.textContent = '';
    formImg.classList.add('hidden');
    input.value = '';
  };

  if (value === '') {
    inputImageContainer.classList.add('bg-red', 'p-[0.2rem]');
    error.textContent = 'Email is required';
    formImg.classList.remove('hidden');

    setTimeout(resetStyles, 3000);
  } else if (!emailRegex.test(value)) {
    inputImageContainer.classList.add('bg-red', 'p-[0.2rem]');
    error.textContent = "Whoops, make sure it's an email";
    formImg.classList.remove('hidden');

    setTimeout(resetStyles, 3000);
  } else {
    inputImageContainer.classList.add('bg-green-500', 'p-[0.2rem]');
    error.textContent = 'Good Job';

    setTimeout(resetStyles, 3000);
  }
};

form.addEventListener('submit', submitForm);
