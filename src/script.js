const dots = document.querySelectorAll(".dot");
const items = document.querySelectorAll(".menu-items li");
const checkbox = document.getElementById("checkbox");
const enButton = document.getElementById("usaFlag");
const esButton = document.getElementById("spainFlag");
const frButton = document.getElementById("franceFlag");
const ptBrButton = document.getElementById("brasilFlag");
const emailButton = document.getElementById("email-icon");

const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
};

function changeSlide(number) {
  dots.forEach((dot, index) => {
    dot.classList.remove("active");
    if (index === number) {
      dot.classList.add("active");
    }
  });
  const project = mainProjects[number];
  document.getElementById("project-title").innerText = project.nome;
  document.getElementById("project-objective").innerText = project.objetivo;

  const stacksList = document.getElementById("project-stacks");
  stacksList.innerHTML = Object.entries(project.stacks)
    .map(([key, value]) => `<li><strong>${key}</strong>: ${value}</li>`)
    .join("");

  const projectLink = document.getElementById("project-link");
  projectLink.href = project.link;
  projectLink.style.color = "white";
}

document.addEventListener("DOMContentLoaded", function () {
  changeSlide(0);
  const languageIcon = document.getElementById("language-icon");
  languageIcon.addEventListener("click", toggleLanguageSlide);
  emailButton.addEventListener("click", () => copyToClibpoard());
  enButton.addEventListener("click", () => changeLanguage("en"));
  esButton.addEventListener("click", () => changeLanguage("es"));
  frButton.addEventListener("click", () => changeLanguage("fr"));
  ptBrButton.addEventListener("click", () => changeLanguage("ptbr"));
});

items.forEach((item) => {
  item.addEventListener("click", function () {
    checkbox.click();
  });
});

function toggleLanguageSlide() {
  const languageSlide = document.querySelector(".language-slide");
  languageSlide.style.display =
    languageSlide.style.display === "none" ? "flex" : "none";
}

function copyToClibpoard() {
  const text = "erikatrue@gmail.com";
  navigator.clipboard.writeText(text);
  alert("O email foi copiado!");
}

const mainProjects = [
  {
    nome: "TrybeSmith",
    objetivo: "Loja de itens medievais no formato de uma API REST.",
    stacks: {
      Backend: "Express, Node.js",
      Plataforma: "Docker",
      Linguagem: "Typescript",
      Banco: "MySQL",
    },
    link: "https://github.com/erikarg/Project-Trybesmith",
  },
  {
    nome: "Blogs API",
    objetivo:
      "Produção de conteúdo para um blog no formato de uma API Rest integrado ao banco de dados.",
    stacks: {
      Backend: "Express, Node.js",
      Plataforma: "Docker",
      Linguagem: "JavaScript",
      Banco: "MySQL",
    },
    link: "https://github.com/erikarg/Project-Blogs-API",
  },
  {
    nome: "Talker Manager",
    objetivo: "Aplicação de cadastro e gerenciamento de palestrantes.",
    stacks: {
      Backend: "Express, Node.js",
      Plataforma: "Docker",
      Linguagem: "JavaScript",
    },
    link: "https://github.com/erikarg/Project-Talker-Manager",
  },
  {
    nome: "Car Shop",
    objetivo:
      "API feita em TypeScript e Mongoose para gerenciar o banco de dados de uma concessionária de veículos.",
    stacks: {
      Backend: "Mongoose",
      Plataforma: "Docker",
      Linguagem: "TypeScript",
      Banco: "MongoDB",
    },
    link: "https://github.com/erikarg/Project-Car-Shop",
  },
  {
    nome: "Job Insights",
    objetivo:
      "Aplicação de análises a partir de um conjunto de dados sobre empregos (extraídos do Glassdoor e obtidos através do Kaggle).",
    stacks: {
      Linguagem: "Python",
      Framework: "Flask",
      Testes: "Pytest",
    },
    link: "https://github.com/erikarg/Project-Job-Insights",
  },
];
