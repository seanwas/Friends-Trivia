var variableStringQuestion = ["What was Monica's name on her high school field hockey team?", "What do they call Ross when he gets angry?", "question3", "question4", "question5", "question6", "question7", "question8", "question9", "question10"]

var variableStringAnswerOne = ["Big Fat Goalie", "Rizzo"]
var variableStringAnswerTwo = ["Harmonica", "Red Ross"]
var variableStringAnswerThree = ["Laundry", "Miss Chanadler Bong"]
var variableStringAnswerFour = ["Rachel", "Dr. Falengi"]

var variableIntegerCorrectAnswer = [1, 2]
var x = -1

increaseTheQuestionNumber()

alert (answerClicked)


function AllAnswerVerifcation(answerClicked) {
    console.log('answer ' + answerClicked + ' was selected')

    if (variableIntegerCorrectAnswer[x] === answerClicked) {
        alert('Answer ' + answerClicked + ' is correct')
    } else {
        alert('Answer ' + answerClicked + ' is WRONG')
    }
    increaseTheQuestionNumber()
}

// Event Handler and Function for Answer 1
document.getElementById('HTMLanswerOne').addEventListener('click', FunkAnswerOneClicked)

function FunkAnswerOneClicked() {
    AllAnswerVerifcation(1)
}

// Event Handler and Function for Answer 2
document.getElementById('HTMLanswerTwo').addEventListener('click', FunkAnswerTwoClicked)

function FunkAnswerTwoClicked() {
    AllAnswerVerifcation(2)
}

// Event Handler and Function for Answer 3
document.getElementById('HTMLanswerThree').addEventListener('click', FunkAnswerThreeClicked)

function FunkAnswerThreeClicked() {
    AllAnswerVerifcation(3)
}

// Event Handler and Function for Answer 4
document.getElementById('HTMLanswerFour').addEventListener('click', FunkAnswerFourClicked)

function FunkAnswerFourClicked() {
    AllAnswerVerifcation(4)
}

function increaseTheQuestionNumber() {
    x = x + 1
    if (x === 10) {
        endGame()
    } else {

        document.getElementById('HTMLquestion').innerText = variableStringQuestion[x]
        document.getElementById('HTMLanswerOne').innerText = variableStringAnswerOne[x]
        document.getElementById('HTMLanswerTwo').innerText = variableStringAnswerTwo[x]
        document.getElementById('HTMLanswerThree').innerText = variableStringAnswerThree[x]
        document.getElementById('HTMLanswerFour').innerText = variableStringAnswerFour[x]
    }
}

function endGame() {
    alert('Game Over Man, Game Over')
}