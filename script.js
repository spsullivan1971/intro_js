//////////////////////////////////////////////////
//////////////////////////////////////////////////
//     ___  ___________  _______________  ___   //
//    / _ \/ __/ __/ _ |/ ___/_  __/ __ \/ _ \  //
//   / , _/ _// _// __ / /__  / / / /_/ / , _/  //
//  /_/|_/___/_/ /_/ |_\___/ /_/  \____/_/|_|   //
//                                              //
// The below assignment has 10 questions with 1 //
// bonus question. Each question has a specific //
// area for you to put your answer. That is the //
// only part that should be changed. Do not     //
// edit the code in the question. Your answers  //
// should be valid javascript and any comments  //
// should be commented out. When finished this  //
// entire document should be valid javascript.  //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 1. --------------------------------------------

// This is a named function, convert it
// to a variable containing an anonymous
// function

function doSomethingCool() {
  console.log("Something Cool!");
}

// Put your answer below -------------------------
var doSomethingCool = function(){
  console.log("Something Cool!");
}

// -----------------------------------------------


// 2. --------------------------------------------

// Here we are using setTimeout to call a function
// after 2 seconds. Refactor to use an anonymous
// function

function sayHi() {
  alert("Hello, World!");
}

setTimeout(sayHi, 2000);

// Put your answer below -------------------------
var sayHi = function(){
  alert("Hello, World!");
}

setTimeout(sayHi, 2000);
// -----------------------------------------------

// 3. --------------------------------------------

// The code below will log the letter twice. What
// is the order that will be logged?

// [a]: x then y then z
// [b]: y then z
// [c]: z then y
// [d]: x then z

// Please explain your answer.
[c]: z then y
the letter Y is set to delay which allows the letter z to log first


// Put your answer below -------------------------
var letter = "x";

setTimeout(function(){
  letter = "y";
  console.log("The letter is", letter);
}, 1);

letter = "z";
console.log("The letter is", letter);

// -----------------------------------------------


// 4. --------------------------------------------

// The function below reverses a string. The body
// of the function is 5 lines of code. Refactor
// this function to do the same thing with 1 line

var reverseStr = function(str) {
  var arr;
  arr = str.split("");
  arr = arr.reverse();
  str = arr.join("");
  return str;
};

// Put your answer below -------------------------
var reverseStr = function(str){
  return str = str.split("").reverse().join("");
}
// -----------------------------------------------

// 5. --------------------------------------------

// The function below takes the spanish word for
// the colors red, white, blue, green, and black
// and returns the hex code for that color.
// Refactor this function to use an object
// instead of an if/else statement.

var spanishColor = function(colorName) {
  if (colorName.toLowerCase() === "rojo") {
    return "#ff0000";
  }
  else if (colorName.toLowerCase() === "blanco") {
    return "#ffffff";
  }
  else if (colorName.toLowerCase() === "azul") {
    return "#0000ff";
  }
  else if (colorName.toLowerCase() === "verde") {
    return "#00ff00";
  }
  else if (colorName.toLowerCase() === "negro") {
    return "#000000";
  }
};

// Put your answer below -------------------------
var spanishColor = function(colorName) {
  var lowerColor = colorName.toLowerCase();
  var colorObject = {"rojo": "#ff0000", "blanco":"ffffff", "azul":"#0000ff", "verde":"#00ff00", "negro":"#000000"};
  return colorObject[lowerColor];
}

// -----------------------------------------------


// 6. --------------------------------------------

// Below is a variable *declaration* and an
// *assignment* in a single line of code.
// Break it up so that the declaration and
// assignment are happening on 2 seperate lines.

var foo = "bar";

// Put your answer below -------------------------

var foo;
foo = "bar";

// -----------------------------------------------


// 7. --------------------------------------------

// The function `callTenTimes` takes an argument
// that is another function and will call that
// function 10 times. Refactor this into another
// function called `callNtimes` that allows you
// to specify a number of times to call the given
// function.

var callTenTimes = function(callback) {
  var range = _.range(10);
  _.each(range, callback);
};

// Put your answer below -------------------------
var callNtimes = function(n, callback){
  var range = _.range(n);
  _.each(range, callback);
};


// -----------------------------------------------

// 8. --------------------------------------------

// Below is the beginning code for an awesome game
// but already suffers a vulnerability that allows
// the savvy user to open the console and adjust
// the score to whatever they want. Refactor the
// code to protect from this.

// HINT: "global scope"

var score = 0;

var increaseScore = function() {
  score++;
};

var decreaseScore = function() {
  score--;
};

// Put your answer below -------------------------
var totalScore = function(){
  var score = 0;

  var increaseScore = function(score){
    score++;
  };

  var decreaseScore = function(score){
    score--;
  };
  return score;
};

// -----------------------------------------------


// 9. --------------------------------------------

// The below function does not work. The variable
// twoPlusTwo gets set to `undefined`. Refactor
// the function to make it work.

var addNumbers = function(numberA, numberB) {
  console.log(numberA + numberB);
};

var twoPlusTwo = addNumbers(2,2);

// Put your answer below -------------------------
var addNumbers = function(numberA, numberB) {
  return (numberA + numberB);
};

var twoPlusTwo = addNumbers(2,2);

// -----------------------------------------------

// 10. -------------------------------------------

// Below is a snippet of code taken from a racing
// game (not really!) It allows you to accelerate
// the speed by a given amount. The problem is if
// you call the function without specifying an
// amount, it inadvertently sets the speed to NaN
// First write a comment that explains why it was
// setting speed to NaN when no parameter is given
// Then refactor the function to have a default
// amount of 1 if no param is given.

var speed = 0;

var accelerate = function(amount) {
  speed += amount;
};

// Put your answer below -------------------------
There is nothing passed to speed.

var speed = 0;

var accelerate = function(amount) {
  if(amount === undefined || amount === NaN){
    return speed = 1;
  }else{
   return speed += amount;
  }
};

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//            ___  ____  _  ____  ______        //
//           / _ )/ __ \/ |/ / / / / __/        //
//          / _  / /_/ /    / /_/ /\ \          //
//         /____/\____/_/|_/\____/___/          //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// The function below allows you to call another
// function at a later time. It takes 2 params, an
// amount of miliseconds and a function. It will
// call the function that many miliseconds later.
// Refactor it so that is has a default timeout.

// This is more advanced than the default param on
// the accelerate function. This is because there
// is another parameter to consider.

// When setting the timeout, the function needs to
// work like this:

//     callLater(1000, function(){
//       ...
//     });

// When using the default timeout, the function
// needs to work like this:

//     callLater(function(){
//       ...
//     });

var callLater = function(timeout, callback) {
  setTimeout(callback, timeout);
};

// Put your answer below -------------------------
var callLater = function(timeout, callback) {
    if(callback === undefined){
      callback = timeout;
      timeout = 10000;
    }
    setTimeout(callback, timeout);
};

// -----------------------------------------------

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(a, b){
    if(a > b){
      return a;
    }else {
      return b;
    }
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a, b, c){

    if (a > b && a > c){
      return a;
    }else if(b > a && b > c){
      return b;
    }else if(c > a && c > b){
      return c;
    }else if(a === b && a > c){
      return a;
    }else if(a === c && a > b){
      return a;
    }else{
      return b;
    }
};

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    if(['a','e','i','o','u'].indexOf(char) !== -1){
      return true;
    }else{
      return false;
    }
};

// ---------------------
// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    var rovar = phrase.toLowerCase().split("");
    var newArray = [];
    var nonConsonants = ['a','e','i','o','u',' '];

    for(var i = 0; i < rovar.length; i++){
      if(nonConsonants.indexOf(rovar[i]) === -1){
            newArray.push(rovar[i].concat('o').concat(rovar[i]));
          }else{
            newArray.push(rovar[i]);
          }
      }
      return newArray.join("");
    };

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(array){
    var sum = 0;
    for(var i = 0; i < array.length; i++){
      sum += array[i];
    }
    return sum;
};

function multiply(array){
    var multi = 1;
    for(var i = 0; i < array.length; i++){
      multi *= array[i];
    }
    return multi;
};

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(phrase){
    var finalString = "";
    for(var i = phrase.length - 1; i >= 0; i--){
      finalString += phrase[i];
    }
    return finalString;
};

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    var array = words.split(" ")
    var indexer = 0;
    for(var i = 0; i < array.length; i++){
      if(array[i].length > array[indexer].length){
        indexer = i;
      }else{

      }
    }
    return array[indexer];
};

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    var resultArray =[];
    for(var j = 0; j < words.length; j++){
      if(words[j].length > i){
        resultArray.push(words[j]);
      }else{

      }
    }
    return resultArray;
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    var resultObject = {};
    var resultArray = string.toLowerCase().split("");

    for(var i = 0; i < resultArray.length; i++){
      if(resultObject[resultArray[i]]){
        resultObject[resultArray[i]]++;
      }else{
        resultObject[resultArray[i]] = 1;
      }
    }

    return resultObject;
};
