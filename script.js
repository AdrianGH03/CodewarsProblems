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

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
//problem link: https://leetcode.com/problems/container-with-most-water/

var maxArea = function(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;
    for(let i = 0; i < height.length; i++){
      const area = Math.min(height[left], height[right]) * (right - left);
      maxArea = Math.max(maxArea, area);
      if(height[left] < height[right]){
        left++;
      } else {
        right--;
      }
    }
    return maxArea;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))

console.log("----------------------------------------------")

var combinationSum = function(candidates, target) {
    const combinations = []
    const combination = []
    let index = 0;
    
    candidates.sort((a,b) => a-b );
    combinationSumHelper(target, index);
    function combinationSumHelper(target, index) {
        if (target === 0) {
            combinations.push([...combination]);
            return;
        }
        
        if (target < 0) {
            return;
        }
        
        for (let i = index; i < candidates.length; i++) {
            combination.push(candidates[i]);
            combinationSumHelper(target - candidates[i], i);
            combination.pop();
        }
    }
    return combinations;

};

console.log(combinationSum([2,3,6,7], 7))
console.log(combinationSum([2,3,5],8))

console.log("----------------------------------------------")
var getConcatenation = function(nums) {
  const arr1 = nums
  const arr2 = nums
  return [...arr1, ...arr2]
};  
console.log(getConcatenation([1,2,1]))

console.log("----------------------------------------------")

//problem link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/submissions/

var removeDuplicates = function(nums) {
  nums.sort((a, b) => a - b);

  if (nums.length === 0) {
      return 0;
  }

  let k = 1; 

  for (let i = 1; i < nums.length; i++) {
      if (nums[i] !== nums[i - 1]) {
          nums[k] = nums[i]; 
          k++;
      }
  }

  return k;
};
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
console.log(removeDuplicates([1,1,2]))

console.log("------------------------------------")

var countAsterisks = function(s) {
    let caArray = s.split("")
    let extractedTextPairs = [];
    let startIndex = 0;
    let filteredSArr = []
    
    for(let i = 0; i < caArray.length; i++){
      if(caArray[i] == '|'){
        extractedTextPairs.push(caArray[i]);
        startIndex = i;
        i++;
        while(caArray[i] !== '|'){
          extractedTextPairs.push(caArray[i]);
          i++;
        }
      } else if(caArray[i] != '|'){
        filteredSArr.push(caArray[i])
      }
    }
    
    return filteredSArr.filter(value => value === '*').length
};
console.log(countAsterisks("l|*e*et|c**o|*de|"))
console.log(countAsterisks("yo|uar|e**|b|e***au|tifu|l"))


console.log("------------------------------------")

//problem link: https://leetcode.com/problems/length-of-last-word/

var lengthOfLastWord = function(s) {
    const wordArr = s.split(" ").filter(value => value !== "");
    return wordArr[wordArr.length - 1].length
};

console.log(lengthOfLastWord("   fly me   to   the moon  "))
console.log(lengthOfLastWord("luffy is still joyboy"))

console.log('------------------------------------')
//problem link: https://leetcode.com/problems/return-length-of-arguments-passed/

var argumentsLength = function(...args) {
  return args.length;
};

console.log(argumentsLength(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

console.log('------------------------------------')

//problem link: https://leetcode.com/problems/rotate-image/

function reverseArrayInPlace(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // Swap elements at the left and right indices
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    // Move the pointers towards each other
    left++;
    right--;
  }
}

const myArray = [1, 2, 3, 4, 5];
reverseArrayInPlace(myArray);
console.log(myArray); // Output: [5, 4, 3, 2, 1]

console.log('------------------------------------')

//problem link: https://leetcode.com/problems/rotate-image/

var rotate = function(matrix) {
  const n = matrix.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }

  return matrix;
};

console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]))

console.log('------------------------------------')

//problem link: https://leetcode.com/problems/sort-colors/

var sortColors = function(nums) {
    let left = 0;
    let i = 0;
    let right = nums.length - 1;

    while (i <= right) {
      if (nums[i] === 0) {
          
          [nums[i], nums[left]] = [nums[left], nums[i]];
          left++;
          i++;
      } else if (nums[i] === 2) {
          
          [nums[i], nums[right]] = [nums[right], nums[i]];
          right--;
      } else {
          i++;
      }
    }
    
    return nums
};

//basically going to the center one by one, swaping values on both left and right as you go. 
// not exact one by one because sometimes its still stuck on same nums[i] or nums[right/left] value to use for comparison.

console.log(sortColors([2,0,2,1,1,0]))

console.log('------------------------------------')

//Problem link: https://leetcode.com/problems/palindrome-number/submissions/

var isPalindrome = function(x) {
    const xToString = x.toString();
    const xReversed = [...xToString].reverse().join("");
    if(xToString === xReversed){
      return true
    }
    return false

};

var isPalindromeNoString = function(x) {
  const xSnapshot = x;
  var revNumber = 0;
  while (x > 0) {
    revNumber = (revNumber * 10) + (x % 10);
    x = Math.floor(x / 10);
  }
  return xSnapshot === revNumber;
}

console.log(isPalindrome(121))
console.log(isPalindromeNoString(121))
console.log('------------------------------------')

//problem link: https://leetcode.com/problems/valid-palindrome-ii/

var sumOfUnique = function(nums) {
  let numCount = {}; 
  
  
  for (let num of nums) {
      if (numCount[num]) {
          numCount[num]++;
      } else {
          numCount[num] = 1;
      }
  }

  let sum = 0;

  for (let num in numCount) {
      if (numCount[num] === 1) {
          sum += parseInt(num);
      }
  }

  return sum;
};

console.log(sumOfUnique([1, 2,3,4,5])); 

console.log('------------------------------------')

//proble link: https://leetcode.com/problems/shuffle-the-array/submissions/

var shuffle = function(nums, n) {
  const firstHalf = nums.splice(0, n);
  const secondHalf = nums.splice(-n);
  const newArr = []
  for(let i = 0; i < n; i++){
    newArr.push(firstHalf[i])
    newArr.push(secondHalf[i])
  }
  return newArr
    
};

console.log(shuffle([2,5,1,3,4,7], 3))

console.log('------------------------------------')

var isStrictlyPalindromic = function(n) {

    for(let b = 2; b <= n - 2; b++){
      let quotient = n;
      const representation = [];
      
      
      while (quotient > 0) {
          const remainder = quotient % b;
          representation.unshift(remainder); 
          quotient = Math.floor(quotient / b);
      }

      if(!isPalindrome(representation)){
        return false;
      }
    }

    function isPalindrome(arr) {
      for(let i = 0; i < arr.length / 2; i++){
        if(arr[i] != arr[arr.length - 1 - i]){
          return false;
        }
        else {
          return true;
        }
      }
    }
};

console.log(isStrictlyPalindromic(9))

console.log('------------------------------------')

var defangIPaddr = function(address) {
  return [...address].map((value) => value === "." ? 
    value.replace(".", "[.]") : value
  ).join("");
};
console.log(defangIPaddr("255.100.50.0"))

console.log('------------------------------------')


//prob link : https://leetcode.com/problems/rearrange-array-elements-by-sign/

var minPartitions = function(n) {
  let minPart = 0;
  const nArr = n.toString().split("");
  for(let i = 0; i < nArr.length ; i++){
      const number = Number(nArr[i]);
      
      minPart = Math.max(minPart, number)
  }
  return minPart
};

console.log(minPartitions(32))

console.log('------------------------------------')


// prob link : 

var restoreString = function(s, indices) {
    let shuffledArr = []

    for (let i = 0; i < indices.length; i++) {
      const index = indices[i]; 
      shuffledArr[index] = s[i]; 
    }

    return shuffledArr.join("")
};

console.log(restoreString("codeleet", [4,5,6,7,0,2,1,3]))

console.log('-------------------')

// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.


// Example 1:

// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
// Example 2:

// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.
var longestPalindrome = function(s) {
  const charCount = new Map();

  
  for (const char of s) {
      charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  let length = 0;
  let hasOddCount = false;

  // Calculate the length of the longest palindrome
  for (const count of charCount.values()) {
      length += Math.floor(count / 2) * 2; 
      if (count % 2 === 1) {
          hasOddCount = true;
      }
  }

  if (hasOddCount) {
      length += 1;
  }

  return length;
};

console.log(longestPalindrome("abccccdd"))

console.log("-------------")

// Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

// [[0, 0, 1],
//  [0, 1, 2],
//  [2, 1, 0]]
// We want our function to return:

// -1 if the board is not yet finished AND no one has won yet (there are empty spots),
// 1 if "X" won,
// 2 if "O" won,
// 0 if it's a cat's game (i.e. a draw).
// You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.

function isSolved(board) {
  
  for(let i=0; i < 3; i++){
    if(board[i][0] == board[i][1] && board[i][1] == board[i][2]){
      if(board[i][0] !== 0){
        return board[i][0]
      } 
    } else if(board[0][i] == board[1][i] && board[1][i] == board[2][i]){
      if(board[0][i] !== 0){
        return board[0][i]
      } 
    }
  }

  if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
    if (board[0][0] !== 0) {
        return board[0][0]; 
    }
  }

  if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
      if (board[0][2] !== 0) {
          return board[0][2]; 
      }
  }

  
  for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
          if (board[i][j] === 0) {
              return -1; 
          }
      }
  }

  return 0; 
  
}

console.log(isSolved([[1,1,2],
                     [2,2,0],
                     [2,0,1]]
  ))


console.log("------------------------")

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]


  nums = [3,2,4]
  target = 6
  
  //Think of it like this, for every number in the array there will be another number that will make it reach target once added
  // x + y = target now changes to y = target - x
  //Tutorial how brute force O(n^2), a while loop, becomes O(n) with a hashmap
  // https://www.youtube.com/watch?time_continue=290&v=luicuNOBTAI&embeds_referring_euri=https%3A%2F%2Fleetcode.com%2F&source_ve_path=MTM5MTE3LDI4NjYzLDEzNzcyMSwxMzkxMTcsMTM5MTE3LDEzOTExNywyMzg1MQ&feature=emb_title

  var twoSum = function(nums, target) {
    
    const pairs = {}; //Hashmap
    for(i = 0; i < nums.length; i++){
      var difference = target - nums[i]
      if (difference in pairs){
        return [pairs[difference], i]
      } else {
        pairs[nums[i]] = i
      }
      
    }
  };

  console.log(twoSum(nums, target))

console.log("------------------------")

var removeElement = function(nums, val) {
    let count = 0
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == val){
            nums.splice(i, 1)
            i--
        } else {
          count++;
        }
        
    }

    return nums
};

console.log(removeElement([3,2,2,3], 3)) //Output: 2, nums = [2,2]
console.log(removeElement([0,1,2,2,3,0,4,2], 2)) //Output: 5, nums = [0,1,3,0,4]

console.log('------------------------------')

var isValidSudoku = function(board) {
    //Row
    for(let i = 0; i < board.length; i++){
      let newArr = board[i].filter(index => index != ".")
      if(new Set(newArr).size != newArr.length){
        return false
      } 
    }

    //Column
    for(let column = 0; column < board.length; column++){
      let columns = new Set()
      for(let j = 0; j < board.length; j++){
        if(!columns.has(board[j][column])){
          columns.add(board[j][column])
        } else if (board[j][column] == ".") {
          continue
        } else {
          return false
        }
      }
    }

    //Box
    const boxes = {}
    for(let row = 0; row < board.length; row++){
      for(let column = 0; column < board.length; column++){
        
        let boxKey = `${Math.floor(row/3)}-${Math.floor(column/3)}`;
        if (!boxes[boxKey]) {
          boxes[boxKey] = new Set(); 
        } 
        if(board[row][column] == "."){
          continue
        } else if (boxes[boxKey].has(board[row][column])){
          return false
        }
        boxes[boxKey].add(board[row][column])

      }
    }
    return true
        

};

console.log(isValidSudoku([["5","3",".",".","7",".",".",".","."],
                           ["6",".",".","1","9","5",".",".","."],
                           ["1","9","8",".",".",".",".","6","."],
                           ["8",".",".",".","6",".",".",".","3"],
                           ["4",".",".","8",".","3",".",".","1"],
                           ["7",".",".",".","2",".",".",".","6"],
                           [".","6",".",".",".",".","2","8","5"],
                           [".",".",".","4","1","9",".",".","."],
                           [".",".",".",".","8",".",".","7","9"]]))

console.log('------------------------------')

var threeSum = function(nums) {
    let triplets = []
    let sortNums = nums.sort((a,b) => a-b)
    //[-1,0,1,2,-1,-4]
    //[-4,-1,-1,0,1,2]

    for(let i = 0; i < sortNums.length; i++){
      let right = sortNums.length - 1
      let left = i+1
      let sum = 0;

      if(sortNums[i] == sortNums[i-1] && i > 0){
        continue
      }

      while(right > left){
        sum = sortNums[i] + sortNums[left] + sortNums[right]
        if(sum > 0){
          right--
        } else if (sum < 0){
          left++
        } else {
          triplets.push([sortNums[i], sortNums[left], sortNums[right]])
          right--
          left++
          while(left < right && sortNums[left] == sortNums[left-1]){
            left++
          }
          while(left < right && sortNums[right] == sortNums[right+1]){
            right--
          }
        }
      }


    }
    return triplets

    // for(let i = 0; i < nums.length; i++){
    //   let sum;

    //   for(let j = 1; j < nums.length; j++){
    //     if(i == j){
    //       continue
    //     }
    //     sum = nums[i] + nums[j]
    //     for(let k = 2; k < nums.length; k++){
    //       if((i == k) || (j == k)){
    //         continue
    //       }
    //       sum = nums[i] + nums[j] + nums[k]
    //       if(sum == 0){
    //         triplets.push([nums[i], nums[j], nums[k]].sort((a,b) => a-b))
    //         console.log([nums[i], nums[j], nums[k]].sort((a,b) => a-b))
    //       }
    //     }
    //   }
    // }

    // return Array.from(new Set(triplets.map(triplet => triplet.join(',')))).map(str => str.split(',').map(Number))
};

console.log(threeSum([-1,0,1,2,-1,-4]))
console.log('------------------------------')

var threeSumClosest = function(nums,target) {
    let sortNums = nums.sort((a,b) => a-b)
    let closestNumber = sortNums[0] + sortNums[1] + sortNums[2]

    for(let i = 0; i < sortNums.length; i++){
      let right = sortNums.length - 1
      let left = i+1
      let sum = 0;

      while(right > left){
        sum = sortNums[i] + sortNums[left] + sortNums[right]
        if (Math.abs(sum - target) < Math.abs(closestNumber - target)){
          closestNumber = sum
        } 

        if(sum > target){
          right--
        } else if (sum < target){
          left++
        } else {
          right--
          left++
        }
      }


    }
    return closestNumber
}

console.log(threeSumClosest([-1,2,1,-4], 1))
console.log(threeSumClosest([2,3,8,9,10], 16))

console.log('------------------------------')

var fourSum = function(nums, target) {
    let sortNums = nums.sort((a,b)=>a-b)
    let fourDistinct = []
    //[2,2,2,2,2]

    for(let i = 0; i < sortNums.length; i++){
      
      let sum;
      if(sortNums[i] == sortNums[i-1]){
        continue
      }

      for(let j = i+1; j < sortNums.length; j++){
        let left = j+1
        let right = sortNums.length - 1
        if(sortNums[j] == sortNums[j-1] && j > i + 1){
          continue
        }

        while(left < right){
          sum = sortNums[i] + sortNums[left] + sortNums[j] + sortNums[right]
          if(sum > target){
            right--
          } else if (sum < target){
            left++
          } else {
            fourDistinct.push([sortNums[i], sortNums[left], sortNums[j], sortNums[right]])
            right--
            left++
            
            while(left < right && sortNums[left] == sortNums[left-1]){
              left++
            }
            while(left < right && sortNums[right] == sortNums[right+1]){
              right--
            }
            
          }
        }
      }
    }

    return fourDistinct
};

console.log(fourSum([2,2,2,2,2], 8)) //[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
console.log('------------------------------')

var searchInsert = function(nums, target) {
    if(nums.includes(target)){
        return nums.indexOf(target)
    } else {
        nums.push(target)
    }
    let newArr = nums.sort((a,b) => a-b)
    return newArr.indexOf(target)
};

console.log(searchInsert([1,3,5,6],7))
console.log('------------------------------')

var nextPermutation = function(nums) {
    let i = nums.length - 2;
    // Find the first decreasing element from the end
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }
    if (i >= 0) {
        // Find the next bigger element to swap with
        let j = nums.length - 1;
        while (nums[j] <= nums[i]) {
            j--;
        }
        // Swap
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    // Reverse the rest
    let left = i + 1, right = nums.length - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
};

console.log(nextPermutation([1,2,3]))
console.log(nextPermutation([3,2,1]))
console.log('------------------------------')

const arrr1 = [1,2,3]
const arrr2 = [4,5,6]
console.log([...arrr1,...arrr2])

function filterJobAds(jobAds, requiredKeywords) {
  let filter = []
  for(let i = 0; i < jobAds.length; i++){
    if(requiredKeywords.every(keyword => jobAds[i].keywords.includes(keyword))){
      filter.push(jobAds[i])
    }
  }
  
  return filter
}

const jobAds = [
  { title: "Frontend Dev", keywords: ["React", "JavaScript"] },
  { title: "Backend Dev", keywords: ["Java", "Spring Boot"] },
  { title: "Full Stack", keywords: ["React", "Node.js", "MongoDB"] }
];

let testt = filterJobAds(jobAds, ["React", "JavaScript"])
console.log(testt)
console.log('------------------------------')

var plusOne = function(digits) {
    for(let i = digits.length - 1; i >= 0; i--){
      let sum = digits[i]+1
      if(sum == 10){
        digits[i] = 0
      } else {
        digits[i] += 1
        return digits
      }
    }
    
    digits.unshift(1)
    return digits
};

console.log(plusOne([9,9,9,9,9]))
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,0,0,0]))
                    //[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,0,0,0]
console.log('------------------------------')

// var merge = function(nums1, m, nums2, n) {
//     let firstValue = 0
//     for(let i = 0; i < m+n; i++){
//       if(i >= m){
//         nums1[i] = nums2[firstValue]
//         firstValue++
//       } 
//     }
  
//     return nums1.sort((a,b) => a-b)
// };

var merge = function(nums1, m, nums2, n) {
    let i = m - 1;         // last index of nums1's initial part
    let j = n - 1;         // last index of nums2
    let k = m + n - 1;     // last index of nums1 (total length)

    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
    return nums1;
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6],3))
console.log(merge([1], 1, [],0))
console.log(merge([0], 0, [1],1))
console.log('------------------------------')

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

var sortedArrayToBST = function(nums) {
    //find root nums.length - 1 / 2
    // find recursive root of left by root index / 2
    //find recursive root of left by slicing start of array by root, find right by slicing root by end of array
    if(nums.length == 0){
      return null
    }
    let root = Math.floor((nums.length)/ 2)
    let mid = new TreeNode(nums[root])
    mid.left = sortedArrayToBST(nums.slice(0, root))
    mid.right = sortedArrayToBST(nums.slice(root+1))

    return mid

  

  
};

console.log(sortedArrayToBST([-10,-3,0,5,9]))
console.log('------------------------------')

var generate = function(numRows) {
    //size of array need to grow to reach numRows
    //if size of previous array is >= 2, start at index 0 and add two numbers to put in next array, 
    //     increase index by 1 to get next 2 numbers if maxRowSize hasn't been reached
    //add a 1 to the end if max row size has been reached, then begin next row until numRows is reached.
    let arr = [[1]]
    
    while(arr.length < numRows){
      for(let i = 0; i < numRows-1; i++){
        let subArr = [1]
        
        for (let j = 0; j < arr[i].length - 1; j++) {
            let sum = arr[i][j] + arr[i][j + 1];
            subArr.push(sum);
        }
        subArr.push(1);
        arr.push(subArr)
      }
    }

    return arr

};

console.log(generate(5))
console.log('------------------------------')
function reverseArray(a) {
    // Write your code here
    let left = 0
    let right = a.length - 1
    while (left < right) {
        let temp = a[left];
        a[left] = a[right];
        a[right] = temp;
        left++;
        right--;
    }
    return a
}
console.log(reverseArray([1,2,3,4,5])) //2,1 to 2,3,1 to 2,3,4,1 to 2,3,4,5,1
console.log('------------------------------')

function hourglassSum(arr) {
    // Write your code here
    //for every array, goes through pairs of 3
    //top row = currentArr 3-element pair
    //middle number intially set to currentArr[i+1][position], position initially set to 1 and add 1 each time you move. i.e 1, 2, 3, 4 on each loop
    //bottom row = currentArr[i+2] 3-element pair
    //need something to track array and then something to track position in that array, so two for loops
    // we also move 3 times vertically and horizontally
    let maxSum = -Infinity
    
    for(let i = 0; i < arr.length - 2; i++){ //increase current array in arr
      for(let j = 0; j < 4; j++){ //increase position in the current array in arr
        let pos = j+1
        let topNum = arr[i].slice(j, j+3)
        let middleNum = arr[i+1][pos]
        let botNum = arr[i+2].slice(j, j+3)
        
        let sumArr = []
        sumArr = [...topNum, middleNum, ...botNum]
        let sum = sumArr.reduce((a, b) => a + b, 0);
        if(sum > maxSum){
          maxSum = sum;
        }
        
      }
    }

    return maxSum
}
const arrey = [
  [-9, -9, -9,  1, 1, 1],
  [ 0, -9,  0,  4, 3, 2],
  [-9, -9, -9,  1, 2, 3],
  [ 0,  0,  8,  6, 6, 0],
  [ 0,  0,  0, -2, 0, 0],
  [ 0,  0,  1,  2, 4, 0]
];
console.log(hourglassSum(arrey))
console.log('------------------------------')
var removeDuplicatess = function(nums) {
    nums.sort((a,b) => a-b)
    if (nums.length === 0) {
      return 0;
    }
    let k = 1
    for(let i = 1; i < nums.length; i++){
      if(nums[i] != nums[i - 1]){
        nums[k] == nums[i]
        k++
      }
    }


return k;
};

console.log(removeDuplicatess([1,1,2]))
console.log('------------------------------')

var twoSum = function(nums, target) {
    // for each number in nums
    //     check if number plus any other number equals target
    //         check left of number, left is i-1, increment.
    //         check right of number, right is end of array, decrement.
    let hashMap = {}
    for(let i = 0; i < nums.length; i++){
      let diff = target - nums[i]
      if(hashMap.hasOwnProperty(diff)){
        return [nums.indexOf(diff), i]
      } else {
        hashMap[nums[i]] = i
      }
    }

    
};

console.log(twoSum([2,7,5,15,3], 9))
console.log(twoSum([3,2,4], 6))
console.log('------------------------------')


var removeElement = function(nums, val) {
    let count = 0
    for(let i = 0; i < nums.length; i++){
        if(nums[i] != val){
            nums[count] = nums[i]
            count++
        } 
        
    }

    return count
};


console.log(removeElement([1,4,3,4,5,6,4], 4))
console.log('------------------------------')

var moveZeroes = function(nums) {
    let position = 0
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            nums[position] = nums[i]
            position++
        }
    }

    for(let i = position; i < nums.length; i++){
        nums[i] = 0
    }

    return nums
};


console.log(moveZeroes([0,1,0,3,12]))
console.log('------------------------------')

var canConstruct = function(ransomNote, magazine) {
    // let aCount = {}
    // for(let i = 0; i < magazine.length; i++){
    //   if(aCount.hasOwnProperty(magazine[i])){
    //     aCount[magazine[i]] += 1
    //   } else {
    //     aCount[magazine[i]] = 1
    //   }
    // }

    // let count = 0
    // ransomNote.split("").forEach((letter) => {
    //   if(aCount.hasOwnProperty(letter) && aCount[letter] > 0){
    //     count++
    //     aCount[letter]-- 
    //   }
    // })

    // return count == ransomNote.length

    let aCount = {};
    for (let i = 0; i < magazine.length; i++) {
        if (aCount.hasOwnProperty(magazine[i])) {
            aCount[magazine[i]] += 1;
        } else {
            aCount[magazine[i]] = 1;
        }
    }

    for (let i = 0; i < ransomNote.length; i++) {
        let letter = ransomNote[i];
        if (!aCount[letter]) {
            return false;
        }
        aCount[letter]--;
    }

    return true;
};

console.log(canConstruct("abbcag", "abbcaggg"))

console.log('------------------------------')
var firstUniqChar = function(s) {
    let sMap = {}

    for(let i = 0; i < s.length; i++){
        if(sMap.hasOwnProperty(s[i])){
          sMap[s[i]] += 1
        } else {
          sMap[s[i]] = 1
        }
    }

    for(let i = 0; i < s.length; i++){
        if(sMap[s[i]] == 1){
          return i
        } 
    }

    return -1
};

console.log(firstUniqChar('aabb'))
console.log('------------------------------')

var isAnagram = function(s, t) {
    if(s.length != t.length){
      return false
    }
    let sObj = {}
    for(let i = 0; i < s.length; i++){
        if(!sObj.hasOwnProperty(s[i])){
            sObj[s[i]] = 1
        } else {
            sObj[s[i]] += 1
        }
    }

    for(let i = 0; i < t.length; i++){
        if(sObj.hasOwnProperty(t[i]) && sObj[t[i]] > 0){
            sObj[t[i]]--
        } else {
            return false
        }
    }

    return true
};

console.log(isAnagram('ab', 'a'))
console.log('------------------------------')

var isValid = function(s) {
    let mp = {
        "[": "]",
        "(": ")",
        "{": "}",
    }
    let stack = []

    for(let i = 0; i < s.length; i++){
        
        if(mp.hasOwnProperty(s[i])){
            stack.push(s[i])
        } else if (mp[stack[stack.length - 1]] == s[i]){
            stack.pop()
        } else {
          return false
        }
        
    }

    return stack.length > 0 ? false : true
};

console.log(isValid('('))
console.log('------------------------------')

// var isPalindrome = function(s) {
//     //clean the string
//     //reverse the string
//     //is the string reversed the same as the string
//     // true = yes , false = no

//     s = s.toLowerCase().replace(/[^a-z0-9]/gi, "")
//     let sAlph = []
//     for(let i = 0; i < s.length; i++){
//       if(!isNaN(s[i]) || s[i].match(/[a-z]/i)){
//         sAlph.push(s[i])
//       }
//     }

//     let revArr = []
//     for(let i = sAlph.length-1; i >= 0; i--){
//        revArr.push(sAlph[i])
      
//     }

//     return revArr.toString() == sAlph.toString() ? true : false

    
// };
var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/gi, "");
    let rev = s.split("").reverse().join("");
    return s === rev;
};

console.log(isPalindrome('racecar'))
console.log('------------------------------')

var strStr = function(haystack, needle) {
    //two for loops, start building at each letter
    //second for loop checks letter and starts building, comparing against needle for in order
    //if not in order, break early so next letter (i) starts building
    //if less than n length of needle number of elements exists, just return -1
    for(let i = 0; i < haystack.length; i++){
        let completeWordLength = needle.length
        let subArr = haystack.substring(i, i+completeWordLength)
        if(subArr == needle){
          return i
        }
    }

    return -1
};

console.log(strStr('hello', 'll'))
console.log('------------------------------')
var romanToInt = function(s) {
    let numbers = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
        'IX': 9,
        'IV': 4,
        'XC': 90,
        'XL': 40,
        'CD': 400,
        'CM': 900,
    }

    let sum = 0
    for(let i = 0; i < s.length; i++){
        let number = numbers[s[i]]
        if(numbers.hasOwnProperty(s[i].concat(s[i+1]))){
          number = numbers[s[i].concat(s[i+1])]
          i++
        }
        sum += number
    }

    return sum
};

console.log(romanToInt('MDCCCLXXXIV'))

// Definition for singly-linked list node:
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}


var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(-1);
    let current = dummy;

    while(list1 && list2){
      if(list1.val < list2.val){
        current.next = list1
        list1 = list1.next
      } else {
        current.next = list2
        list2 = list2.next
      }
      current = current.next
      
    }


    current.next = list1 ? list1 : list2;

    return dummy.next;
};

console.log(mergeTwoLists([1,2,3],[4,3,1]))
console.log('----------------------------')

function plusMinus(arr) {
    // Write your code here
    let pos = 0;
    let neg = 0;
    let zero = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            pos++
        } else if (arr[i] < 0){
            neg++
        } else {
            zero++
        }
    }
    
    return console.log(
        (pos/arr.length).toFixed(6)+"\n"+ 
        (neg/arr.length).toFixed(6)+"\n"+ 
        (zero/arr.length).toFixed(6)+"\n" 
    )

}

plusMinus([-4, 3, -9, 0, 4, 1])


function miniMaxSum(arr) {
    arr.sort((a, b) => a - b);
    let min = 0;
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i < 4){
           min += arr[i];
        }
        if (i > 0) {
          max += arr[i];
        }
    }
    
    return min + " " + max;
}

console.log(miniMaxSum([1,2,3,4,5])) //1,2,3,4,5


function timeConversion(s) {
    // Write your code here
    //check the end for am or pm
    // pm = add 12, am, just add the hour 0+original hour, if no og hr , its 0 i.e. 12 am
    let timeOfDay = s.slice(s.length-2)
    let areaOfTime = parseInt(s.slice(0, 2));
    
    if(timeOfDay == "PM" && areaOfTime != 12){
      areaOfTime += 12
    } else if (timeOfDay == 'AM' && areaOfTime == 12){
      areaOfTime = 0
    }

    return areaOfTime.toString().padStart(2, '0') + s.slice(2, -2);
    
}


console.log(timeConversion('05:00:00PM'))
console.log("---------------------------------------")

var productExceptSelf = function(nums) { //Study this                                                           !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    let length = nums.length
    let left = Array(length)
    let right = Array(length)

    left[0] = 1
    for(let i = 1; i < length; i++){
        left[i] = nums[i-1] * left[i-1]
    }

    right[length-1] = 1;
    for(let i=length-2; i >= 0; i--){
        right[i] = nums[i+1] * right[i+1]
    }

    let answer = Array(length)
    for(let i=0; i < length; i++){
        answer[i] = left[i] * right[i]
        
    }

    return answer;
    
};

console.log(productExceptSelf([-1,1,0,-3,3]))
console.log("---------------------------------------")


//Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.
function encode(strs) {
    if(strs.length == 0){
        return "<empty>"
    }
    return strs.join('<|>');
}

/**
 * @param {string} str
 * @returns {string[]}
 */
function decode(str) {
    if(str === "<empty>"){
        return [];
    }
    return str.split('<|>');
}
// let array = [""];
// let array2 = []
// console.log(encode(array));
// console.log(decode(encode(array)));
// console.log(encode(array2));
// console.log(decode(encode(array2)));
console.log("---------------------------------------")


function twoSum(nums, target) {
    const numSet = {};
    for (let index = 0; index < nums.length; index++) {
        const num = nums[index];
        const diff = target - num;
        if (diff in numSet) {
            return [index, numSet[diff]];
        }
        numSet[num] = index;
    }
}

console.log(twoSum([1,3,4,5,2,1], 7))
console.log("---------------------------------------")

// Q How many numbers are less than the current number solutions
function smallerNumbersThanCurrent(nums) {
    const numless = [];
    const temp = [...nums].sort((a, b) => a - b);
    const d = {};
    for (let index = 0; index < temp.length; index++) {
        const num = temp[index];
        if (!(num in d)) {
            d[num] = index;
        }
    }
    for (const num of nums) {
        numless.push(d[num]);
    }
    return numless;
}

console.log(smallerNumbersThanCurrent([1,5,3,4,2,1]))

console.log("---------------------------------------")
// Q Minimum time visiting all points in a 2d graph solutions
function minTimeToVisitAllPoints(points) {
    let seconds = 0;
    for (let i = 0; i < points.length - 1; i++) {
        const xi_diff = points[i + 1][0] - points[i][0];
        const xy_diff = points[i + 1][1] - points[i][1];
        const x = Math.abs(xi_diff);
        const y = Math.abs(xy_diff);
        seconds += Math.max(x, y);
    }
    return seconds;
}
console.log(minTimeToVisitAllPoints([1,1], [3,-2]))
console.log("---------------------------------------")

function isValidd(s) {
        if(s.length == 1){
          return false
        }
        let stack = []
        let pairs = {
            "(": ")",
            "[": "]",
            "{": "}"
        }
        for(let i = 0; i < s.length; i++){
            
            if(pairs.hasOwnProperty(s[i])){
                stack.push(s[i])
            } else if (pairs[stack[stack.length - 1]] == s[i]){
                stack.pop()
            } else {
              return false
            }
        }

        return stack.length == 0 ? true : false
    }

console.log(isValidd("{{"))