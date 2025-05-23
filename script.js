// for the hamburger icon
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// for the blinking text
document.addEventListener('DOMContentLoaded', function() {
  const jobTitles = ["Software Developer and Tester", "Security Learner", "Data Analyst"];
  const textElement = document.querySelector('.section__text__p2');
  let currentIndex = 0;

  setInterval(function() {
    currentIndex = (currentIndex + 1) % jobTitles.length;
    textElement.classList.add('blink');
    setTimeout(function(){
      textElement.textContent = jobTitles[currentIndex];
      textElement.classList.add('smooth-transition');
      textElement.classList.remove('blink');
    }, 800);

    setTimeout(function(){
      textElement.classList.remove('smooth-transition');
    }, 1200);
  }, 3000);
});


document.addEventListener('DOMContentLoaded', function() {
  const themeToggles = [
    document.getElementById('theme-toggle'),
    document.getElementById('theme-toggle-1')
  ];

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeToggles.forEach(toggle => toggle.checked = theme === 'light');
  }

  function handleToggleChange() {
    const theme = this.checked ? 'light' : 'dark';
    applyTheme(theme);
  }

  themeToggles.forEach(toggle => toggle.addEventListener('change', handleToggleChange));

  // Set the initial theme based on user preference
  const currentTheme = localStorage.getItem('theme') || 'dark';
  applyTheme(currentTheme);
});



document.addEventListener('DOMContentLoaded', function() {
  const projectsContainer = document.getElementById('projects-grid');

  // Function to add a new project
  function addProject(imageUrl, title, link, isDetailsPage = false) {
    const projectDiv = document.createElement('div');
    projectDiv.className = 'project';

    // Conditionally change button label and behavior
    const buttonLabel = isDetailsPage ? 'View Details' : 'GitHub';
    const buttonOnClick = `location.href='${link}'`;

    projectDiv.innerHTML = `
      <img src="${imageUrl}" alt="${title}" class="project-img" />
      <h2 class="project-title">${title}</h2>
      <button class="new_btn" onclick="${buttonOnClick}">${buttonLabel}</button>
    `;

    projectsContainer.appendChild(projectDiv);
  }

  // Example projects to add
  addProject('./assets/AgentLLM.png', 'Multi LLM Agent base Repo level Ci Build fixer', 'AgentLLM.html', true);
  addProject('./assets/LLMMCQ.png', 'LLM-Base MCQ Answer Finder', 'https://github.com/i-sumitkumar/Automation.git');
  addProject('./assets/ibank.png', 'IBank-More Secure More Available ', 'https://github.com/i-sumitkumar/Bank.git');
  addProject('./assets/warzone.png', 'Warzone- Risk Game', 'https://github.com/i-sumitkumar/War_risk.git');
  addProject('./assets/Brestcancer.png','Heart Diseases Analysis ', 'https://github.com/i-sumitkumar/Breast_cancer_Analysis.gits');
  addProject('./assets/Sleep.jpg', 'Human Stress Detection in and through Sleep by monitoring physiological data Analysis', 'https://github.com/i-sumitkumar/Human-Stress-Detection.git');
  addProject('./assets/refactormap.png', 'OSM Dashboard-OpenStreetMap', 'https://github.com/i-sumitkumar/OSMDashboardConcordia.git');
});



// Ensure smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });

      // Update the URL without reloading the page
      history.pushState(null, null, `#${targetId}`);
    }
  });
});

// Ensure smooth scrolling for down arrow and footer links
document.querySelectorAll('.fa-angles-down, footer a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });

      // Update the URL without reloading the page
      history.pushState(null, null, `#${targetId}`);
    }
  });
});



document.addEventListener('DOMContentLoaded', function() {
  const experienceContainer = document.getElementById('experience-container');

  // Function to render each experience item
  function addExperience({ company, location, duration, title, image }) {
      // Check if the experience already exists to prevent duplication
      if (document.querySelector(`[data-company="${company}"]`)) return;

      const experienceDiv = document.createElement('div');
      experienceDiv.className = 'experience-item';
      experienceDiv.setAttribute('data-company', company); // Add unique identifier to avoid duplicates

      experienceDiv.innerHTML = `
          <div class="exp-details-container">
              <div class="experience-img">
                  <img src="${image}" alt="Experience Image" class="company-img" />
              </div>
              <h3 class="exp-sub-title">${company}</h3>
              <h4 class="experience-location">${location}</h4>
              <p class="experience-title">${title}</p>
              <p class="experience-duration">${duration}</p>
          </div>
      `;

      experienceContainer.appendChild(experienceDiv);
  }

  // Add experiences dynamically

  addExperience({
    company: 'Rabro',
    location: 'Jalandhar,PB, India',
    title: 'System Engineer',
    duration: '(Sep 2022 - Dec 2022)',
    image: './assets/Rabro.jpeg',
  });

  addExperience({
    company: 'Dollarama',
    location: 'Montreal, CA',
    title: 'Team Leader',
    duration: '(July 2023 - June 2024)',
    image: './assets/Dollarama.png',
  });

  addExperience({
    company: 'Rogers-IO Solutions',
    location: 'Montreal, CA',
    title: 'Manager',
    duration: '(July 2024 - Present)',
    image: './assets/Rogers.jpg'}

  );

});



document.addEventListener('DOMContentLoaded', function () {
  const certificationContainer = document.getElementById('certification-container');

  // Function to render each certification item with image, title, and credential ID
  function addCertification({ title, image, credentialId }) {
    if (document.querySelector(`[data-title="${title}"]`)) return;

    const certificationDiv = document.createElement('div');
    certificationDiv.className = 'certification-item';
    certificationDiv.setAttribute('data-title', title);

    certificationDiv.innerHTML = `
      <div class="exp-details-container">
        <div class="certification-img">
          <img src="${image}" alt="Certification Image" class="company-img cert-click" data-full="${image}" />
        </div>
        <p class="certification-title">${title}</p>
        ${credentialId ? `<p class="credential-id">Credential ID: ${credentialId}</p>` : ''}
      </div>
    `;

    certificationContainer.appendChild(certificationDiv);
  }

  // Add certifications with credential IDs
  addCertification({
    title: 'Azure Certified Cloud Practitioner',
    image: './assets/az900.png',
    credentialId: ''
  });

  addCertification({
    title: 'Certified Scrum Master',
    image: './assets/Scrummaster.jpg',
    credentialId: ''
  });
});


document.addEventListener('DOMContentLoaded', function () {
  // Open modal on image click
  document.addEventListener('click', function (e) {
    if (e.target.classList.contains('cert-click')) {
      const modal = document.getElementById('img-modal');
      const modalImg = document.getElementById('modal-img');
      modal.style.display = "block";
      modalImg.src = e.target.getAttribute('data-full');
    }
  });

  // Close modal when clicking the X
  const closeBtn = document.querySelector('.modal-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', function () {
      document.getElementById('img-modal').style.display = "none";
    });
  }

  // Close modal when clicking outside the image
  window.addEventListener('click', function (event) {
    const modal = document.getElementById('img-modal');
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
