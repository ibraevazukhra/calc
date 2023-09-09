const inputOne = document.querySelector('.inputOne')
const inputTwo = document.querySelector('.inputTwo')
const plusBtn = document.querySelector('.plus')
const minusBtn = document.querySelector('.minus')
const miltiplBtn = document.querySelector('.multiplication')
const divisionBtn = document.querySelector('.division')
const btnResult = document.querySelector('.btnResult')
const resultEl = document.querySelector('.result')
//переменная которая по умолчанию выбирает математическое действие
let action = '+'
//Создаем функцию с действием "+" и вешаем на нее клик
plusBtn.onclick = function () {
    action = '+'
}
//Создаем функцию с действием "-" и вешаем на нее клик
minusBtn.onclick = function () {
    action = '-'
}
miltiplBtn.onclick = function () {
    action = '*'
}
divisionBtn.onclick = function () {
    action = '/'
}
function printResult(resultEl){
    if(result < 0){
        resultEl.style.color = 'red'
    }else{
        resultEl.style.color = 'green'
    }
}
//Создаем функцию расчета когда мы кликаем на кнопку "Рассчитать"
btnResult.onclick = function () {
    if(action === '+'){
        const sum = Number(inputOne.value) + Number(inputTwo.value)
        resultEl.textContent = sum
    }else if(action === '-'){
        const sum = Number(inputOne.value) - Number(inputTwo.value)
        resultEl.textContent = sum
    }else if(action === '*'){
        const sum = Number(inputOne.value) * Number(inputTwo.value)
        resultEl.textContent = sum
    }else if(action === '/'){
        const sum = Number(inputOne.value) / Number(inputTwo.value)
        resultEl.textContent = sum
    }

}