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



// Skills
const skillsData = [
    { name: "HTML", value: 100 },
    { name: "CSS", value: 90 },
    { name: "JavaScript", value: 75 },
    { name: "С/С++", value: 85 },
    { name: "Structured programming", value: 90 },
    { name: "Types and datastructures", value: 80 },
    { name: "Algorithms", value: 45 },
    { name: "Linux", value: 40 },
    { name: "DevOps", value: 60 },
    { name: "OOP", value: 70 },
    { name: "Shell/Bash", value: 45 },    
];

function populateSkills(skills) {
    const skillsContainer = document.querySelector(".skills-content");
    
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
  }
  populateSkills(skillsData);


  const educationData = [
    {
      degree: "Secondary vocational education",
      years: "2014 - 2018",
      institution: "Bryansk Regional Music College, Bryansk, Russia  ",
      description: 
        "- Developed a disciplined approach to learning and problem-solving through musical training.<br> \
        - Acquired strong teamwork and communication skills via group performances and collaborative projects.<br>\
        - Gained experience in adapting to challenging situations, such as live performances and tight deadlines."
                
    },
    {
      degree: "Music Education",
      years: "2018 - 2023",
      institution: "GMPI named after M.M. Ippolitova-Ivanova, Russia, Moscow",
      description: 
        "- Developed strong discipline, creativity, and teamwork skills through performance and teaching.<br>\
        - Learned to manage time effectively and deliver results under pressure (e.g., during concerts and exams).<br>\
        - Gained experience in mentoring and guiding students, which translates into team collaboration and leadership."
    
      
    },
    {
        degree: "School21",
        years: "2023 - Present",
        institution: "Student (Software Engineering and Full-Stack Development), Russia, Moscow",
        description: 
            "- Intensive training in algorithms, data structures, and software engineering.<br>\
            - Practical projects in C, C++, Python, and web development (Django).<br>\
            - Mastered teamwork, problem-solving, and debugging skills through peer learning."
        
      }
  ];

  function populateEducationById(data, targetId) {
    const container = document.getElementById(targetId);
  
    if (!container) {
      console.error(`Element with id "${targetId}" not found.`);
      return;
    }
  
    data.forEach(item => {
      const resumeItem = document.createElement('div');
      resumeItem.className = 'resume-item';
  
      resumeItem.innerHTML = `
        <h4>${item.degree}</h4>
        <h5>${item.years}</h5>
        <p><em>${item.institution}</em></p>
        <p>${item.description}</p>
        <!-- Edn Resume Item -->
      `;
  
      container.insertAdjacentElement('afterend', resumeItem);
    });
  }
  
  populateEducationById(educationData, 'education-section');
  
    
  const professionalExperience = [
    {
      title: "Software Engineer",
      years: "2021 - Present",
      company: "Freelance",
      tasks: [
        "Develop and maintain BI tools and integrations for various projects.",
        "Collaborate with cross-functional teams to implement experimental solutions in Python.",
        "Design and implement algorithms for efficient data processing and feature extraction.",
        "Write unit tests and ensure at least 80% code coverage in the development process.",
        "Consult and mentor junior developers on best practices and code quality standards."
      ]
    },
    {
      title: "Backend Developer",
      years: "2019 - 2021",
      company: "Freelance",
      tasks: [
        "Developed and optimized web applications and backend systems using Django and Python.",
        "Implemented user registration systems, database management, and API integration.",
        "Collaborated with front-end developers to ensure seamless integration of server-side logic.",
        "Worked with MySQL and PostgreSQL databases for data storage and retrieval."
      ]
    }
  ];
  
  
  
  function fillExperience() {
    const experienceContainer = document.getElementById('experience');
    professionalExperience.forEach(experience => {
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
  }
  
  fillExperience();
   

  const statsData = {
    "stats": [
      // { "label": "Clients", "value": 0 },
      // { "label": "Projects", "value": 0 },
      // { "label": "Hours Of Support", "value": 0 },
      // { "label": "Awards", "value": 0 }
    ]
  };

  // Функция для наполнения секции stats
  function populateStats(data) {
    const statsContainer = document.querySelector("#stats .container .row");

    // Очищаем контейнер перед добавлением новых данных
    statsContainer.innerHTML = '';

    // Проходим по каждому элементу в массиве stats и создаем соответствующие HTML элементы
    data.stats.forEach(item => {
      const statItem = document.createElement("div");
      statItem.classList.add("col-lg-3", "col-md-6");

      statItem.innerHTML = `
        <div class="stats-item text-center w-100 h-100">
          <span data-purecounter-start="0" data-purecounter-end="${item.value}" data-purecounter-duration="0" class="purecounter">${item.value}</span>
          <p>${item.label}</p>
        </div>
      `;

      // Добавляем элемент в контейнер
      statsContainer.appendChild(statItem);
    });
  }
 if(stats) {
    populateStats(statsData);
 }




 const data = {
  "projects": [
    {
      "category": "DevOps",
      "title": "UNIX/Linux operating systems (Basic)",
      "description": "Linux system installation and updates. Administration basics.",
      "image": "https://github.com/Tixon-noxit/DevOps/raw/main/D01_Linux/misc/images/linux.png",
      "link": "https://github.com/Tixon-noxit/DevOps/tree/main/D01_Linux"
    },
    {
      "category": "DevOps",
      "title": "Linux Network",
      "description": "Linux networks configuration on virtual machines.",
      "image": "https://github.com/Tixon-noxit/DevOps/raw/main/DO2_LinuxNetwork/misc/images/linux_network.png",
      "link": "https://github.com/Tixon-noxit/DevOps/tree/main/DO2_LinuxNetwork"
    },
    {
      "category": "DevOps",
      "title": "Simple Docker",
      "description": "Introduction to docker. Developing a simple docker image for your own server.",
      "image": "https://github.com/Tixon-noxit/DevOps/raw/main/DO5_SimpleDocker/misc/images/simple_docker.png",
      "link": "https://github.com/Tixon-noxit/DevOps/tree/main/DO5_SimpleDocker"
    },
    {
      "category": "DevOps",
      "title": "Basic CI/CD",
      "description": "Development of a simple CI/CD for the SimpleBashUtils project. Building, testing, deployment.",
      "image": "https://github.com/Tixon-noxit/DevOps/raw/main/DO6_CICD/misc/images/basic_ci_cd.JPG",
      "link": "https://github.com/Tixon-noxit/DevOps/tree/main/DO6_CICD"
    },

    {
      "category": "C11",
      "title": "Simple Bash Utils",
      "description": "Development of Bash text utilities: cat, grep.",
      "image": "https://github.com/Tixon-noxit/C11/raw/main/C3_SimpleBashUtils/misc/eng/images/bashutils.png",
      "link": "https://github.com/Tixon-noxit/C11/tree/main/C3_SimpleBashUtils"
    },
    {
      "category": "C11",
      "title": "math",
      "description": "Implementation of your own version of the math.h library.",
      "image": "https://github.com/Tixon-noxit/C11/raw/main/C4_s21_math/misc/eng/s21_math.png",
      "link": "https://github.com/Tixon-noxit/C11/tree/main/C4_s21_math"
    },
    {
      "category": "C11",
      "title": "string+",
      "description": "Implementation of the string.h library with additions.",
      "image": "https://www.scaler.com/topics/images/string-h-in-c_thumbnail.webp",
      "link": "https://github.com/Tixon-noxit/C11/tree/main/C2_s21_stringplus"
    },
    {
      "category": "C11",
      "title": "decimal",
      "description": "Implementation of your own decimal.h library.",
      "image": "https://github.com/Tixon-noxit/C11/raw/main/C5_s21_decimal/misc/images/s21_decimal.png",
      "link": "https://github.com/Tixon-noxit/C11/tree/main/C5_s21_decimal"
    },
    {
      "category": "C11",
      "title": "matrix",
      "description": "Implementation of the matrix.h library.",
      "image": "https://github.com/Tixon-noxit/DevOps/raw/main/DO6_CICD/misc/images/basic_ci_cd.JPG",
      "link": "https://github.com/Tixon-noxit/DevOps/tree/main/DO6_CICD"
    },
    {
      "category": "C11",
      "title": "BrickGame Tetris",
      "description": "In this project, you need to implement the Tetris game in the C programming language using a structural approach.",
      "image": "https://github.com/Tixon-noxit/C11/raw/main/C7_BrickGame_v1.0/misc/images/tetris-pieces.png",
      "link": "https://github.com/Tixon-noxit/C11/tree/main/C7_BrickGame_v1.0"
    },

    {
      "category": "CPP",
      "title": "matrix+",
      "description": "Implementation of the matrix_oop.h library.",
      "image": "https://github.com/Tixon-noxit/CPP/raw/main/CPP1_s21_matrixplus/misc/images/s21_matrix.png",
      "link": "https://github.com/Tixon-noxit/CPP/tree/main/CPP1_s21_matrixplus"
    },
    {
      "category": "CPP",
      "title": "containers",
      "description": "Implementation of the containers.h. library.",
      "image": "https://github.com/Tixon-noxit/CPP/raw/main/CPP2_s21_containers/misc/images/s21_containers.png",
      "link": "https://github.com/Tixon-noxit/CPP/tree/main/CPP2_s21_containers"
    },
    {
      "category": "CPP",
      "title": "BrickGame Snake",
      "description": "In this project, you will implement the Snake game in the C++ programming language in the object-oriented programming paradigm.",
      "image": "https://www.google.com/logos/fnbx/snake_arcade/cta_alt.png",
      "link": "https://github.com/Tixon-noxit/CPP/tree/main/CPP3_BrickGame_v2.0"
    },
  ]
};

// Функция для наполнения блока Portfolio-Item из JSON
function loadPortfolioItems() {
  const portfolioContainer = document.getElementById("Portfolio-Item");

  data.projects.forEach(project => {
    const projectItem = document.createElement('div');
    projectItem.classList.add('col-lg-4', 'col-md-6', 'portfolio-item', 'isotope-item', `filter-${project.category.toLowerCase()}`);

    projectItem.innerHTML = `
      <img style="min-height: 15vh;" src="${project.image}" class="img-fluid" alt="${project.title}">
      <div class="portfolio-info">
        <h4>${project.title}</h4>
        <p>${project.description}</p>
        <a href="${project.link}" title="More Details" class="details-link">
          <i class="bi bi-link-45deg"></i>
        </a>
      </div>
    `;

    portfolioContainer.appendChild(projectItem);
  });
}

loadPortfolioItems();