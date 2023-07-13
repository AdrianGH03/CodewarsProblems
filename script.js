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
  return sentence.trim();
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


// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

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