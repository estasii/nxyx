// Є дві змінні, якщо вони з однаковим знаком - то перемножити і вивести результат, 
// якщо з різними знаками - то поділити і вивести результат,
// якщо одне зі значень 0 - то покласти в результат значення іншої змінної і вивести результат,
// якщо обидва нулі - то покласти в результат NaN і вивести результат.


// Якщо число додатнє, парне, кратне 3 і 6 одночасно - вивести win, інакше - lose.
// Першим обробляти варіант з lose. 

let number1 =0
let number2 =0
let result =null
if ((number1>0 && number2>0)||(number1<0 && number2<0)) {
    result=number1*number2
    console.log(result)
}
else if((number1<0 && number2>0)||(number1>0 && number2<0)) {
   result= number1/number2 
   console.log(result)
}
else if (number1===0 && number2===0) {
    result= NaN
    console.log(result)}

else if (number1===0) {
    result= number2
    console.log(result)
}


if (!(result%2===0 && result%3===0 && result%6===0)) {
    console.log('lose')
}
else{
    console.log('win')  
}