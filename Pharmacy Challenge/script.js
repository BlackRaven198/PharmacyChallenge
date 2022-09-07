

let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById ('btn3')
let score1 = 0
let score2 = 0
let score3 = 0

//local storage score keeper retreive score on load
function getLastScore() {
    localStorage.getItem("player1Score")
    localStorage.getItem("player2Score")
    localStorage.getItem("player3Score")

    // let score1 = localStorage.getItem("player1Score")
    // //print current score to screen//
    // document.getElementById('score1').innerText = localStorage.getItem("player1Score")
    // document.getElementById('score2').innerText = score2
    // document.getElementById('score3').innerText = score3

}
getLastScore()
// function printCurrentScore() {
//     document.getElementById('score1').innerText = score1
//     document.getElementById('score2').innerText = score2
//     document.getElementById('score3').innerText = score3
// }
// printCurrentScore()

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
})

btn2.addEventListener('click', function () {
    console.log('btn2')
    let score2 = localStorage.getItem("player2Score")
    score2++
    document.getElementById('score2').innerText = score2
    localStorage.setItem('player2Score', score2)
})

btn3.addEventListener('click', function () {
    console.log('btn3')
    let score3 = localStorage.getItem("player3Score")
    score3++
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