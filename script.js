const images = document.querySelectorAll(".projects-container img");
let dots = document.querySelectorAll(".dot");
const navbar = document.querySelectorAll(".navbar");
const items = document.querySelectorAll(".menu-items li");
const checkbox = document.getElementById("checkbox");

let currentIndex = 0;
const interval = 3000;

function changeSlide(number) {
  const project = mainProjects[number];
  document.getElementById("project-title").innerText = project.nome;
  document.getElementById("project-objective").innerText = project.objetivo;

  const stacksList = document.getElementById("project-stacks");
  stacksList.innerHTML = Object.entries(project.stacks)
    .map(([key, value]) => `<li>${key}: ${value}</li>`)
    .join("");

  const routesDiv = document.getElementById("project-routes");
  routesDiv.innerHTML = Object.entries(project.rotas)
    .map(([key, route]) => `<div>${key}: ${route.metodo} - ${route.url}</div>`)
    .join("");

  const projectLink = document.getElementById("project-link");
  projectLink.href = project.link;
  projectLink.style.color = "white";
}

items.forEach((item) => {
  item.addEventListener("click", function () {
    checkbox.click();
  });
});

function copyToClibpoard() {
  const text = "erikatrue@gmail.com";
  navigator.clipboard.writeText(text);
  alert("O email foi copiado!");
}

const mainProjects = [
  {
    nome: "TrybeSmith",
    objetivo:
      "Construir uma loja de itens medievais no formato de uma API REST com CRUD.",
    stacks: {
      Backend: "Express, Node.js",
      Plataforma: "Docker",
      Linguagem: "Typescript",
      Banco: "MySQL",
    },
    rotas: {
      Login: {
        metodo: "POST",
        url: "/login",
      },
      Users: {
        metodo: "GET",
        url: "/users",
      },
      Products: {
        metodo: "GET",
        url: "/products",
      },
      Orders: {
        metodo: "GET",
        url: "/orders",
      },
    },
    link: "https://github.com/erikarg/Project-Trybesmith",
  },
  {
    nome: "Blogs API",
    objetivo:
      "Construir uma API Rest e um banco de dados para a produção de conteúdo para um blog.",
    stacks: {
      Backend: "Express, Node.js, Sequelize",
      Plataforma: "Docker",
      Linguagem: "JavaScript",
      Banco: "MySQL",
    },
    rotas: {
      Login: {
        metodo: "POST",
        url: "/login",
      },
      Users: {
        metodo: "GET",
        url: "/users",
      },
      BlogPost: {
        metodo: "GET",
        url: "/post",
      },
      Categories: {
        metodo: "GET",
        url: "/categories",
      },
    },
    link: "https://github.com/erikarg/Project-Blogs-API",
  },
  {
    nome: "Talker Manager",
    objetivo:
      "Construir uma aplicação de cadastro de palestrantes em que é possível cadastrar, visualizar, pesquisar, editar e excluir informações.",
    stacks: {
      Backend: "Express, Node.js",
      Plataforma: "Docker",
      Linguagem: "JavaScript",
    },
    rotas: {
      Login: {
        metodo: "POST",
        url: "/login",
      },
      Listar: {
        metodo: "GET",
        url: "/talker",
      },
      Pesquisar: {
        metodo: "GET",
        url: "/talker/search",
      },
      Visualizar: {
        metodo: "GET",
        url: "/talker/:id",
      },
      Cadastrar: {
        metodo: "POST",
        url: "/talker",
      },
      Editar: {
        metodo: "PUT",
        url: "/talker/:id",
      },
      Excluir: {
        metodo: "DELETE",
        url: "/talker/:id",
      },
    },
    link: "https://github.com/erikarg/Project-Talker-Manager",
  },
  {
    nome: "Car Shop",
    objetivo:
      "Desenvolver uma API feita em TypeScript e MongoDB (utilizando Mongoose) para gerenciar o banco de dados de uma concessionária de veículos.",
    stacks: {
      Backend: "Mongoose",
      Plataforma: "Docker",
      Linguagem: "TypeScript",
      Banco: "MongoDB",
    },
    rotas: {
      Cadastrar: {
        metodo: "POST",
        url: "/cars - /motorcycles",
      },
      Listar: {
        metodo: "GET",
        url: "/cars - /motorcycles",
      },
      Visualizar: {
        metodo: "GET",
        url: "/cars/:id - /motorcycles/:id",
      },
      Atualizar: {
        metodo: "PUT",

        url: "/cars/:id - /motorcycles/:id",
      },
      Excluir: {
        metodo: "DELETE",
        url: "/cars/:id - /motorcycles/:id",
      },
    },
    link: "https://github.com/erikarg/Project-Car-Shop",
  },
  {
    nome: "Job Insights",
    objetivo:
      "Implementar análises a partir de um conjunto de dados sobre empregos (extraídos do Glassdoor e obtidos através do Kaggle). Essas análises são incorporadas a um aplicativo web desenvolvido com Flask. A aplicação também conta com testes realizados com Pytest.",
    stacks: {
      Linguagem: "Python",
      Framework: "Flask",
      Testes: "Pytest",
    },
    rotas: {},
    link: "https://github.com/erikarg/Project-Job-Insights",
  },
];
