var myEmail = "chabusov.tikhon@yandex.com";
var email = document.getElementById("myEmail");
email.innerHTML = myEmail;
email.href = "mailto:" + myEmail;
email.textContent = myEmail;
document.getElementById("resumeEmail").innerHTML = myEmail;
document.getElementById("contactEmail").innerHTML = myEmail;


var myAdress = "Kaluga, Russia";
document.getElementById("contactAddress").innerHTML = myAdress;
document.getElementById("resumeAdress").innerHTML = myAdress;



var myProfile = "Django-developer";
document.getElementById("myProfile").innerHTML = myProfile;

var myName = "Tikhon Chabusov";
document.getElementById("myName").innerHTML = myName;
document.getElementById("myTitle").innerHTML = myName;
document.getElementById("Nameh2").innerHTML = "I am " + myName;
document.getElementById("resumeH4").innerHTML = myName;


var myPhone = "+7 (963) 762-00-05";
document.getElementById("myPhone").innerHTML = myPhone;
document.getElementById("resumeTel").innerHTML = myPhone;
document.getElementById("contactTel").innerHTML = myPhone;



var myDescription = "Портфолио Django-разработчика. Здесь вы найдете примеры моих работ, включая веб-приложения различной сложности. Я специализируюсь на создании надежных и масштабируемых бэкендов на Python и Django.";
var metaElementDescription = document.querySelector('meta[name="description"]');
if (metaElementDescription) {
    metaElementDescription.setAttribute("content", myDescription);
  } else {
    console.error("Meta tag with name='description' not found!");
  }

var myKeywords = "Портфолио Django-разработчика. Здесь вы найдете примеры моих работ, включая веб-приложения различной сложности. Я специализируюсь на создании надежных и масштабируемых бэкендов на Python и Django.";
var metaElementKeywords = document.querySelector('meta[name="keywords"]');
if (metaElementKeywords) {
    metaElementKeywords.setAttribute("content", myKeywords);
} else {
    console.error("Meta tag with name='keywords' not found!");
}



/**
 * Функция для загрузки данных о навыках из JSON и заполнения контейнера
 * @param {string} url - Путь к JSON-файлу
 * @param {string} targetSelector - Селектор контейнера для навыков
 */
async function populateSkillsFromJson(url, targetSelector) {
  const skillsContainer = document.querySelector(targetSelector);

  if (!skillsContainer) {
    console.error(`Container with selector "${targetSelector}" not found.`);
    return;
  }

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Ошибка загрузки JSON: ${response.status}`);
      }
      return response.json();
    })
    .then(skills => {
      skillsContainer.innerHTML = '<h5>Skills</h5>';

      skills.forEach(skill => {
        const skillItem = document.createElement("div");
        skillItem.classList.add("progress");

        skillItem.innerHTML = `
          <span class="skill">
            <span>${skill.name}</span>
            <i class="val">${skill.value}%</i>
          </span>
          <div class="progress-bar-wrap">
            <div class="progress-bar" role="progressbar" aria-valuenow="${skill.value}" aria-valuemin="0" aria-valuemax="100" style="width: ${skill.value}%;"></div>
          </div>
        `;

        skillsContainer.appendChild(skillItem);
      });
    })
    .catch(error => console.error('Ошибка:', error));
}

populateSkillsFromJson('/assets/content/skills.json', '.skills-content');



  /**
 * Функция для наполнения блока Образование
 * @param {string} url - URL до JSON файла
 * @param {string} targetId - id блока который нужно наполнить
 */
async function populateEducationFromJson(url, targetId) {
  const container = document.getElementById(targetId);

  if (!container) {
    console.error(`Element with id "${targetId}" not found.`);
    return;
  }

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Ошибка загрузки данных: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      data.forEach(item => {
        const resumeItem = document.createElement('div');
        resumeItem.className = 'resume-item';

        resumeItem.innerHTML = `
          <h4>${item.degree}</h4>
          <h5>${item.years}</h5>
          <p><em>${item.institution}</em></p>
          <p>${item.description}</p>
          <!-- Edn Education Item -->
        `;

        container.insertAdjacentElement('afterend', resumeItem);
      });
    })
    .catch(error => console.error('Ошибка:', error));
}

populateEducationFromJson('/assets/content/education.json', 'education-section');





/**
 * Функция для загрузки профессионального опыта из JSON и заполнения контейнера
 * @param {string} url - Путь к JSON-файлу
 * @param {string} targetId - ID контейнера, в который будут добавлены данные
 */
async function loadExperienceFromJson(url, targetId) {
  const experienceContainer = document.getElementById(targetId);

  if (!experienceContainer) {
    console.error(`Element with id "${targetId}" not found.`);
    return;
  }

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error loading JSON: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      data.forEach(experience => {
        const experienceItem = document.createElement('div');
        experienceItem.classList.add('resume-item');

        const title = document.createElement('h4');
        title.textContent = experience.title;
        experienceItem.appendChild(title);

        const years = document.createElement('h5');
        years.textContent = experience.years;
        experienceItem.appendChild(years);

        const company = document.createElement('p');
        company.innerHTML = `<em>${experience.company}</em>`;
        experienceItem.appendChild(company);

        const tasksList = document.createElement('ul');
        experience.tasks.forEach(task => {
          const taskItem = document.createElement('li');
          taskItem.textContent = task;
          tasksList.appendChild(taskItem);
        });
        experienceItem.appendChild(tasksList);

        experienceContainer.appendChild(experienceItem);
      });
    })
    .catch(error => console.error('Error:', error));
}

loadExperienceFromJson('/assets/content/professional_experience.json', 'experience');

   

  const statsData = {
    "stats": [
      // { "label": "Clients", "value": 0 },
      // { "label": "Projects", "value": 0 },
      // { "label": "Hours Of Support", "value": 0 },
      // { "label": "Awards", "value": 0 }
    ]
  };


  /**
   * Функция для наполнения секции stats
   * @param {*} data - Достижения.
   */
  function populateStats(data) {
    const statsContainer = document.querySelector("#stats .container .row");

    statsContainer.innerHTML = '';

    data.stats.forEach(item => {
      const statItem = document.createElement("div");
      statItem.classList.add("col-lg-3", "col-md-6");

      statItem.innerHTML = `
        <div class="stats-item text-center w-100 h-100">
          <span data-purecounter-start="0" data-purecounter-end="${item.value}" data-purecounter-duration="0" class="purecounter">${item.value}</span>
          <p>${item.label}</p>
        </div>
      `;
      statsContainer.appendChild(statItem);
    });
  }
 if(stats) {
    populateStats(statsData);
 }



 // Инициализация Isotope
let iso;

async function loadProjects() {
  try {
    const response = await fetch('/assets/content/projects.json');
    if (!response.ok) {
      throw new Error('Ошибка загрузки JSON');
    }

    const data = await response.json();
    const portfolioContainer = document.querySelector('.isotope-container');
    
    // Очищаем контейнер перед добавлением новых элементов
    portfolioContainer.innerHTML = '';

    // Проходим по каждому проекту и создаем элементы
    data.projects.forEach(project => {
      const portfolioItem = document.createElement('div');
      
      // Добавляем необходимые классы, включая категорию
      portfolioItem.classList.add('col-lg-4', 'col-md-6', 'portfolio-item', 'isotope-item', `filter-${project.category.toLowerCase()}`);

      // Добавляем HTML-содержимое для каждого проекта
      portfolioItem.innerHTML = `
        <img src="${project.image}" class="img-fluid" alt="${project.title}" style="min-height: 20vh;">
        <div class="portfolio-info">
          <h4>${project.title}</h4>
          <p>${project.description}</p>
          
          <a href="${project.link}" title="${project.title}" class="details-link">
            <i class="bi bi-link-45deg"></i>
          </a>
        </div>
      `;

      // Добавляем созданный элемент в контейнер
      portfolioContainer.appendChild(portfolioItem);
    });

    // После того, как данные добавлены, инициализируем Isotope
    iso = new Isotope('.isotope-container', {
      itemSelector: '.portfolio-item',
      layoutMode: 'masonry',
      filter: '*', // Показываем все элементы по умолчанию
    });

    // Убедитесь, что фильтры работают
    const filters = document.querySelectorAll('.portfolio-filters li');
    filters.forEach(filter => {
      filter.addEventListener('click', function() {
        // Убираем активный класс с предыдущего фильтра
        filters.forEach(f => f.classList.remove('filter-active'));
        this.classList.add('filter-active');
        
        // Применяем фильтр
        const filterValue = this.getAttribute('data-filter');
        iso.arrange({ filter: filterValue });
      });
    });

  } catch (error) {
    console.error('Ошибка при загрузке или обработке JSON:', error);
  }
}

// Вызов функции для загрузки и вывода проектов
loadProjects();


