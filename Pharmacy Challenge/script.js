
//Variables
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById ('btn3')
let score1 = 0
let score2 = 0
let score3 = 0
const subBtnOne = document.getElementById('subtract-btn-1')
const subBtnTwo = document.getElementById('subtract-btn-2')
const subBtnThree = document.getElementById('subtract-btn-3')


//local storage score keeper retreive score on load
function getLastScore() {
    localStorage.getItem("player1Score")
    localStorage.getItem("player2Score")
    localStorage.getItem("player3Score")
}
getLastScore()

function renderScore() {
    let player1ScoreCard = document.getElementById('score1')
    let player2ScoreCard = document.getElementById('score2')
    let player3ScoreCard = document.getElementById('score3')
    player1ScoreCard.innerText = localStorage.getItem("player1Score")
    player2ScoreCard.innerText = localStorage.getItem("player2Score")
    player3ScoreCard.innerText = localStorage.getItem("player3Score")
    console.log('last score shown')
}

renderScore()



btn1.addEventListener('click', function () {
    console.log('btn1')
    let score1 = localStorage.getItem("player1Score")
    score1++
    document.getElementById('score1').innerText = score1
    localStorage.setItem('player1Score', score1)
    console.log(score1)
    //bounce test
    document.getElementById('character1').classList.add('bounce')
    setTimeout(stopBounce1, 2000)

})
function stopBounce1(){
    document.getElementById('character1').classList.remove('bounce')
}

btn2.addEventListener('click', function () {
    let score2 = localStorage.getItem("player2Score")
    score2++
    document.getElementById('score2').innerText = score2
    localStorage.setItem('player2Score', score2)
    //bounce
    document.getElementById('character2').classList.add('bounce')
    setTimeout(stopBounce2, 2000)
})
function stopBounce2(){
    document.getElementById('character2').classList.remove('bounce')
}
btn3.addEventListener('click', function () {
    let score3 = localStorage.getItem("player3Score")
    score3++
    document.getElementById('score3').innerText = score3
    localStorage.setItem('player3Score', score3)
    //bounce
    document.getElementById('character3').classList.add('bounce')
    setTimeout(stopBounce3, 2000)
})
function stopBounce3(){
    document.getElementById('character3').classList.remove('bounce')
}



//Subtract one from the Score
subBtnOne.addEventListener('click', function () {
    let score1 = localStorage.getItem("player1Score")
    score1--
    document.getElementById('score1').innerText = score1
    localStorage.setItem('player1Score', score1)
})
subBtnTwo.addEventListener('click', function () {
    let score2 = localStorage.getItem("player2Score")
    score2--
    document.getElementById('score2').innerText = score2
    localStorage.setItem('player2Score', score2)
})
subBtnThree.addEventListener('click', function () {
    let score3 = localStorage.getItem("player3Score")
    score3--
    document.getElementById('score3').innerText = score3
    localStorage.setItem('player3Score', score3)
})

//Reset Total Score//
document.getElementById('reset-score').addEventListener('click', function (){
    console.log('clear')
    localStorage.clear()
    let score1 = 0
    let score2 = 0
    let score3 = 0

    document.getElementById('score1').innerText = score1
    document.getElementById('score2').innerText = score2
    document.getElementById('score3').innerText = score3
})

//Animate Character Bounce
