// The Cat In The Hat has cat A under his hat, cat A has cat B under his hat and so on until Z
// The Cat In The Hat is 2,000,000 cat units tall.
// Each cat is 2.5 times bigger than the cat underneath their hat.
// Find the total height of the cats if they are standing on top of one another.
// Countig starts from the Cat In The Hat
// n = the number of cats
// fix to 3 decimal places.
// assert.strictEqual(height(7), "3331148.800");
//     assert.strictEqual(height(0), "2000000.000")
function height(n) {
  let initialCat = 2000000;
  var resultArray = [initialCat];
  for (var i = 0; i < n; i++) {
    initialCat /= 2.5;
    resultArray.push(initialCat);
  }
  var sum = resultArray.reduce((a,b) => a + b );
  
  return sum.toFixed(3);
}
console.log(height(7));

// YouTube had a like and a dislike button, which allowed users to express their opinions about particular content. 
// It was set up in such a way that you cannot like and dislike a video at the same time. There are two other interesting rules to be noted about the interface: 
// Pressing a button, which is already active, will undo your press. If you press the like button after pressing the dislike button, the like button overwrites the previous 
// "Dislike" state. The same is true for the other way round.

// Task
// Create a function that takes in a list of button inputs and returns the final state.


function likeOrDislike(buttons) {
  let result = "Nothing";
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i] == result) {
      result = "Nothing";
    } else {
      result = buttons[i];
    }
  }
  return result;
  
}
console.log(likeOrDislike(["Dislike", "Like","Like", "Like"]))
// Hello, object
// importance: 5
// Write the code, one line for each action:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.
let user = {
  name: "John",
  surname: "Smith",
};
user.name = "Pete";
delete user.name;
console.log(user.name);
console.log("--------------------------------")

// Check for emptiness
// importance: 5
// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

// Should work like that:

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false
// Open a sandbox with tests.

function isEmpty(obj){
  if(Object.keys(obj) == ''){
      return true;
  } else if (Object.keys(obj) != '') {
      return false;
  }
}
let schedule = {};
console.log(isEmpty(schedule));
schedule["8:30"] = "get up";
console.log(isEmpty(schedule))
console.log("--------------------------------")


// Sum object properties
// importance: 5
// We have an object storing salaries of our team:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

// If salaries is empty, then the result must be 0.

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let toArray = Array.from(Object.values(salaries));
let result = toArray.reduce((a, b) => {
  return a + b;
}, 0);
console.log(result);

//This is what i was thinking to do, but the let sum = 0 needed to be outside the for in loop...
let sum = 0;
for (let key in salaries) {
sum += salaries[key];
}
console.log(sum); // 390
console.log("--------------------------------")

// Multiply numeric property values by 2
// importance: 3
// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

// For instance:

// // before the call
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

// // after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

// P.S. Use typeof to check for a number here.

let menu = {
width: 200,
height: 300,
title: "My menu"
};

function multiplyNumeric(menu){
  for(let key in menu){
      if(typeof menu[key] == "number"){
          menu[key] = menu[key]*2;
      }
  }
}
multiplyNumeric(menu);
console.log(menu.height);

console.log("--------------------------------")
//CODEWAR PROBLEMS START HERE


//Problem 1, remove first and last number, replace , with space

function array(string) {
  // convert to array, pop and shift, join by space, convert back to string
  let newArr = string.split(",");
  newArr.pop();
  newArr.shift();
  if(newArr == ''){
      newArr = null;
      return newArr;
  } else {
      newArr = newArr.toString();
      let finalString = newArr.replaceAll(",", " ");
      return finalString;
  }
  
}
console.log(array('1,2,2,3,3,3,3,33,3,'));

console.log("--------------------------------")


//Problem 2, take array of numbers and give reverse of each ex. 1 --> -1, -2 --> 2
function invert(array) {
  
  let newArr = [];
  array.forEach(number => {
      if(number > 0){
          number = -Math.abs(number);
          newArr.push(number);
      } else if (number < 0){
          number = Math.abs(number);
          newArr.push(number);
      } else if (number == 0){
          newArr.push(number);
      }
  })
  return newArr;
}
console.log(invert([0]));

console.log("--------------------------------")

//Problem 3, reverse the array

function fixTheMeerkat(arr) {
  let newKat = arr.reverse()
  return newKat;
}
console.log(fixTheMeerkat(["head", "body", "torso"]))

console.log("--------------------------------")

//Problem 4, return new array with length of each word appended to the word

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]

function addLength(str) {
  let strArr = str.split(" ");
  let lengthOfWord = strArr.map(word => {
      return word + " " + word.length;
  });
  return lengthOfWord;
  
}
console.log(addLength("apple ban dog"));
console.log("--------------------------------")

//CODEWARS DAY 1 PROBLEMS END HERE

//CLASS 22 CODE
//check if code has a question mark
let questionOrNot = "Is this a question?";
if(questionOrNot.includes("?")){
  console.log("Yes, this is a question");
} else {
  console.log("No this isn't a question")
}

//replace specific word with another one, if it is included
let multipleWords = "Hello I am John, a jr. dev at 100 devs";
if(multipleWords.includes("jr. dev")){
  multipleWords = multipleWords.replace("jr. dev", "Software Engineer");
}
console.log(multipleWords)

//Makes the console give a random number between 0 and 1 and store each (worth 0.33 per) in a variable
function game(number){
  let result;
  if(number > 0.6666){
      result = "Scissors"
  } else if (number < 0.6666 && number > 0.3333){
      result = "Paper"
  } else {
      result = "Rock";
  }
  return result;
}
console.log(game(Math.random()));

//checks if the user won or lost the previous function
function winOrLose(userChoice){
  let botResult = game(Math.random());
  let userResult;
  if(botResult == "Scissors" && userChoice == "Paper"){
      userResult = "You lost! ";
  } else if (botResult == "Rock" && userChoice == "Scissors"){
      userResult = "You lost! ";
  } else if (botResult == "Paper" && userChoice == "Rock"){
      userResult = "You lost! ";
  } else if (botResult == userChoice) {
      userResult = "Tie. ";
  } else {
      userResult = "YOU WON!!! ";
  }
  console.log(botResult)
  return userResult;
}
console.log(winOrLose("Scissors"))

//Repeat the rock paper scissors game x times
function choices(arrayOfChoices, userChoice){
  let x = arrayOfChoices.length;
  console.log(winOrLose(userChoice).repeat(x));
}
choices([1,2,3,4,5,6], "Scissors")

//adding all values in an array using reduce
let twentyTwo = [1,5,2,3,5,34].reduce((startValue, index) => startValue + index, 0);
console.log(twentyTwo)

//creating new array using map that makes all elements squared
function mapSquared(arrOfNum){
  return arrOfNum.map(index => index*index);
}
console.log(mapSquared([5,2,1,3,5]))

//reversing a string
function reverseAString(stringg){
  let backToString = stringg.split("").reverse().join('')
  return backToString;
}
console.log(reverseAString("Lmao"))

//Palindrome check
function palindromeOrNot(word){
  let palindromeCheck = word.split("").reverse().join('');
  if(word.toUpperCase() == palindromeCheck.toUpperCase()){
      console.log("Its a palindrome");
  } else {
      console.log("It's not a palindrome");
  }
}
palindromeOrNot("Nun");

//create dog object with 4 properties and 3 methods





// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

// assert.strictEqual(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")
//    assert.strictEqual(disemvowel("No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
//    assert.strictEqual(disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?")

function disemvowel(str) {
    str = str.replace(/a|e|i|o|u|A|E|I|O|U/g, '');
    return str;
}
console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"))

function duplicates(arr) {
    return arr.reduce(function(prev, cur, i, a) {
      if (i !== a.indexOf(cur) && prev.indexOf(cur) === -1) {
        prev.push(cur);
      }
      return prev;
    }, []);
  }

// Your task is to write a function which returns the sum of a sequence of integers.
// The sequence is defined by 3 non-negative values: begin, end, step.
// If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.
// Examples
// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)
// assert.strictEqual(sequenceSum(2, 6, 2), 12)
// assert.strictEqual(sequenceSum(1, 5, 1), 15)
// assert.strictEqual(sequenceSum(1, 5, 3), 5)  
// })

const sequenceSum = (begin, end, step) => {

  let sum = 0;
  for (let i = begin; i <= end; i += step) {
    sum += i;
  }
  return sum;
};

console.log(sequenceSum(2,2,2));


function spacey(array){
  for (let i = 1; i < array.length; i++) {
    array[i] = array[i - 1] + array[i];
  }
  return array;
}
console.log(spacey(['i', 'have','no','space']))


function age(x, y) {
  const brotherAge = (1 / (y - 1)) * x;
  const julieAge = y * brotherAge;

  return julieAge;
}
console.log(age(15,2))


// TODO: define the Dog class here
class Dog{
  constructor (name, species, size){
    this.name = name;
    this.species = species;
    this.size = size;
  }
  bark(){
    if(this.size > 60){
      return 'Grrr! Grrr!';
    } else {
      return 'Woof! Woof!'
    }
  }
}

const fang = new Dog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);

console.log('----------------------------------------------------')
// Character inventory
// Improve the example RPG to add character inventory management according to the following rules:

// A character's inventory contains a number of gold and a number of keys.

// Each character begins with 10 gold and 1 key.

// The character description must show the inventory state.

// When a character slays another character, the victim's inventory goes to its vanquisher.

// Here's the expected execution result.
// class Character {
//   constructor(name, health, strength) {
//     this.name = name;
//     this.health = health;
//     this.strength = strength;
//     this.xp = 0; // XP is always zero for new characters
//     this.keys = 1;
//     this.gold = 10;
//   }
//   // Attack a target
//   attack(target) {
//     if (this.health > 0) {
//       const damage = this.strength;
//       console.log(
//         `${this.name} attacks ${target.name} and causes ${damage} damage points`
//       );
//       target.health -= damage;
//       if (target.health > 0) {
//         console.log(`${target.name} has ${target.health} health points left`);
//       } else {
//         target.health = 0;
//         const bonusXP = 10;
//         const bonusGold = 10;
//         const bonusKey = 1;
//         console.log(
//           `${this.name} eliminated ${target.name} and wins ${bonusXP} experience points, ${bonusGold} gold, and ${bonusKey} key(s)`
//         );
//         this.xp += bonusXP;
//         this.gold += bonusGold;
//         this.keys += bonusKey;
//       }
//     } else {
//       console.log(`${this.name} can’t attack (they've been eliminated)`);
//     }
//   }
//   // Return the character description
//   describe() {
//     return `${this.name} has ${this.health} health points, ${this
//       .strength} as strength, ${this.xp} XP points, ${this.keys} key(s), and ${this.gold} gold`;
//   }
// }
// const aurora = new Character("Aurora", 150, 25);
// const glacius = new Character("Glacius", 130, 30);

// console.log("Welcome to the adventure! Here are our heroes:");
// console.log(aurora.describe());
// console.log(glacius.describe());

// const monster = new Character("Spike", 40, 20);
// console.log("A wild monster has appeared: it's named " + monster.name);

// monster.attack(aurora);
// monster.attack(glacius);
// aurora.attack(monster);
// glacius.attack(monster);

// console.log(aurora.describe());
// console.log(glacius.describe());

// Account list
// Let's build upon a previous account object exercise. A bank account is still defined by:

// A name property.
// A balance property, initially set to 0.
// A credit method adding the value passed as an argument to the account balance.
// A describe method returning the account description.
// Write a program that creates three accounts: one belonging to Sean, another 
// to Brad and the third one to Georges. These accounts are stored in an array. Next, the program credits 1000 to each account and shows its description.
class account{
  constructor(balance, name){
    this.balance = balance;
    this.name = name;
  }
  credit(num){
    this.balance += num;
  }
  describe(){
    return `Owner: ${this.name}, Balance: ${this.balance}`;
  }
}
const sean = new account(150, "Sean");
const georges = new account(211, "Georges");
const brad = new account(560, "Brad");
let accountList = [sean, georges, brad];
for(let i = 0; i < accountList.length; i++){
  accountList[i].credit(1000);
  console.log(accountList[i].describe())
}
console.log('----------------------------------------------------')

function arrAdder(arr) {
  let sentence = '';
  for (let i = 0; i < arr[0].length; i++) {
    for (let j = 0; j < arr.length; j++) {
      const letter = arr[j][i];
      if (letter === '') {
        break;
      }
      sentence += letter;
    }
    sentence += ' '; 
  }
  return sentence;
}
const lettersArray = [
  ['J','L','L','M'],
  ['u','i','i','a'],
  ['s','v','f','n'],
  ['t','e','e','']
];
console.log(arrAdder(lettersArray));
console.log('----------------------------------------------------')
// function add(num) {
//   return num + 1;
// }

// function mult(num) {
//   return num * 30;
// }

// chain(2, [add, mult]);
// // returns 90;
function add(num) {
  return num + 1;
}
function mult(num) {
  return num * 30;
}
function chain(input, fs) {
  let num = input;
  for(let i = 0; i < fs.length; i++){
    num = fs[i](num);
  }  
  return num;
}
console.log(chain(2, [add, mult]))
console.log('----------------------------------------------------')

function wallpaper(l, w, h) {
  const totalArea = 2 * (l + w) * h;
  let lengthNeeded = totalArea / 0.52 * 1.15;
  let rollsNeeded = Math.ceil(lengthNeeded / 10.0);
  numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", 
  "eleven", "twelve","thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", 
  "nineteen", "twenty"]

  if (l === 0 || w === 0 || h === 0) {
    return "zero";
  }
  return numbers[rollsNeeded];
  
}
console.log(wallpaper(6.3, 5.8, 3.13))
console.log('----------------------------------------------------')

// Complete the function that returns the lyrics for the song 99 Bottles of Beer as an array of strings: each line should be a separate element - see the example at the bottom.
// Note: in order to avoid hardcoded solutions, the size of your code is limited to 1000 characters
// Lyrics
// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.
// 98 bottles of beer on the wall, 98 bottles of beer.
// Take one down and pass it around, 97 bottles of beer on the wall.
// ...and so on...

//create array of lines, every even number line = "# bottles of beer on the wall, # bottles of beer", every odd number line = "take one down and pass it around.."
//set array size to iterate 100 times. for every even line print current # of beers, for every odd line print remaining # of beers.
//if bottles = 0, print new line asking to get more. 

var sing = function(){
  let lyrics = [];
  for(let i = 99; i >= 1; i--){
    let beers = i;
    let actionone = beers > 1 ? 'bottles' : 'bottle';
    let currentLine = `${i} ${actionone} of beer on the wall, ${i} ${actionone} of beer.`;
    lyrics.push(currentLine);
    
    let leftover = i - 1;
    let action = leftover > 1 ? 'bottles' : 'bottle';
    let nextLine = '';
    if(leftover == 0){
      nextLine = `Take one down and pass it around, no more bottles of beer on the wall.`;
    } else {
      nextLine = `Take one down and pass it around, ${leftover} ${action} of beer on the wall.`;
    }
    lyrics.push(nextLine)
  }
  lyrics.push("No more bottles of beer on the wall, no more bottles of beer.");
  lyrics.push("Go to the store and buy some more, 99 bottles of beer on the wall.");
  return lyrics;
}
console.log(sing)
console.log('----------------------------------------------------')
// Write function which takes a string and make an acronym of it.
// Rule of making acronym in this kata:
// split string to words by space char
// take every first letter from word in given string
// uppercase it
// join them toghether

function toAcronym(inp){
  inp = inp.split(' ');
  let acronym = []
  for(let i = 0; i < inp.length; i++){
    acronym.push(inp[i][0].toUpperCase());
  }
  return acronym.join('');
}
console.log(toAcronym("hyper text markup language"))
console.log('----------------------------------------------------')

// Given a number return the closest number to it that is divisible by 10.
// Example input:
// 22
// 25
// 37
// Expected output:
// 20
// 30
// 40
// Start by defining a function that takes a number as input and returns the closest number to it that is divisible by 10.

// Determine the remainder when the input number is divided by 10 using the modulo operator %. This will give you the distance of the number from the nearest multiple of 10.

// Compare the remainder with half of 10 (which is 5) to determine whether rounding up or rounding down is closer. If the remainder is less than 5, rounding 
//down will be closer; otherwise, rounding up will be closer.

// If rounding down is closer, subtract the remainder from the input number to get the closest number that is divisible by 10. If rounding up is closer, subtract the 
//remainder from 10 and add the result to the input number.

// Return the closest number that you calculated in step 4 as the output of the function.
const closestMultiple10 = num => {
  let leftOver = num % 10;
  let result = 0;
  if(leftOver >= 5){
    result = (10-leftOver)+num;
  } else {
    result = num - leftOver;
  }
  return result;
};
console.log(closestMultiple10(37))
console.log('----------------------------------------------------')

// The goal of this kata is two-fold:
// 1.) You must produce a fibonacci sequence in the form of an array, containing a number of items equal to the input provided.
// 2.) You must replace all numbers in the sequence divisible by 3 with Fizz, those divisible by 5 with Buzz, and those divisible by both 3 and 5 with FizzBuzz.
// For the sake of this kata, you can assume all input will be a positive integer.
// Use Cases
// Return output must be in the form of an array, with the numbers as integers and the replaced numbers (fizzbuzz) as strings.

var fibsFizzBuzz = function(n) {
  let start = [];
  let modified = [];
  if (n === 1) {
    start = [1];
    modified = [1];
  } else if (n >= 2) {
    start = [1, 1];
    modified = [1, 1];
    
    for (let i = 2; i < n; i++) {
      let fibNum = start[i - 2] + start[i - 1];
      let modifiedNum = fibNum;
      if (fibNum % 3 === 0 && fibNum % 5 === 0) {
        modifiedNum = 'FizzBuzz';
      } else if (fibNum % 3 === 0) {
        modifiedNum = 'Fizz';
      } else if (fibNum % 5 === 0) {
        modifiedNum = 'Buzz';
      }
      start.push(fibNum);
      modified.push(modifiedNum);
    }
  }

  return modified;
};
console.log(fibsFizzBuzz(20));
console.log('----------------------------------------------------')


 // Output: 45.6 (rounded to one decimal place)
function gps(s, x) {
  if (x.length === 0 || x.length === 1) {
    return 0; // No distance traveled, return 0 mph
  }

  const sections = [];
  const mphPerSection = [];
  const hours = s / 3600;
  for (let i = 0; i < x.length - 1; i++) {
    const start = x[i];
    const end = x[i + 1];
    const difference = end - start;
    sections.push(difference);
  }
  for(let i = 0; i < sections.length; i++){
    const distanceMiles = sections[i];
    const mph = (distanceMiles * 3600) / s;
    mphPerSection.push(mph);
  }
  
  return Math.floor(Math.max(...mphPerSection))
  // x = distance traveled, s = seconds
// take difference between sections, plug it into mph equation, return max value, floor it, return that value.
}
console.log(gps(19,[0.0]))
console.log('----------------------------------------------------')



function maxSumBetweenTwoNegatives(a) {
  let maxSum = -1;
  let currentSum = 0;
  let hasNegative = false;

  for (let i = 0; i < a.length; i++) {
    if (a[i] < 0) {
      if (hasNegative) {
        maxSum = Math.max(maxSum, currentSum);
        currentSum = 0;
      } else {
        hasNegative = true;
      }
    } else if (hasNegative) {
      currentSum += a[i];
    }
  }

  return maxSum;
}
console.log(maxSumBetweenTwoNegatives([-2,1,2,-2])); 
console.log('----------------------------------------------------')
function countSheeps(arrayOfSheep) {
  let sheepTotal = 0;
  for(let i = 0; i < arrayOfSheep.length; i++){
    if(arrayOfSheep[i] === true){
      sheepTotal++;
    }
    
  }
  return sheepTotal; 
}
console.log(countSheeps([true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true ]))
  console.log('----------------------------------------------------')

function oddOrEven(array) {
  let checker = array.reduce((a,b) => {
    return a + b;
  }, 0)
  if(checker % 2 == 0){
    return 'even';
  } else if (checker == 0){
    return 'even'
  } else {
    return 'odd';
  }
}
console.log(oddOrEven([0,1,2,3]))
console.log('----------------------------------------------------')

function createPhoneNumber(numbers){
    if(numbers.length > 10){
      return 'Invalid Input (Too many numbers)';
    } else {
      let firstThree = [numbers[0],numbers[1],numbers[2]];
      let secondThree = [numbers[3],numbers[4],numbers[5]];
      let lastFour = [numbers[6],numbers[7],numbers[8], numbers[9]];
      return ('('+firstThree.join("")+')'+" "+secondThree.join("")+"-"+lastFour.join(""));
    }
}
console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]))

console.log('----------------------------------------------------')

function dontGiveMeFive(start, end){
  let range = [];
  for(let i = start; i <= end; i++){
    range.push(i);
    
  }
  const checkIfFive = range.filter(function(number) {
    const numberString = number.toString();
    if(!numberString.includes('5')){
      return numberString;
    }
  });
  return checkIfFive.length;
}
console.log(dontGiveMeFive(4,17))
console.log('----------------------------------------------------')
function maps(x){
  for(let i = 0; i < x.length; i++){
    const doubledValues = x.map(function(number){
      return number*2;
    })
    return doubledValues;
  }
}
console.log(maps([1,2,3]))
console.log('----------------------------------------------------')

function toCamelCase(str) {
  let arrayOfWords = str.split(/[-_]/);
  for (let i = 1; i < arrayOfWords.length; i++) {
    arrayOfWords[i] = arrayOfWords[i].charAt(0).toUpperCase() + arrayOfWords[i].slice(1);
  }
  return arrayOfWords.join("");
}

console.log(toCamelCase('the_stealth_warrior'));
console.log('----------------------------------------------------')

function getMiddle(s){
   const lettersArr = s.split("");
   const howLong = lettersArr.length;
   const oddResult = Math.ceil((howLong/2)) - 1;
   const evenResult = (howLong/2);
   const evenResultTwo = evenResult - 1;

   if(howLong % 2 == 0){
      return lettersArr[evenResultTwo]+lettersArr[evenResult];
   } else if (howLong % 2 == 1){
      return lettersArr[oddResult];
   }
}
console.log(getMiddle("test"))
console.log(getMiddle("middle"))

function solution(str){
  const reverser = str.split("").reverse().join("");
  return reverser;
}
console.log(solution("hello"))


console.log('----------------------------------------------------')
// Consider a sequence of numbers a0, a1, ..., an, in which an element is equal to the sum of squared digits of the previous element. 
// The sequence ends once an element that has already been in the sequence appears again.
// Given the first element a0, find the length of the sequence.
// Example
// For a0 = 16, the output should be 9
// Here's how elements of the sequence are constructed:
// a0 = 16
// a1 = 12 + 62 = 37
// a2 = 32 + 72 = 58
// a3 = 52 + 82 = 89
// a4 = 82 + 92 = 145
// a5 = 12 + 42 + 52 = 42
// a6 = 42 + 22 = 20
// a7 = 22 + 02 = 4
// a8 = 42 = 16, which has already occurred before (a0)
// Thus, there are 9 elements in the sequence.

function squareDigitsSequence(a0) {
  let digits = a0.toString().split('');
  let sum = a0;
  let amountOfLoops = [a0];
  amountOfLoops.push(a0)

  while (true) {
    sum = sum.toString().split('').map((digit) => parseInt(digit) ** 2).reduce((acc, val) => acc + val, 0);
    if (amountOfLoops.includes(sum)) {
      break;
    }
    amountOfLoops.push(sum);
  }
  return amountOfLoops.length;
}
console.log(squareDigitsSequence(103));

console.log('----------------------------------------------------')
// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Examples:
// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so 
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

function longestConsec(strarr, k) {
  const result = [];
  
  for (let i = 0; i < strarr.length - k + 1; i++) {
    let concatenatedString = "";
    for (let j = 0; j < k; j++) {
      concatenatedString += strarr[i + j];
    }
    
    result.push(concatenatedString);
  }
  
  let MAX = '';
  for (let i = 0; i < result.length; i++) {
    if (result[i] && typeof result[i] === 'string') {
      if (result[i].length > MAX.length) {
        MAX = result[i];
      }
    }
  }
  console.log(result)
  return MAX;
}
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2))
console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2))
console.log('----------------------------------------------------')


// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

function solution(number){
  let multiples = [];
  for(let i = 1; i < number; i++){
    if(i % 5 == 0 && i % 3 == 0){
      multiples.push(i);
    } else if (i % 5 == 0){
      multiples.push(i)
    } else if (i % 3 == 0){
      multiples.push(i)
    }
  }
  let sum = multiples.reduce((a,b) => {
    return a + b;
  }, 0)
  return sum;
  
}

console.log(solution(100))
console.log('----------------------------------------------------')

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. 
// We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.
function likes(names) {
  let message = '';
  
  if(names.length === 0){
    message = "no one likes this"
  } else if(names.length === 1){
    message = names[0] + " likes this"
  } else if (names.length === 2){
    message = names[0] + " and " + names[1] + " like this"
  } else if (names.length === 3){
    message = names[0] + ", " + names[1] + " and " + names[2] + " like this"
  } else if (names.length > 3){
    message = names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this"
  }
  
  return message
}
console.log(likes(["Max", "John"]))
console.log('----------------------------------------------------')

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(A) {
  let counts = {};

  A.forEach((num) => {
    if (counts[num]) {
      counts[num]++;
    } else {
      counts[num] = 1;
    }
  });

  let result = -1; 

  for (const [num, count] of Object.entries(counts)) {
    if (count % 2 !== 0) {
      result = parseInt(num);
      break;
    }
  }

  return result;
}

console.log(findOdd([1, 1, 2, -2, 5, 2, 4, -2, 5]));
console.log('----------------------------------------------------')

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
function digitalRoot(n) {
  let addSumNumbers = n;

  while (addSumNumbers > 9) {
    const numbers = addSumNumbers.toString().split('').map(Number);
    addSumNumbers = numbers.reduce((a, b) => {
      return a + b;
    });
  }
  return addSumNumbers;
}
console.log(digitalRoot(16))
console.log(digitalRoot(942))
console.log(digitalRoot(132189))
console.log(digitalRoot(927074))
console.log(digitalRoot(10))
console.log('----------------------------------------------------')

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]
function arrayDiff(a, b) {
  
  
  const result = a.filter((value) => !b.includes(value));
  
  return result;
}

console.log(arrayDiff([1,2], [1]));
console.log(arrayDiff([1,2,2], [1]))
console.log(arrayDiff([1,2,2], [2]));
console.log(arrayDiff([1,2,2], []));
console.log(arrayDiff([], [1,2]));
console.log(arrayDiff([1,2,3], [1,2]))

console.log('----------------------------------------------------')

// Write a function that takes in a string of one or more words, and returns the same string, 
// but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. 
// Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(string) {
  const hello = string.split(' ');
  
  for (let i = 0; i < hello.length; i++) {
    if (hello[i].length >= 5) {
      hello[i] = hello[i].split('').reverse().join('');
    }
  }
  const sentence = hello.join(' ');

  return sentence;
}

console.log(spinWords("Seriously this is the last one"))
console.log(spinWords("Just kidding there is still one more"))
console.log(spinWords("You are almost to the last test"))
console.log(spinWords("This is another test"))

console.log('----------------------------------------------------')
var countBits = function(n) {
  return n.toString(2).split('').filter((value) => value != 0).length;
};
console.log(countBits(0))
console.log(countBits(4))
console.log(countBits(7))
console.log(countBits(9))
console.log(countBits(10))

console.log('----------------------------------------------------')

// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits 
// that occur more than once in the input string. The input string can be assumed to contain only 
// alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twi
function duplicateCount(text){
  const textLower = text.toLowerCase()
  const array = textLower.split('');
  
  let duplicates = [];
  let circles = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j] && !duplicates.includes(array[j])) {
        duplicates.push(array[j]);
      }
    }
  }
  for(let i = 0; i < array.length; i++){
    if(duplicates.includes(array[i])){
      circles.push(")")
    } else if (!duplicates.includes(array[i])){
      circles.push("(")
    }
  }

  return circles.join("");
  
}
  console.log(duplicateCount("")); //0
  console.log(duplicateCount("abcde"));//0
  console.log(duplicateCount("aabbcde"));//2
  console.log(duplicateCount("aabBcde"));//2
  console.log(duplicateCount("Indivisibility"))//1
  console.log(duplicateCount("Indivisibilities"))// 2

  console.log('----------------------------------------------------')

function findOutlier(integers){
  let evenCount = 0;
  let oddCount = 0;
  let evenNumber, oddNumber;

  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 === 0) {
      evenCount++;
      evenNumber = integers[i];
    } else {
      oddCount++;
      oddNumber = integers[i];
    }

    // Return the outlier if found
    if (evenCount > 1 && oddCount === 1) {
      return oddNumber;
    } else if (oddCount > 1 && evenCount === 1) {
      return evenNumber;
    }
  }
}
console.log(findOutlier([1,2,3]))
console.log('----------------------------------------------------')

function alphabetPosition(text) {
  const alphabet = Array.from("abcdefghijklmnopqrstuvwxyz");
  const textNew = text.toLowerCase().split("");
  const hello = [];

  for (let i = 0; i < textNew.length; i++) {
    const element = textNew[i];
    const index = alphabet.indexOf(element);

    if (index !== -1) {
      hello.push(index + 1);
    }
  }

  return hello.join(" ");
}
console.log(alphabetPosition("Hello"))
console.log(alphabetPosition("The sunset sets at twelve o' clock."))
console.log('----------------------------------------------------')

// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, 
// so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones 
// -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']).
//  You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create 
//  a function that will return true if the walk the app gives you will take you exactly 
// ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

function isValidWalk(walk) {
  if(walk.length != 10){
    return false;
  }
  let vertCounter = 0;
  let horzCounter = 0;

  for(let i = 0; i < walk.length; i++){
    if(walk[i] == "n"){
      vertCounter += 1;
    } else if(walk[i] == "s"){
      vertCounter -= 1;
    } else if(walk[i] == "e"){
      horzCounter += 1;
    } else if(walk[i] == "w"){
      horzCounter -= 1;
    }
  }
  if(vertCounter == 0 && horzCounter == 0){
    return true;
  } else {
    return false;
  }
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));//true
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])); //false
console.log(isValidWalk(['w'])); //false
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']));//false
console.log('----------------------------------------------------')
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence,
//  which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

function persistence(num) {
  const numArray = num.toString().split("");
  let counter = 0;
  
  let chicken = num;
  
  while (chicken > 9) {
    let digits = chicken.toString().split("");
    chicken = digits.reduce((a, b) => {
      return parseInt(a) * parseInt(b); 
    });
    counter++; 
  }

  return counter;
}

console.log(persistence(39)); // Output: 3
console.log(persistence(4)); // Output: 0
console.log(persistence(25)); // Output: 2
console.log(persistence(999)); // Output: 4
console.log('----------------------------------------------------')

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
  let zeroArray = [];
  let everythingArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0 && typeof arr[i] !== 'boolean') {
      zeroArray.push(arr[i]);
    } else {
      everythingArray.push(arr[i]);
    }
  }

  for (let i = 0; i < zeroArray.length; i++) {
    everythingArray.push(zeroArray[i]);
  }

  return everythingArray;
}


console.log(moveZeros([ 'a', 'b', null, 'c', 'd', 1, 1, 3, [], 1, 9, {}, 9, +0, +0, +0, false, +0, +0, +0, +0, +0, +0, +0 ]));


//Expected
[ 'a', 'b', null, 'c', 'd', 1, false, 1, 3, [], 1, 9, {}, 9, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0 ]
console.log('----------------------------------------------------')



// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
  const pigArr = str.split(" ")
  let chicken = []

  for(let i = 0; i < pigArr.length; i++){
    const first = pigArr[i][0]
    const modifiedStr = pigArr[i].slice(1) + first + "ay";
    if (pigArr[i].startsWith("!") || pigArr[i].startsWith("?") || pigArr[i].startsWith("_") || pigArr[i].startsWith("-") || pigArr[i].startsWith("%") || pigArr[i].startsWith("^") || pigArr[i].startsWith("&")) {
      chicken.push(pigArr[i]);
    } else {
      chicken.push(modifiedStr);
    }
    
  }
  return chicken.join(" ")
}

console.log(pigIt('Pig latin is cool')) 
console.log(pigIt('This is my string'))
console.log('----------------------------------------------------')


function humanReadable(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  return formattedTime;
}
console.log(humanReadable(0));
console.log(humanReadable(59));
console.log(humanReadable(60));
console.log(humanReadable(90));
console.log(humanReadable(3599));
console.log(humanReadable(3600));
console.log(humanReadable(86400));
console.log(humanReadable(359999));
console.log('----------------------------------------------------')

function rgb(r, g, b) {
  const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

  let hexColor = [];

  if (r > 255) {
    r = 255;
  } else if (r < 0) {
    r = 0;
  }
  const redHex = hexValues[Math.floor(r / 16)].toString() + hexValues[r % 16].toString();
  hexColor.push(redHex);

  if (g > 255) {
    g = 255;
  } else if (g < 0) {
    g = 0;
  }
  const greenHex = hexValues[Math.floor(g / 16)].toString() + hexValues[g % 16].toString();
  hexColor.push(greenHex);

  if (b > 255) {
    b = 255;
  } else if (b < 0) {
    b = 0;
  }
  const blueHex = hexValues[Math.floor(b / 16)].toString() + hexValues[b % 16].toString();
  hexColor.push(blueHex);

  return hexColor.join("");
}

console.log(rgb(0, 0, 0)); // Output: "000000"
console.log(rgb(0, 0, -20)); // Output: "000000"
console.log(rgb(300, 255, 255)); // Output: "FFFFFF"
console.log(rgb(173, 255, 47)); // Output: "ADFF2F"







console.log("----------------------------------------------")


console.log(rgb(0, -500, 2555))
console.log(rgb(0, 0, -20))
console.log(rgb(300,255,255))
console.log(rgb(173,255,47))
console.log(rgb(69,107,264))

console.log("----------------------------------------------")
// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag (str) {
  if (str.trim() === '') {
    return false;
  }
  const strr = str.split(" ").filter(value => value.trim() !== '');
  let modifiedWords = []
  for(let i = 0; i < strr.length; i++){
    const lengthOfElement = strr[i].split("")
    if (strr.length === 0 || strr.join('').length >= 140) {
      return false;
    }
    const firstWord = strr[0]
    const modifiedLetter = strr[i][0].toUpperCase()
    let modifiedWord = "#"+modifiedLetter+strr[i].slice(1)
    if(strr[i] != strr[0]){
      modifiedWord = modifiedWord.slice(1)
    } 
    modifiedWords.push(modifiedWord)
    
    
  }
  return modifiedWords.join("")
}

console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"))
console.log(generateHashtag("Do We have A Hashtag"))
console.log(generateHashtag("a".repeat(140)))
console.log(generateHashtag("code" + " ".repeat(140) + "wars"))
console.log(generateHashtag("codewars is nice"))
console.log(generateHashtag(''))
console.log("----------------------------------------------")

function rot13(message){
  const alphabet = Array.from("abcdefghijklmnopqrstuvwxyz")
  const messageArray = message.split("")
  let modifiedWord = ""
  for(let i=0; i < messageArray.length; i++){
    let letter = messageArray[i]
    if (alphabet.includes(letter.toLowerCase())) {
      const letterIndex = alphabet.indexOf(letter.toLowerCase());
      const targetIndex = (letterIndex - 13 + alphabet.length) % alphabet.length;
      let modifiedLetter = alphabet[targetIndex];
      if (letter === letter.toUpperCase()) {
        modifiedLetter = modifiedLetter.toUpperCase();
      }
      modifiedWord += modifiedLetter;
    } else {
      modifiedWord += letter;
    }
  }
  return modifiedWord
}
//const targetIndex = (index - aboveIndex + length) % length;
console.log(rot13("TesT"))
console.log(rot13("hello"))
console.log(rot13("HeLLo"))
console.log(rot13("LMAOOO"))

console.log("----------------------------------------------")

function dirReduc(arr) {
  let d = arr.slice(); // Create a copy of the original array
  let reductionMade = true;

  while (reductionMade) {
    reductionMade = false;

    for (let i = 0; i < d.length - 1; i++) {
      if (
        (d[i] === "SOUTH" && d[i + 1] === "NORTH") ||
        (d[i] === "NORTH" && d[i + 1] === "SOUTH")
      ) {
        d.splice(i, 2); // Remove the pair of opposite directions
        reductionMade = true;
        break; // Restart the loop after a reduction is made
      } else if (
        (d[i] === "WEST" && d[i + 1] === "EAST") ||
        (d[i] === "EAST" && d[i + 1] === "WEST")
      ) {
        d.splice(i, 2); // Remove the pair of opposite directions
        reductionMade = true;
        break; // Restart the loop after a reduction is made
      }
    }
  }

  return d;
}
console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]))
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]))
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]))
console.log("----------------------------------------------")

function zero(operation) {
  if (operation) {
    return operation(0);
  } else {
    return 0;
  }
}
function one(operation) {
  if (operation) {
    return operation(1);
  } else {
    return 1;
  }
}
function two(operation) {
  if (operation) {
    return operation(2);
  } else {
    return 2;
  }
}
function three(operation) {
  if (operation) {
    return operation(3);
  } else {
    return 3;
  }
}
function four(operation) {
  if (operation) {
    return operation(4);
  } else {
    return 4;
  }
}
function five(operation) {
  if (operation) {
    return operation(5);
  } else {
    return 5;
  }
}
function six(operation) {
  if (operation) {
    return operation(6);
  } else {
    return 6;
  }
}
function seven(operation) {
  if (operation) {
    return operation(7);
  } else {
    return 7;
  }
}
function eight(operation) {
  if (operation) {
    return operation(8);
  } else {
    return 8;
  }
}
function nine(operation) {
  if (operation) {
    return operation(9);
  } else {
    return 9;
  }
}

function plus(right) {
  return function(left){
    return Math.floor(left + right)
  }
}
function minus(right) {
  return function(left){
    return Math.floor(left - right)
  }
}
function times(right) {
  return function(left){
    return Math.floor(left * right)
  }
}
function dividedBy(right) {
  return function(left){
    return Math.floor(left / right)
  }
}

console.log(seven(times(five()))); // Returns 35
console.log(four(plus(nine()))); // Returns 13
console.log(eight(minus(three()))); // Returns 5
console.log(four(dividedBy(nine()))); // Returns 3


console.log("----------------------------------------------")


function cakes(recipe, available) {
  const recipeKeys = Object.keys(recipe)
  const availableKeys = Object.keys(available)
  const hasSameKeys = recipeKeys.every(key => availableKeys.includes(key));
  let amountOfTimes = []
  if(!hasSameKeys){
    return 0
  }
  for (const key of recipeKeys) {
    const value1 = recipe[key];
    const value2 = available[key];
    
    if (value2 === undefined || value1 > value2) {
      return 0;
    }
    
    const remainder = Math.floor(value2 / value1);
    amountOfTimes.push(remainder)
  }
  return Math.min(...amountOfTimes)
}

const recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
const available = {sugar: 500, flour: 2000, milk: 2000};
console.log(cakes(recipe, available));

let recipe1 = {flour: 500, sugar: 200, eggs: 1};
let available1 = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
console.log(cakes(recipe1, available1));



console.log("----------------------------------------------")

function firstNonRepeatingLetter(s) {
  const sArray = s.split("");
  for (let i = 0; i < sArray.length; i++) {
    const currentChar = sArray[i].toLowerCase();
    let isRepeated = false;

    for (let j = 0; j < sArray.length; j++) {
      if (i !== j && currentChar === sArray[j].toLowerCase()) {
        isRepeated = true;
        break;
      }
    }

    if (!isRepeated) {
      return sArray[i];
    }
  }

  return null; 
}


console.log(firstNonRepeatingLetter('a'));
console.log(firstNonRepeatingLetter('sTress'));
console.log(firstNonRepeatingLetter('moonmen'));


console.log("----------------------------------------------")


function orderWeight(strng) {
  const strngArr = strng.split(" ").filter(value => value !== '');
  const sortedArray = strngArr.sort((a, b) => {
    const sumA = Array.from(a).reduce((sum, digit) => sum + parseInt(digit), 0);
    const sumB = Array.from(b).reduce((sum, digit) => sum + parseInt(digit), 0);

    if (sumA !== sumB) {
      return sumA - sumB;
    } else {
      return a.localeCompare(b);
    }
  });

  return sortedArray.join(" ");
}

console.log(orderWeight("1 200 2 22 200 413 4 6 6 7 7 9 18 27 72 81 91"))
console.log(orderWeight("56 65 74 100 99 68 86 180 90"))
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"))



console.log("----------------------------------------------")

function scramble(str1, str2) {
  const str1Arr = str1.split("").filter(value => value !== '');
  const str2Arr = str2.split("").filter(value => value !== '');

  const str1Freq = {};
  for (const char of str1Arr) {
    str1Freq[char] = (str1Freq[char] || 0) + 1;
  }

  for (const char of str2Arr) {
    if (!str1Freq[char] || str1Freq[char] === 0) {
      return false;
    }
    str1Freq[char]--;
  }

  return true;
}

console.log(scramble('rkqodlw',           'world'      ));
console.log(scramble('cedewaraaossoqqyt', 'codewars'   ));
console.log(scramble('scriptsjava',       'javascripts'));
console.log(scramble('javscripts',        'javascript' ));
console.log(scramble('jscripts',          'javascript' ));
console.log("----------------------------------------------")


var lastDigit = function(str1, str2) {
  if (str2 == 0) {
    return 1;
  }

  const lastDigitStr1 = Number(str1.slice(-1));
  const remainder = Number(str2.slice(-2)) % 4;
  const poweredNum = Math.pow(lastDigitStr1, remainder === 0 ? 4 : remainder);
  const lastDigit = poweredNum % 10;

  return lastDigit;
};

console.log(lastDigit("4", "1"));
console.log(lastDigit("4", "2"));
console.log(lastDigit("9", "7"));
console.log(lastDigit("1606938044258990275541962092341162602522202993782792835301376","2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376"));
console.log(lastDigit("10","10000000000"));

console.log("----------------------------------------------")

function toUnderscore(string) {
  if(Number(string)){
    return string.toString()
  }
  const words = string.match(/[A-Z][a-z0-9]+/g);
  // .match(): This is a JavaScript string method that searches for matches between a regular expression and the string. It returns an array of all the matches found.

  // /[A-Z][a-z0-9]+/g: This is the regular expression pattern that defines the criteria for matching words. Let's break it down further:

  // [A-Z]: This part matches any uppercase letter from A to Z. It ensures that the word starts with an uppercase letter.

  // [a-z0-9]+: This part matches one or more lowercase letters or digits. It allows lowercase letters and numbers to follow the uppercase letter, 
  // making sure that the rest of the word consists of a combination of lowercase letters and digits.

  // /g: This flag at the end of the regular expression indicates that it should find all matches in the input string, not just the first one.
  const wordsLowerCase = words.map(word => word.toLowerCase())
  return wordsLowerCase.join("_")
}
console.log(toUnderscore("TestController"))
console.log(toUnderscore("MoviesAndBooks"))
console.log(toUnderscore("App7Test"))
console.log(toUnderscore(1))


console.log("----------------------------------------------")


function RoundThis(number) {
  const decimalPlaces = number.toString().split('.')[1];
  if (decimalPlaces === undefined) {
    return number;
  } else {
    const integerPart = number | 0;
    const fractionalPart = +("0." + decimalPlaces);
    if (fractionalPart >= 0.5) {
      return integerPart + 1;
    } else {
      return integerPart;
    }
  }
}

function CeilThis(number) {
  const integerPart = number | 0;
  if (number === integerPart) {
    return integerPart;
  } else {
    return integerPart + 1;
  }
  
};

function FloorThis(number) {
  number = number - 0.5;
  if (number < 0) {
    number = 0;
  }
  return Number(number.toFixed());
};

console.log(RoundThis(31.000000001))
console.log(CeilThis(0.4))
console.log(FloorThis(0.4))

console.log("----------------------------------------------")

function incrementString(strng) {
  // Extract the numeric part at the end of the string
  const numericPart = strng.match(/\d+$/);

  if (numericPart === null) {
    // If no numeric part is found, simply append "1" to the string
    return strng + "1";
  } else {
    // Increment the numeric part
    const number = parseInt(numericPart[0], 10);
    const incrementedNumber = number + 1;

    // Determine the number of leading zeros in the original numeric part
    const leadingZeros = numericPart[0].match(/^0+/);

    // Create the new numeric part with the preserved leading zeros
    const incrementedNumericPart = incrementedNumber.toString().padStart(numericPart[0].length, "0");

    // Replace the original numeric part with the incremented numeric part
    return strng.replace(/\d+$/, incrementedNumericPart);
  }
}
console.log(incrementString("foobar000"))
console.log(incrementString("foobar00999"))
console.log(incrementString("foo"))
console.log(incrementString("foobar001"))


console.log("----------------------------------------------")

function hexStringToRGB(hexValue) {
  // Remove the "#" symbol if present
  const hex = hexValue.replace("#", "");

  // Split the hex string into red, green, and blue components
  const redHex = hex.substring(0, 2);
  const greenHex = hex.substring(2, 4);
  const blueHex = hex.substring(4, 6);

  // Convert each hex component to decimal
  const red = parseInt(redHex, 16);
  const green = parseInt(greenHex, 16);
  const blue = parseInt(blueHex, 16);

  // Return the RGB values as an object or formatted string
  return { r: red, g: green, b: blue };
}

console.log(hexStringToRGB("#FF9933")); // Output: "000000"


console.log("----------------------------------------------")

function findUniq(arr) {
  const words = arr.map(element => {
    const word = element.toLowerCase().replace(/\s/g, '');
    return word;
  });

  console.log('Array Name: ' + arr);

  for (let i = 0; i < words.length; i++) {
    let isUnique = true;
    for (let j = 0; j < words.length; j++) {
      if (i !== j && compareLetters(words[i], words[j])) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) {
      console.log('---------Culprit: ' + arr[i]);
      return ''
    }
  }

  return '';
}

function compareLetters(word1, word2) {
  const set1 = new Set(word1);
  const set2 = new Set(word2);
  return set1.size === set2.size && [...set1].every(letter => set2.has(letter));
  // const set1 = new Set(word1); creates a Set object set1 from the characters of word1. The Set data structure stores unique values, 
  // so it automatically removes duplicate letters from word1.

  // const set2 = new Set(word2); creates a Set object set2 from the characters of word2, following the same logic as in step 1.
  // set1.size === set2.size compares the sizes of set1 and set2 using the strict equality operator (===). If the sizes are not equal, 
  // it means that the words have a different number of unique letters and are not considered equal.

  // [...set1].every(letter => set2.has(letter)) uses the spread operator (...) to convert set1 into an array and then 
  // applies the every method on that array. The every method checks if every letter in set1 is present in set2 by using the has method of 
  // set2. If any letter from set1 is not found in set2, the condition evaluates to false.

  // The compareLetters function returns the result of the comparison: set1.size === set2.size && [...set1].every(letter => set2.has(letter)). 
  // If both conditions are true, it means that the words have the same unique letters, regardless of the number of occurrences.
}


console.log(findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]));
console.log(findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]));

console.log("----------------------------------------------")

function workOnStrings(a, b) {
  const aArr = [...a];
  const bArr = [...b];

  const checkA = aArr.map(letter => {
    const occurrences = bArr.filter(l => l.toLowerCase() === letter.toLowerCase()).length;
    const isCapitalized = letter.toUpperCase() === letter;
    if ((occurrences % 2 === 0 && !isCapitalized) || (occurrences % 2 !== 0 && isCapitalized)) {
      return letter.toLowerCase();
    } else {
      return letter.toUpperCase();
    }
  });

  const checkB = bArr.map(letter => {
    const occurrences = aArr.filter(l => l.toLowerCase() === letter.toLowerCase()).length;
    const isCapitalized = letter.toUpperCase() === letter;
    if ((occurrences % 2 === 0 && !isCapitalized) || (occurrences % 2 !== 0 && isCapitalized)) {
      return letter.toLowerCase();
    } else {
      return letter.toUpperCase();
    }
  });

  return checkA.join("") + checkB.join("");
}

console.log(workOnStrings("abc","cde")); //, "abCCde"
console.log(workOnStrings("abcdeFgtrzw", "defgGgfhjkwqe")); //, "abcDeFGtrzWDEFGgGFhjkWqE"
console.log(workOnStrings("abcdeFg", "defgG")); //, "abcDEfgDEFGg"
console.log(workOnStrings("abab", "bababa")); //, "ABABbababa"

console.log("----------------------------------------------")

sortme = function( courses ){
  const sortFunc = courses.map(course => {
    const regex = /^([^\-]+)/;
    const nameMatch = course.match(regex);
    const numberRegex = /-(\d+)/;
    const numberMatch = course.match(numberRegex);
    return {
      name: nameMatch ? nameMatch[1] : '',
      year: numberMatch ? numberMatch[1] : '',
    };
  })

  sortFunc.sort((a, b) => {
    if (a.year === b.year) {
      return a.name.localeCompare(b.name);
    } else {
      return a.year - b.year;
    }
  });
  const toStrng = sortFunc.map(course => course.name.toString() + '-' + course.year.toString())
  return toStrng
}
console.log(sortme(["web-1305","site-1305","web-1304","site-1304"])) //, ["site-1304", "web-1304", "site-1305", "web-1305"]
console.log(sortme(['aeb-1305', 'site-1305', 'play-1215', 'web-1304', 'site-1304', 'beb-1305'])) //, ["play-1215", "site-1304", "web-1304", "aeb-1305", "beb-1305", "site-1305"]
console.log(sortme([]))
console.log(sortme(['aeb-1305', 'aeb-1305'])) //, ['aeb-1305', 'aeb-1305']

console.log("----------------------------------------------")
function makeLooper(str) {
  var index = 0;
  var length = str.length;

  function getNextChar() {
    if (index >= length) {
      index = 0;
    }
    var char = str.charAt(index);
    index++;
    
    return char;
  }

  return getNextChar;
}


var abc = makeLooper('abc');
console.log(abc()); // Output: 'a'
console.log(abc()); // Output: 'b'
console.log(abc()); // Output: 'c'
console.log(abc()); // Output: 'a' again
console.log("----------------------------------------------")

function order(words){
  const wordsArr = words.split(" ").filter(value => value !== '');
  return wordsArr.sort((a, b) => {
    const aNum = a.match(/\d+/); //Returns number from each element in wordsArr (each word)
    const bNum = b.match(/\d+/); //Returns next number from above.
    return aNum - bNum; //Calculates order of wordsArr based on number in each word.
  }).join(" ");
}


console.log(order("is2 Thi1s T4est 3a")) //"Thi1s is2 3a T4est"
console.log(order("4of Fo1r pe6ople g3ood th5e the2")) //"Fo1r the2 g3ood 4of th5e pe6ople"
console.log(order("")) //"empty input should return empty string" 




var uniqueInOrder=function(iterable){
  const iterableArr = Array.isArray(iterable) ? iterable : iterable.split("");
  const uniqueArr = [];
  for (let i = 0; i < iterableArr.length; i++) {
    if (iterableArr[i] !== iterableArr[i + 1]) {
      uniqueArr.push(iterableArr[i]);
    }
  }
  return uniqueArr;
}
console.log("----------------------------------------------")

console.log(uniqueInOrder('AAAABBBCCDAABBB')) // == ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder('ABBCcAD')    )     // == ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1,2,2,3,3]) )      // == [1,2,3]

console.log("----------------------------------------------")



async function sleep(millis) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, millis);
  });
}
 
 let t = Date.now()
 //sleep(100).then(() => console.log(Date.now() - t)) // 100

 console.log("----------------------------------------------")

 //Problem Link https://leetcode.com/problems/roman-to-integer/submissions/
 var romanToInt = function(s) {
    
    const romanNumerals = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    } 
    let sum = 0;
    const sArr = s.split("");
    for (let i = 0; i < sArr.length; i++) {


      if(romanNumerals[sArr[i]] < romanNumerals[sArr[i + 1]]){
        sum += romanNumerals[sArr[i + 1]] - romanNumerals[sArr[i]]
        i++
      } else {
        sum += romanNumerals[sArr[i]]
      }
     

    }
    return sum

    
 };

console.log(romanToInt("IV"))
console.log(romanToInt("MCMXCIV"))

console.log("----------------------------------------------")
//problem link : https://leetcode.com/problems/longest-common-prefix/

var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
      return "";
    }
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
      
      while (strs[i].indexOf(prefix) !== 0) {
        prefix = prefix.substring(0, prefix.length - 1);
        if (prefix === "") {
          return "";
        }
      }
    }

    return prefix;
};
//What this function basically does is cut away at the end of the first word, "flower" till it matches the beginning of the next word, "flow".
// Once no mismatches are found, it moves onto the next word. If all words match, it returns the prefix. If not, it returns an empty string.

console.log(longestCommonPrefix(["flower","flow","flight"])) 

console.log("----------------------------------------------")


//Problem Link https://leetcode.com/problems/valid-parentheses/
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
//  determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.


var isValid = function(s) {
  const sArr = s.split("");
  var letterNumber = /^[0-9a-zA-Z]+$/;
  var letterNumberAndBrackets = /^(?=.*[0-9a-zA-Z])(?=.*[\[\]{}()])[\[\]{}()0-9a-zA-Z ]+$/;
  if (letterNumber.test(s) || letterNumberAndBrackets.test(s)) {
    return false;
  }

  let bracketStack = [];
  const bracketPairs = {
    '[': ']',
    '{': '}',
    '(': ')',
  };

  for (let i = 0; i < sArr.length; i++) {
    if (bracketPairs[sArr[i]]) {
      bracketStack.push(sArr[i]);
    } else if (bracketPairs[bracketStack.pop()] !== sArr[i]) {
      return false;
    }
  }

  return bracketStack.length === 0;
};
console.log(isValid('[](){}'))
console.log(isValid('e()'))
console.log(isValid('uhhh'))

console.log("----------------------------------------------")

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, 
// which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, 
// the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is 
// before the five we subtract it making four. The same principle applies to the number nine, which is 
// written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given an integer, convert it to a roman numeral.

//problem link: https://leetcode.com/problems/integer-to-roman/

var intToRoman = function(num) {
  const romanNumerals = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000
  } 
  let i = Object.keys(romanNumerals).length - 1; 
  let roman = ""; 

  while (num > 0) {
    let result = Math.floor(num / romanNumerals[Object.keys(romanNumerals)[i]]);
    num = num % romanNumerals[Object.keys(romanNumerals)[i]];
    while (result--) {
      roman += Object.keys(romanNumerals)[i]; 
    }
    i--;
  }
  return roman;
};

console.log(intToRoman(1214));


// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

console.log("----------------------------------------------")

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]
//problem link: https://leetcode.com/problems/generate-parentheses/ 

var generateParenthesis = function(n) {
  let parenthesesArray = []
  let openParCount = 0;
  let closeParCount = 0;
  let currentString = "";

  function generateParenthesesHelper(openParCount, closeParCount, currentString) {
    if (openParCount === n && closeParCount === n) {
      parenthesesArray.push(currentString);
      return;
    }

    if (openParCount < n) {
      generateParenthesesHelper(openParCount + 1, closeParCount, currentString + "(");
    }

    if (closeParCount < openParCount) {
      generateParenthesesHelper(openParCount, closeParCount + 1, currentString + ")");
    }
  }
  generateParenthesesHelper(openParCount, closeParCount, currentString);
  return parenthesesArray;
};

console.log(generateParenthesis(3))
console.log(generateParenthesis(1))
console.log("----------------------------------------------")

// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

 

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// problem link: https://leetcode.com/problems/reverse-string/  

var reverseString = function(s) {
    return Array.from(s).reverse().join("");
};
console.log(reverseString("Wassup"))
console.log(reverseString("Mamacita"))
console.log("----------------------------------------------")



// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, 
// it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

//problem link: https://leetcode.com/problems/valid-palindrome/
var isPalindrome = function(s) {
    const modifiedWord = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversedWord = [...modifiedWord].reverse().join("");
    return modifiedWord === reversedWord;
};
console.log(isPalindrome("a racecar is a car"))
console.log(isPalindrome("A man, a plan, a canal: Panama"))

console.log("----------------------------------------------")

// You're given strings jewels representing the types of stones that are jewels, and stones representing
// the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

 

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0

//problem link: https://leetcode.com/problems/jewels-and-stones/

var numJewelsInStones = function(jewels, stones) {
    const jewlArr = jewels.split("");
    const numberOfJewls = [];
    for(let i=0; i < stones.length; i++){
      if(jewlArr.includes(stones[i])){
        numberOfJewls.push(stones[i])
      }
    }
    return numberOfJewls.length
};
console.log(numJewelsInStones("aA", "aAAbbbb"))

console.log("----------------------------------------------")

// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

 

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true
//problem link: https://leetcode.com/problems/ransom-note/
var canConstruct = function(ransomNote, magazine) {
  const ransomArray = ransomNote.split("");
  const magazineArray = magazine.split("");
  
  for (let i = 0; i < ransomArray.length; i++) {
      const indexInMagazine = magazineArray.indexOf(ransomArray[i]);
      if (indexInMagazine !== -1) {
          ransomArray.splice(i, 1);
          magazineArray.splice(indexInMagazine, 1);
          i--;
      } else {
          return false;
      }
  }
  return true;
};
console.log(canConstruct('aab', 'baa'))
console.log(canConstruct('aa', 'aab'))
console.log(canConstruct('a', 'b'))
console.log(canConstruct('aa', 'ab'))

console.log("----------------------------------------------")