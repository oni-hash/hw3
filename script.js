//function 1
const number = +prompt("Введіть багатозначне число");
function getMaxDigit(number) {
  number = String(number).split('')
  let calculation = 0;
  for (let a = 0; a < number.length; a++){
    if (calculation < number[a]) {
    calculation = number[a];
  }
}
return calculation;
}
alert (`"Найбільша цифра: ${getMaxDigit(number)}"`);


//function 3
/*const enterName = +prompt("Введіть ім'я");
function getName (fix) {
    fix = fix.split('');
    const firstLetter = fix[0].toUpperCase();
    const otherLetters = fix.slice(1).toLowerCase();
    const firstLetterFinal = firstLetter.join();
    const otherLettersFinal = otherLetters.join();
    const formatName = firstLetterFinal + otherLettersFinal;
    return formatName;
}
alert (`"Форматоване ім'я: ${getName (enterName)}"`);*/



//function 4
const salary = +prompt("Введіть свою зарплату");
function getSalary (sum) {
    const tax = 19.5;
    const yourTax = (sum/100)*tax;
    const cash = sum - yourTax;
    return cash;
}
alert (`"Зарплата після відрахування податку: ${getSalary (salary)}"`);

//function 5
const firstNumber = +prompt ("Введіть початкове число");
const secondNumber = +prompt ("Введіть кінцеве число, більше за попереднє");
function getRandomNumber (initial, ending) {
  if (initial < ending) {
  const randomDigit = initial + Math.round(Math.random() * (ending-initial));
  return randomDigit;
}
else {
  return ("Помилка: введіть кінцеве число, більше за попереднє");
}
}
alert (`"Випадкове проміжне число: ${getRandomNumber (firstNumber, secondNumber)}"`);

//function 6
/*const enterWord = +prompt ("Введіть слово");
const enterLetter = +prompt ("Виберіть літеру в слові");
function countLetter (yourWord, yourLetter) {
    yourWord = yourWord.toLowerCase();
    yourLetter = yourLetter.toLowerCase();
    let sumLetters = 0;
    for (let i = 0; i < yourWord.length(); i++) {
      if (yourLetter === yourWord[i]) {
        sumLetters++;
      }
    }
    return sumLetters;
}
alert (`"Кількість цієї літери в слові: ${countLetter (enterWord, enterLetter)}"`);*/

//function 7
/*const sumMoney = +prompt ("Введіть суму");
const currency = +prompt ("Введіть валюту $ або UAH");
function convertCurrency (money, current) {
  const dollarToUah = 28;
  if (current == "$") {
    return (money * dollarToUah);
  }
  else if (current == "UAH" || current == "uah"){
    return (money / dollarToUah);
  }
  else {
    return ("Будь ласка, введіть $ або UAH");
}
}
alert (`"Сума: ${convertCurrency (sumMoney, currency)}"`);*/

//function 8
const passAmount = +prompt ("Введіть цифру - кількість символів");
function getRandomPassword (amount) {
let zero = "0";
let zeroGroup = zero.repeat(amount);
let comma = "1" + zeroGroup;
let multiplication = Number(comma);
let password = Math.round(Math.random() * multiplication);
return password;
}
alert (`"Пароль: ${getRandomPassword (passAmount)}"`);
