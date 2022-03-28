var name = "Denis"

var firstBimesterGrades = 8
var secondBimesterGrades = 7
var thirdBimesterGrades = 1
var fourthBimesterGrades = 5

var finalGrade = (firstBimesterGrades + secondBimesterGrades + thirdBimesterGrades + fourthBimesterGrades) / 4

var finalGrade = finalGrade.toFixed(1)

const resultTag = document.querySelector(".result")

if (finalGrade >= 6){
  resultTag.innerHTML = "Congratulations! You passed with a score of " + finalGrade
  resultTag.style.color = "black"
}
else if (finalGrade < 6){
  resultTag.innerHTML = "Unfortunately you haven't pass, your score was " + finalGrade
  resultTag.style.color = "red"
}



//console.log("welcome " + name)
//console.log(finalGrade)

//concept of today's class
//variables, strings, console.log, toFixed, mathOperation, concatenation
//CHALENGES = add conversor de moedas, temp, distancias