let $question = document.querySelector('#question')
let $showPoints = document.querySelector('#points')
let $numberOfQuestion = document.querySelector('#nQuestao')
let $a = document.querySelector('#a')
let $b = document.querySelector('#b')
let $c = document.querySelector('#c')
let points = 0
let questIndex = 0

const Q1 = {
    numero: 1,
    pergunta: "quanto é 2 + 2?",
    respostaA: 1,
    respostaB: 2,
    respostaC: 4,
    correta: 4
}

const Q2 = {
    numero: 2,
    pergunta: "Da lista abaixo quem é o mais forte?",
    respostaA: "Goku",
    respostaB: "Yanchia",
    respostaC: "Vegeta",
    correta: "Yanchia"
}

const Q3 = {
    numero: 3,
    pergunta: "Saber tudo é...",
    respostaA: "Inevitavel",
    respostaB: "Dificil",
    respostaC: "Perder tudo",
    correta: "Perder tudo"
}

const Q4 = {
    numero: 4,
    pergunta: "O Brasi é...",
    respostaA: "Um estado",
    respostaB: "Um continente",
    respostaC: "Um pais",
    correta: "Um pais"
}

const Q5 = {
    numero: 5,
    pergunta: "De qual mangá é o personagem Musashi miyamoto?",
    respostaA: "Vagabond",
    respostaB: "Berserk",
    respostaC: "Vinland saga",
    correta: "Vagabond"
}

const quests = [Q1, Q2, Q3, Q4, Q5]

$question.textContent = Q1.pergunta
$a.textContent = Q1.respostaA
$b.textContent = Q1.respostaB
$c.textContent = Q1.respostaC
$numberOfQuestion.textContent = Q1.numero + '/5'

$a.setAttribute("value", $numberOfQuestion + 'A')
$a.setAttribute("value", $numberOfQuestion + 'B')
$a.setAttribute("value", $numberOfQuestion + 'C')

function nextQuestion(){
    setTimeout(() => {
        questIndex += 1
        if(questIndex == quests.length){
            gameOver()
            questIndex = 0
        }
        $question.textContent = quests[questIndex].pergunta
        $a.textContent = quests[questIndex].respostaA
        $b.textContent = quests[questIndex].respostaB
        $c.textContent = quests[questIndex].respostaC
        $numberOfQuestion.textContent = quests[questIndex].numero + '/5'
        $showPoints.innerHTML = 'pontos: ' + points
    }, 500)
}

const alternativas = [$a, $b, $c]

alternativas.forEach(item => item.addEventListener('click', () => {
    validateResp(item, item, item)
    nextQuestion()
}))

function gameOver(){
   const $cxConteinerQuiz = document.querySelector('#quiz-area')
   $cxConteinerQuiz.style.display = 'none'
   const $body = document.querySelector('#conteiner')
   const $cxGameOver = document.createElement('div')
   $cxGameOver.classList.add('game-over')
   $cxGameOver.innerHTML = `
        <h2>Fim de jogo</h2>
        <p>Sua pontuação foi: ${points}</p>
   `
   $body.appendChild($cxGameOver)
   setTimeout(() => {
       location.reload()
   }, 10000)
}

function validateResp(nQuestao, resp, item){
    let resposta = resp.textContent
    let value = nQuestao.value
    let correta = quests[questIndex].correta
    if(resposta == correta){
        respostaCorreta(item)
        points += 10
    }else{
        respostaErrada(item)
    }
}
function respostaErrada(item){
    item.classList.add('errada')
    setTimeout(() => {
        item.classList.remove('errada')
    }, 500)
}

function respostaCorreta(item){
    item.classList.add('correta')
    setTimeout(() => {
        item.classList.remove('correta')
    }, 500)
}