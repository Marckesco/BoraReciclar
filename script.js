let quizRespondido = false;

// Lista de perguntas e respostas
const perguntas = [
  {
    pergunta: "Qual desses itens NÃO deve ser reciclado?",
    opcoes: ["Papel higiênico usado", "Garrafa PET", "Lata de refrigerante"],
    correta: "Papel higiênico usado",
  },
  {
    pergunta: "O que significa o símbolo de três setas em círculo?",
    opcoes: [
      "Símbolo do infinito",
      "Símbolo da reciclagem",
      "Símbolo químico do carbono",
    ],
    correta: "Símbolo da reciclagem",
  },
  {
    pergunta: "Qual destes materiais é 100% reciclável?",
    opcoes: ["Vidro", "Papel toalha", "Isopor sujo"],
    correta: "Vidro",
  },
  {
    pergunta: "O que fazer com pilhas e baterias usadas?",
    opcoes: [
      "Jogar no lixo comum",
      "Guardar em casa",
      "Levar a pontos de coleta especiais",
    ],
    correta: "Levar a pontos de coleta especiais",
  },
  {
    pergunta: "Qual é o benefício da reciclagem de alumínio?",
    opcoes: [
      "Economiza energia",
      "Evita o corte de árvores",
      "Aumenta a poluição",
    ],
    correta: "Economiza energia",
  },
  {
    pergunta: "Qual desses itens NÃO deve ir para o lixo reciclável?",
    opcoes: ["Caixa de papelão limpa", "Jornal seco", "Embalagem engordurada"],
    correta: "Embalagem engordurada",
  },
  {
    pergunta: "Reciclar ajuda a:",
    opcoes: [
      "Aumentar o lixo nos aterros",
      "Reduzir o desperdício e poluição",
      "Aumentar o consumo de recursos naturais",
    ],
    correta: "Reduzir o desperdício e poluição",
  },
];

function abrirModal() {
  // Escolhe uma pergunta aleatória
  const perguntaAleatoria =
    perguntas[Math.floor(Math.random() * perguntas.length)];

  const modal = document.getElementById("modalQuiz");
  const titulo = modal.querySelector("h2");
  const textoPergunta = modal.querySelector("p");
  const botoesContainer = modal.querySelector(".botoesQuiz");

  titulo.innerText = "Quiz Rápido";
  textoPergunta.innerText = perguntaAleatoria.pergunta;

  // Limpa os botões antigos
  botoesContainer.innerHTML = "";

  // Cria os novos botões
  perguntaAleatoria.opcoes.forEach((opcao) => {
    const btn = document.createElement("button");
    btn.innerText = opcao;
    btn.onclick = () => responderQuiz(opcao, perguntaAleatoria.correta);
    botoesContainer.appendChild(btn);
  });

  document.getElementById("respostaQuiz").innerText = "";
  modal.style.display = "block";
  quizRespondido = false;
}

function fecharModal() {
  document.getElementById("modalQuiz").style.display = "none";
}

function responderQuiz(respostaSelecionada, correta) {
  if (quizRespondido) return;
  quizRespondido = true;

  const botoes = document.querySelectorAll(".botoesQuiz button");

  botoes.forEach((btn) => {
    if (btn.innerText.trim() === correta) {
      btn.style.backgroundColor = "green";
    } else if (btn.innerText.trim() === respostaSelecionada) {
      btn.style.backgroundColor = "red";
    } else {
      btn.style.backgroundColor = "gray";
    }

    btn.disabled = true;
    btn.style.opacity = "0.7";
  });

  const elemento = document.getElementById("respostaQuiz");
  if (respostaSelecionada === correta) {
    elemento.innerText = "✅ Correto!";
    elemento.style.color = "green";
  } else {
    elemento.innerText = "❌ Resposta incorreta.";
    elemento.style.color = "red";
  }
}

// Fecha o modal ao clicar fora dele
window.onclick = function (event) {
  const modal = document.getElementById("modalQuiz");
  if (event.target == modal) {
    fecharModal();
  }
};

// Menu responsivo
const toggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("mainNav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
    toggle.classList.toggle("rotated");
  });

  const linksMenu = nav.querySelectorAll("a");
  linksMenu.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      toggle.classList.remove("rotated");
    });
  });
}
// Fim do menu responsivo
