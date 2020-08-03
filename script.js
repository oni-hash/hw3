//function 1
const number = +prompt("Введіть багатозначне число");
while (Number.isNaN(number)) {
  number = +prompt("Введіть число!");
}
function getMaxDigit(getnumber) {
  getnumber = String(getnumber).split('');
  let calculation = 0;
  for (let a = 0; a < getnumber.length; a++){
    if (calculation < getnumber[a]) {
    calculation = getnumber[a];
  }
}
return calculation;
}
alert (`"Найбільша цифра: ${getMaxDigit(number)}"`);


//function 3
const enterName = prompt("Введіть ім'я");
function getName (fix) {
    return (fix[0].toUpperCase() + fix.slice(1).toLowerCase());
}
alert (`"Форматоване ім'я: ${getName(enterName)}"`);



//function 4
const salary = Number(prompt("Введіть свою зарплату"));
function getSalary (sum) {
    const tax = 19.5;
    const yourTax = (sum/100)*tax;
     return (sum - yourTax);
}
alert (`"Зарплата після відрахування податку: ${getSalary (salary)}"`);

//function 5

const firstNumber = Number(prompt("Введіть початкове число"));
const secondNumber = Number(prompt("Введіть кінцеве число, більше за попереднє"));
while (secondNumber < firstNumber) {
secondNumber = +prompt ("Введіть кінцеве число, більше за попереднє");
}
function getRandomNumber (initial, ending) {
  const randomDigit = initial + Math.round(Math.random() * (ending-initial));
  return randomDigit;
}
alert (`"Випадкове проміжне число: ${getRandomNumber (firstNumber, secondNumber)}"`);

//function 6
const enterWord = prompt ("Введіть слово");
const enterLetter = prompt ("Виберіть літеру в слові");
function countLetter (yourWord, yourLetter) {
    yourWord = yourWord.toLowerCase();
    yourLetter = yourLetter.toLowerCase();
    let sumLetters = 0;
    for (let i = 0; i < yourWord.length; i++) {
      if (yourLetter === yourWord[i]) {
        sumLetters++;
      }
    }
    return sumLetters;
}
alert (`"Кількість цієї літери в слові: ${countLetter (enterWord, enterLetter)}"`);

//function 7
const enterMoney = prompt ("Введіть суму + валюту $ або UAH");
function convertCurrency (sumMoney) {
  const small = sumMoney.toLowerCase();
  const dollarToUah = 28;
  if (small.indexOf("$") !== -1) {
    return (small.replace('$'," ") * dollarToUah + 'UAH');
  }
  else if (small.indexOf("uah") !== -1) {
    return (Math.round(small.replace('uah', " ") / dollarToUah) + '$');
  }
  else {
    return ("Будь ласка, введіть $ або UAH");
}
}
alert (`"Сума: ${convertCurrency(enterMoney)}"`);

//function 8
const passAmount = Number(prompt("Введіть цифру - кількість символів"));
function getRandomPassword (amount = 222222) {
const zero = "0";
const zeroGroup = zero.repeat(amount);
const comma = "1" + zeroGroup;
const multiplication = Number(comma);
return (Math.round(Math.random() * multiplication));
}
alert (`"Пароль: ${getRandomPassword (passAmount)}"`);
