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

  document.getElementById("project-link").href = project.link;
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
      backend: "Express, Node.js",
      plataforma: "Docker",
      arquitetura: "MSC",
      linguagem: "Typescript",
      banco: "MySQL",
    },
    rotas: {
      login: {
        metodo: "POST",
        url: "http://localhost:3000/login",
      },
      users: {
        metodo: "GET",
        url: "http://localhost:3000/users",
      },
      products: {
        metodo: "GET",
        url: "http://localhost:3000/products",
      },
      orders: {
        metodo: "GET",
        url: "http://localhost:3000/orders",
      },
      link: "https://github.com/erikarg/Project-Trybesmith",
    },
  },
  {
    nome: "Blogs API",
    objetivo:
      "Construir uma API Rest e um banco de dados para a produção de conteúdo para um blog.",
    stacks: {
      backend: "Express, Node.js, Sequelize",
      plataforma: "Docker",
      linguagem: "JavaScript",
      banco: "MySQL",
    },
    rotas: {
      login: {
        metodo: "POST",
        url: "http://localhost:3000/login",
      },
      users: {
        metodo: "GET",
        url: "http://localhost:3000/users",
      },
      blogPost: {
        metodo: "GET",
        url: "http://localhost:3000/post",
      },
      categories: {
        metodo: "GET",
        url: "http://localhost:3000/categories",
      },
      link: "https://github.com/erikarg/Project-Blogs-API",
    },
  },
  {
    nome: "Talker Manager",
    objetivo:
      "Construir uma aplicação de cadastro de palestrantes em que é possível cadastrar, visualizar, pesquisar, editar e excluir informações.",
    stacks: {
      backend: "Express, Node.js",
      plataforma: "Docker",
      linguagem: "JavaScript",
    },
    rotas: {
      login: {
        metodo: "POST",
        url: "http://localhost:3000/login",
      },
      talker: {
        listar: {
          metodo: "GET",
          url: "http://localhost:3000/talker",
        },
        pesquisar: {
          metodo: "GET",
          url: "http://localhost:3000/talker/search",
        },
        visualizar: {
          metodo: "GET",
          url: "http://localhost:3000/talker/:id",
        },
        cadastrar: {
          metodo: "POST",
          url: "http://localhost:3000/talker",
        },
        editar: {
          metodo: "PUT",
          url: "http://localhost:3000/talker/:id",
        },
        excluir: {
          metodo: "DELETE",
          url: "http://localhost:3000/talker/:id",
        },
      },
      link: "https://github.com/erikarg/Project-Talker-Manager",
    },
  },
  {
    nome: "Car Shop",
    objetivo:
      "Desenvolver uma API feita em TypeScript e MongoDB (utilizando Mongoose) para gerenciar o banco de dados de uma concessionária de veículos.",
    stacks: {
      backend: "MongoDB, Mongoose",
      plataforma: "Docker",
      linguagem: "TypeScript",
    },
    rotas: {
      carros: {
        cadastrar: {
          requisicao: "POST",
          funcao: "Cadastra um carro",
          url: "http://localhost:3001/cars",
        },
        listar: {
          requisicao: "GET",
          funcao: "Retorna a lista de carros",
          url: "http://localhost:3001/cars",
        },
        visualizar: {
          requisicao: "GET",
          funcao: "Retorna o carro através do ID",
          url: "http://localhost:3001/cars/:id",
        },
        atualizar: {
          requisicao: "PUT",
          funcao: "Atualiza o carro através do ID",
          url: "http://localhost:3001/cars/:id",
        },
        excluir: {
          requisicao: "DELETE",
          funcao: "Exclui o carro através do ID",
          url: "http://localhost:3001/cars/:id",
        },
      },
      motocicletas: {
        cadastrar: {
          requisicao: "POST",
          funcao: "Cadastra uma moto",
          url: "http://localhost:3001/motorcycles",
        },
        listar: {
          requisicao: "GET",
          funcao: "Retorna a lista de motos",
          url: "http://localhost:3001/motorcycles",
        },
        visualizar: {
          requisicao: "GET",
          funcao: "Retorna a moto através do ID",
          url: "http://localhost:3001/motorcycles/:id",
        },
        atualizar: {
          requisicao: "PUT",
          funcao: "Atualiza a moto através do ID",
          url: "http://localhost:3001/motorcycles/:id",
        },
        excluir: {
          requisicao: "DELETE",
          funcao: "Exclui a moto através do ID",
          url: "http://localhost:3001/motorcycles/:id",
        },
      },
      link: "https://github.com/erikarg/Project-Car-Shop",
    },
  },
  {
    nome: "Job Insights",
    objetivo:
      "Implementar análises a partir de um conjunto de dados sobre empregos (extraídos do Glassdoor e obtidos através do Kaggle). Essas análises são incorporadas a um aplicativo web desenvolvido com Flask. A aplicação também conta com testes realizados com Pytest.",
    stacks: {
      linguagem: "Python",
      framework: "Flask",
      testes: "Pytest",
    },
    rotas: {},
    link: "https://github.com/erikarg/Project-Job-Insights",
  },
];
