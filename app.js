async function loadProfile() {
    try {
      const res = await fetch("data/profile.json");
      const data = await res.json();
      applyTheme(data.settings);
      renderHero(data.profile);
      renderPersonal(data.personalDetails);
      renderSocials(data.socials);
      renderLanguages(data.languages);
      renderHobbies(data.hobbies);
      renderExperience(data.experience);
      renderEducation(data.education);
      renderProjects(data.projects);
      renderSkills(data.skills);
      renderCourses(data.courses);
      renderFooter(data.profile.name);
    } catch (err) {
      console.error("Error loading profile:", err);
    }
  }

 

// ===== MENU TOGGLE =====
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// ===== DARK MODE TOGGLE =====
const themeToggle = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  themeToggle.textContent = "Light mode☀️";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeToggle.textContent = "Light mode☀️";
    localStorage.setItem("theme", "dark");
  } else {
    themeToggle.textContent = "Dark mode🌙";
    localStorage.setItem("theme", "light");
  }
});

// === ACTIVE NAV LINK ON SCROLL ===
const sections = document.querySelectorAll("section[id]");
const navLink = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 60;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});
  

  /* ========== Render Functions ========== */
  function renderHero(profile) {
    document.getElementById("hero").innerHTML = `
      <img src="${profile.photo.src}" alt="${profile.photo.alt}">
      <h1>${profile.name}</h1>
      <h2>${profile.role}</h2>
      <p>${profile.summary}</p>
    `;
  }
  
  function renderPersonal(details) {
    document.getElementById("personal").innerHTML = `
      <h3>Personal Details</h3>
      <ul>
        <li>Email: <a href="mailto:${details.email}">${details.email}</a></li>
        <li>Phone: ${details.phone}</li>
        <li>Address: ${details.address}</li>
      </ul>
    `;
  }
  
  function renderSocials(socials) {
    const container = socials.map(s => `
      <li>
        <a href="${s.url}" target="_blank">
          <img src="${s.icon}" alt="${s.platform} icon" width="18">
          ${s.platform}
        </a>
      </li>`).join("");
    document.getElementById("socials").innerHTML = `
      <h3>Socials</h3>
      <ul>${container}</ul>
    `;
  }
  
  function renderLanguages(languages) {
    const list = languages.map(l => `<li>${l.name} — ${l.proficiency}</li>`).join("");
    document.getElementById("languages").innerHTML = `
      <h3>Languages</h3>
      <ul>${list}</ul>
    `;
  }
  
  function renderHobbies(hobbies) {
    const list = hobbies.map(h => `<li>${h}</li>`).join("");
    document.getElementById("hobbies").innerHTML = `
      <h3>Hobbies</h3>
      <ul>${list}</ul>
    `;
  }
  
  function renderExperience(experiences) {
    const jobs = experiences.map(job => `
      <div class="job">
        <h3>${job.role}</h3>
        <h4>${job.company} — ${job.location}</h4>
        <p><small>${job.startDate} → ${job.endDate}</small></p>
        <p>${job.summary}</p>
        <ul>${job.highlights.map(h => `<li>${h}</li>`).join("")}</ul>
      </div>
    `).join("");
    document.getElementById("experience").innerHTML = `
      <h3>Experience</h3>
      ${jobs}
    `;
  }
  
  function renderEducation(education) {
    const list = education.map(e => `
      <div class="edu">
        <h4>${e.institution}</h4>
        <p>${e.degree}</p>
        <p><small>${e.startDate} → ${e.endDate}</small></p>
      </div>
    `).join("");
    document.getElementById("education").innerHTML = `
      <h3>Education</h3>
      ${list}
    `;
  }
  
  function renderProjects(projects) {
    const list = projects.map(p => `
      <div class="project">
        <img src="${p.coverImage.src}" alt="${p.coverImage.alt}">
        <h4>${p.title}</h4>
        <p>${p.summary}</p>
        <div class="tags">${p.tags.map(tag => `<span>${tag}</span>`).join("")}</div>
        <p>${p.links.map(l => `<a href="${l.url}" target="_blank">${l.label}</a>`).join(" | ")}</p>
      </div>
    `).join("");
    document.getElementById("projects").innerHTML = `
      <h3>Projects</h3>
      ${list}
    `;
  }

  // ===== PRINT CV =====
const printBtn = document.getElementById("print-btn");

printBtn.addEventListener("click", () => {
  // Temporarily disable dark mode for printing
  document.body.classList.remove("dark");

  // Add a print mode class for styling
  document.body.classList.add("print-mode");

  window.print();

  // Remove print mode class after printing
  document.body.classList.remove("print-mode");
});

  
  function renderSkills(skills) {
    const list = skills.map(skill => `<li>${skill}</li>`).join("");
    document.getElementById("skills").innerHTML = `
      <h3>Skills</h3>
      <ul>${list}</ul>
    `;
  }
  
  function renderCourses(courses) {
    const list = courses.map(c => `
      <div class="course">
        <h4>${c.title}</h4>
        <p>${c.provider}</p>
        <p><small>${c.startDate} → ${c.endDate}</small></p>
        <p><a href="${c.certificateUrl}" target="_blank">Certificate</a></p>
      </div>
    `).join("");
    document.getElementById("courses").innerHTML = `
      <h3>Courses</h3>
      ${list}
    `;
  }
  
  function renderFooter(name) {
    document.getElementById("site-footer").innerHTML = `
      <p>© ${new Date().getFullYear()} ${name}. All rights reserved.</p>
    `;
  }
  
  /* ========== Settings and Theme ========== */
  function applyTheme(settings) {
    if (settings.enableDarkMode) document.body.classList.add("dark");
    document.documentElement.style.setProperty("--primary", settings.primaryColor);
    document.documentElement.style.setProperty("--accent", settings.accentColor);
  }
  
  loadProfile();
  