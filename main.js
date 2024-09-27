const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Caso você estivesse em uma situação crítica e precisasse escolher entre salvar o mundo ou a si mesmo o que você faria?",
        alternativas: [
            {
                texto: "Me salvaria e deixava o mundo por conta própria",   
                afirmacao: " Às vezes, o instinto de sobrevivência é mais forte do que o sacrifício altruísta. A escolha de preservar sua vida pode refletir uma crença de que o mundo deve encontrar seu próprio caminho. ",
            },
            {
                texto: "Daria minha vida para salvar a população inocente ",
                afirmacao: " O ato de sacrifício define a essência do heroísmo. Você escolheu colocar o bem maior acima do seu próprio, mostrando coragem e compaixão inigualáveis.",
            }
        ]
    },
    {
        enunciado: " Se você fosse protagonista de um filme, que gênero o filme seria?",
        alternativas: [
            {
                texto: " Suspense com reviravoltas e acontecimentos macabros",
                afirmacao: " Seu filme seria um jogo psicológico de intrigas e mistérios, onde as sombras do desconhecido dominam a narrativa, e cada decisão tem um peso sombrio. ",
            },
            {
                texto: " Um filme que traz esperança com atos heróicos e harmonia",
                afirmacao: " Você seria o símbolo de esperança, inspirando através de seus atos corajosos  e criando um legado de bondade e justiça em um mundo que anseia por redenção. Sua história seria uma jornada de superação, onde o bem triunfa sobre as adversidades, deixando uma marca positivas no coração e todos que a assistem. ",
            }
        ]
    },
    {
        enunciado: " Se você estivesse em uma cena reflexiva em seu filme, pensado em todos os atos feitos até então, como seria a ambientação?",
        alternativas: [
            {
                texto: " Andando em um campo durante um dia de sol",
                afirmacao: " A vastidão do campo sob a luz do sol representa sua busca por paz e clareza. Cada passo é um lembrete de que, mesmo nas dificuldades, há sempre um caminho para a serenidade e a compreensão. ",
            },
            {
                texto: " Passando pelas ruas de uma metrópole violenta durante uma noite chuvosa",
                afirmacao: " As ruas escuras e a chuva pesada refletem a complexidade de sua jornada interna. A cidade, com todos os seus perigos e mistérios, simboliza os desafios e os conflitos que você enfrenta dentro de si mesmo. ",
            }
        ]
    },
    {
        enunciado: " Você está caminhando por uma via escura e pouco movimentada, onde encontra por um homem mal vestido e passando por necessidades, ele chega até você e pede por sua ajuda, o que você faria?",
        alternativas: [
            {
                texto: " Ajudaria, mesmo arriscando sua segurança, porém aumentando sua integridade ",
                afirmacao: " Seu ato de bondade em meio à escuridão é um sinal de uma alma nobre e empática. Embora o risco seja real, sua escolha revela um compromisso inabalável com a humanidade. ",
            },
            {
                texto: " Ignoraria e continuaria com seu trajeto, porém com muita atenção se não está sendo seguido ",
                afirmacao: " A autopreservação pode ser uma reação natural em situações de incerteza. Sua decisão de seguir em frente mostra que, mesmo em um mundo difícil, a vigilância é necessária para garantir a própria segurança. ",
            }
        ]
    },
    {
        enunciado: " Essa situação pode mudar sua vida. Em um trilho de trem há dois caminhos, onde encontram-se 5 pessoas aleatórias presas na mesma direção ao trem, e ao outro trilho, está seu melhor amigo(a), que jurou lealdade a você. Sua decisão equivale a uma alavanca. O que você faria?",
        alternativas: [
            {
                texto: " Nada, salvaria a pessoa que afirmei ser leal ",
                afirmacao: "Lealdade é uma virtude que você valoriza acima de tudo. Mesmo diante de escolhas impossíveis, sua decisão de proteger quem te é próximo demonstra um compromisso profundo com seus laços pessoais.",
            },
            {
                texto: " Apertava a alavanca, tendo remorso de meu amigo, porém garantindo a vida de 5 pessoas ",
                afirmacao: " Sacrificar o que é mais querido por um bem maior é uma decisão dolorosa, mas revela um senso de responsabilidade e justiça. O peso dessa escolha será carregado, mas o impacto de salvar vidas é inegável. ",
            } 
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();   
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",() => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao; 
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Ás escolhas podem ter sido fifíceis até agora, mas você se mostrou alguém forte, que não muda sua personalidade por nada."
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

