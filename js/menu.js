let formData = {
  name: '',
  email: '',
  message: '',
};

const menu = document.querySelector('#sandwich');
const crossElement = document.querySelector('#bar img');
const mobileMenu = document.querySelector('#mobile-menu');
const works = document.querySelector('.works');
const popupWindow = document.querySelector('.popup-window');
let content = '';
const email = document.querySelector('input[type="email"]');
const nom = document.querySelector('input[id="name"]');
const message = document.querySelector('textarea');
const errorTag = document.querySelector('#error');
const form = document.querySelector('form');
const projets = [
  {
    key: 0,
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    textDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
     when an unknown printer took a galley of type and scrambled it to make a type specimen book.
     It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    featuredImage: './images/c1.png',
    technologies: ['html', 'css', 'javascript'],
    linkToLiveVersion: 'https://azy64.github.io/Portfolio/',
    linkToSource: 'https://github.com/azy64/Portfolio',
  },
  {
    key: 1,
    name: 'Display Nodes from API',
    description: 'Using an API to display the nodes of a graph.',
    textDescription: `using an API to display the nodes of a graph. This application is a simple example of how to use the Graph API to display a graph.
    Nodes are taken from other server and with Redux we dispatch an action to the store to update the state. `,
    featuredImage: './images/nodes.png',
    technologies: ['React', 'Redux', 'javascript', 'Css'],
    linkToLiveVersion: 'https://github.com/azy64/-toy-blocks-client-react',
    linkToSource: 'https://github.com/azy64/-toy-blocks-client-react',
  },
  {
    key: 2,
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    textDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
     when an unknown printer took a galley of type and scrambled it to make a type specimen book.
     It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    featuredImage: './images/c4.png',
    technologies: ['html', 'css', 'javascript'],
    linkToLiveVersion: 'https://azy64.github.io/Portfolio/',
    linkToSource: 'https://github.com/azy64/Portfolio',
  },
  {
    key: 3,
    name: 'REACT using COVID API',
    description: 'This React capstone project is about building a mobile web application to check a list of metrics (numeric values) that we created making use of React and Redux.',
    textDescription: `We selected an API that provides numeric data about a topic that we like and then build the web app around it. The web app has several pages:

    one page with a list of items that could be filtered by some parameters. An example can be a list of metrics that can be filtered by the country (imagine a search field to introduce the country name like Italy, Croatia, etc.). This page should be our homepage.
    
    one page for the item details; in the example, the detail page for Czech Republic cities with a number of views.`,
    featuredImage: 'https://github.com/azy64/react-capstone/blob/dev/screen1.png?raw=true',
    technologies: ['React', 'Redux', 'html', 'css', 'javascript'],
    linkToLiveVersion: 'https://azy64.github.io/Portfolio/',
    linkToSource: 'https://github.com/azy64/react-capstone',
  },
];
const getLink = (tab = []) => {
  if (tab.length === 0) return '';
  let link = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < tab.length; i++) {
    link += `<li><a href="#" class="cat m-l-5">${tab[i]}</a></li>`;
  }
  return link;
};
const giveOrder = (index) => {
  if ((index % 2) !== 0) return 'order';
  return '';
};
const addCard = ({
  key, name, description, featuredImage, technologies, linkToSource,
}) => {
  const card = `
  <div class="card w-90 bg-white b-rounded ">
  <div class="card-group">
      <div class="card-img w-90 p-t-10 ">
          <img src="${featuredImage}" alt="image_card" class="block w-100" />
      </div>
      <div class="${giveOrder(key)}">
          <div class="card-title w-90">
              <h2 class="m-0 p-0">${name}</h2>
          </div>
          <div class="card-sub-title w-90">
              <b>CANOPY</b>
              <span class="counter">
                  <img src="./images/Counter.png" alt="counter">
                  Back End Dev
              </span>
              <span class="counter">
                  <img src="./images/Counter.png" alt="counter">
                  2015
              </span>
          </div>
          <div class="card-content w-90">
              ${description}
          </div>
          <div class="card-link w-90 ">
              <ul class="card-link-group">
              ${getLink(technologies)}
              </ul>
          </div>
          <div class="card-sup w-90">
              <a class="underline-none popup-click" href="${linkToSource}">
                  See Project
              </a>
          </div>
      </div>
  </div>
</div>
  `;
  return card;
};
const addProjects = () => {
  projets.forEach((projet) => {
    content += addCard(projet);
  });
  works.innerHTML = content;
};
const displayMenu = () => {
  menu.addEventListener('click', () => {
    document.querySelector('#mobile-menu').classList.add('show');
  });
};
const hideMenu = () => {
  crossElement.addEventListener('click', () => {
    mobileMenu.classList.remove('show');
  });
};
const menuItemsClicked = () => {
  const anchors = document.querySelectorAll('.options li a');
  anchors.forEach((anchor) => {
    anchor.addEventListener('click', () => {
      mobileMenu.classList.remove('show');
    });
  });
};

const handleForDesktop = () => {
  if (window.innerWidth > 800) return 'class="grid col-2-d"';
  return '';
};

const alertPopup = (
  {
    name, featuredImage, technologies,
    textDescription, linkToSource, linkToLiveVersion,
  },
) => {
  const popup = `
  <div class="popup-width bg-white h-90 m-auto b-rounded p-4 overflow-scroll">
  <div class="grid col-2">
      <div>
          <h3 class="popup-title text-blue-custom text-bold p-0 m-0">${name}</h3>
      </div>
      <div class="text-right center grid end">
          <img src="./images/close1.png" alt="image_cross" class="popup-close"  width="30px"/>
      </div>
  </div>
  <div>
      <div class="card-sub-title w-90">
          <b>CANOPY</b>
          <span class="counter">
              <img src="./images/Counter.png" alt="counter">
              Back End Dev
          </span>
          <span class="counter">
              <img src="./images/Counter.png" alt="counter">
              2015
          </span>
      </div>
  </div>
  <div class="popup-image w-100 align-left-center">
      <img src="${featuredImage}" alt="image_popup" class="d-block w-100 m-auto"/>
  </div>
  <div ${handleForDesktop()}>
    <div>
        <div class="overflow-scroll m-0 p-0">
            <p class="text-blue-text">
              ${textDescription}
            </p>
        </div>
    </div>
    <div class="m-0">
        <div class="card-link w-90 ">
            <ul class="card-link-group">
                ${getLink(technologies)}
            </ul>
        </div>
        <div class="card-sup m-0 w-100 grid col-2">
            <a class="underline-none w-80 p-8 align-center" href="${linkToLiveVersion}">
              See live<img src="./images/see-live.svg" alt="img_see_live" class="m-l-5" />
            </a>
            <a class="underline-none w-80 p-8 align-center" href="${linkToSource}">
              See Source<img src="./images/github.svg" alt="img_see_live" class="m-l-5"/>
            </a>
        </div>
    </div>
  </div>
</div>
  `;
  popupWindow.innerHTML = popup;
  popupWindow.classList.remove('hidden');
};

const removePopup = () => {
  popupWindow.innerHTML = '';
  popupWindow.classList.add('hidden');
};
const displayPopup = () => {
  const clickedProjets = document.querySelectorAll('.popup-click');
  clickedProjets.forEach((cardButton, key) => {
    cardButton.addEventListener('click', (e) => {
      alertPopup(projets[key]);
      document.querySelector('.popup-close').addEventListener('click', removePopup);
      e.preventDefault();
    });
  });
};

const showMessage = (tagElement, targetElement) => {
  tagElement.textContent = '';
  tagElement.textContent = targetElement.validationMessage;
  errorTag.appendChild(tagElement);
};
const validation = () => {
  const span = document.createElement('span');
  span.classList.add('text-red');
  span.classList.add('m-l-5');
  span.classList.add('text-small');
  span.classList.add('text-bold');
  span.classList.add('bg-white');
  email.addEventListener('input', () => {
    if (email.validity.typeMismatch) {
      showMessage(span, email);
    }
    if (email.validity.valid) {
      formData.email = email.value;
      localStorage.setItem('formData', JSON.stringify(formData));
      span.textContent = '';
    }
  });
  email.addEventListener('focus', () => {
    if (email.validity.valueMissing) {
      showMessage(span, email);
    }
    if (email.validity.valid) {
      span.textContent = '';
    }
  });
  form.addEventListener('submit', (e) => {
    if (!email.validity.valid) {
      showMessage(span, email);
      e.preventDefault();
    } else {
      form.submit();
    }
  });
};
const loadData = () => {
  if (localStorage.getItem('formData')) {
    formData = JSON.parse(localStorage.getItem('formData'));
    email.value = formData.email;
    nom.value = formData.name;
    message.value = formData.message;
  }
};
const saveData = () => {
  nom.addEventListener('input', () => {
    formData.name = nom.value;
    localStorage.setItem('formData', JSON.stringify(formData));
  });

  message.addEventListener('input', () => {
    formData.message = message.value;
    localStorage.setItem('formData', JSON.stringify(formData));
  });
};

window.addEventListener('scroll', () => {
  if (window.pageYOffset >= 5 && window.innerWidth >= 805) {
    document.querySelector('header').classList.add('ombre');
  } else document.querySelector('header').classList.remove('ombre');
});
loadData();
addProjects();
hideMenu();
displayMenu();
menuItemsClicked();
displayPopup();
validation();
saveData();