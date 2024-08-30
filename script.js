const perguntas = [
    {
        enunciado: "Considera que a inteligência artificial pode mudar carreira e profissões?",
        alternativas: [
            { texto: "Claro, pra melhor.", pontuacao: 5 },
            { texto: "Não, deveria ser como antigamente.", pontuacao: 7 }
        ]
    },
    {
        enunciado: "As próximas gerações estudarão presencialmente ou remotamente?",
        alternativas: [
            { texto: "Presencialmente, nunca vai mudar.", pontuacao: 3 },
            { texto: "Tudo online.", pontuacao: 4 }
        ]
    },
    {
        enunciado: "O que você acha sobre o curso alura?",
        alternativas: [
            { texto: "Interessante.", pontuacao: 1 },
            { texto: "Nada a ver comigo.", pontuacao: 7 }
        ]
    },
    {
        enunciado: "Você é pontual, ou entrega trabalho atrasado?",
        alternativas: [
            { texto: "Atrasado sempre.", pontuacao: 8 },
            { texto: "Tento dar o melhor.", pontuacao: 9 }
        ]
    },
    {
        enunciado: "Qual a sua opinião sobre o curso programação?",
        alternativas: [
            { texto: "Os alunos não aprendem nada.", pontuacao: 3 },
            { texto: "Bem útil.", pontuacao: 2 },
        ]

    }
];

let atual = 0;
let pontuacao = 0; // Variável para armazenar a pontuação
let perguntaAtual;
const caixaPerguntas = document.getElementById('caixaPerguntas');
const alternativasContainer = document.getElementById('alternativas');

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    alternativasContainer.innerHTML = '';
    perguntaAtual.alternativas.forEach((alternativa) => {
        const button = document.createElement('button');
        button.textContent = alternativa.texto;
        button.addEventListener('click', () => {
            pontuacao += alternativa.pontuacao; // Incrementa a pontuação com base na alternativa selecionada
            atual++;
            if (atual < perguntas.length) {
                mostraPergunta();
            } else {
                exibePontuacaoFinal(); // Chama função para exibir a pontuação final
            }
        });
        alternativasContainer.appendChild(button);
    });
}

function exibePontuacaoFinal() {
    caixaPerguntas.textContent = `Você completou o questionário! Sua pontuação final é: ${pontuacao}`;
    alternativasContainer.innerHTML = ''; // Limpa as alternativas
}

mostraPergunta(); // Inicia o questionário mostrando a primeira pergunta

