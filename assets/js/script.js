// Assignment code here

//Declare variables
var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowers = "abcdefghijklmnopqrstuvwxyz";
var numeric = "0123456789";
var specials = " !\\\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

//Used for debugging
isDebugging = false;


//#region User Input

// Check for user input and validate it
var checkNumOfChars = function () {
  
  if(isDebugging) {
    return numOfChars =10;
    
  } else 
  {
      var numOfChars = window.prompt("How many characters long do you want the password (8-128)?");
      if (numOfChars < 8) {
        window.alert("Your password needs to be between 8-128 characters");
        checkNumOfChars();
      }
      else if (numOfChars > 128) {
        window.alert("Your password needs to be between 8-128 characters");
        checkNumOfChars();

      }
      else if (numOfChars >=8 && numOfChars <=128) {
        return numOfChars;
      }
      else 
      {
        window.alert("Your password needs to be between 8-128 characters");
        checkNumOfChars();
      }
    } //end debugging
    
}

var checkUseUppers = function () {
  var useUppers = window.confirm("Would you like to use UPPER CASE LETTERS? Please click Okay for yes, and cancel for no.");
    if (useUppers) {
      return true;
    }
    else {
      return false;
    }

}
var checkUseLowers = function () {
  var useLowers = window.confirm("Would you like to use LOWER CASE LETTERS? Please click Okay for yes, and cancel for no.");
  
    if (useLowers) {
      return true;
    }
    else {
      return false;
    }

}
var checkUseNumeric = function () {
  var useNumeric = window.confirm("Would you like to use Numerics? Please click Okay for yes, and cancel for no.");
  
    if (useNumeric) {
      return true ;
    }
    else {
      return  false;
    }

}
var checkUseSpecials = function () {
  var useSpecials = window.confirm("Would you like to use SPECIAL CHARACTERS? Please click Okay for yes, and cancel for no.");
  
    if (useSpecials) {
      return true;
    }
    else {
      return false;
    }
   
}
//#endregion
// Make one string of all characters chose by the user
var makePossibleCharStr = function(useUppers, useLowers, useNumeric, useSpecials) {

   if (useUppers == true) {
    possibleChars = uppers;
  }
  if (useLowers == true) {
    possibleChars = possibleChars + lowers;
  }
  if (useNumeric == true) {
    possibleChars = possibleChars + numeric;
  }
  if (useSpecials == true) {
    possibleChars = possibleChars + specials;
  }
  return possibleChars;

}


var generatePassword = function() {
//debugger;
  possibleChars = "";
  var numOfChars = checkNumOfChars();
  var useUppers = checkUseUppers();
  var useLowers = checkUseLowers();
  var useNumeric = checkUseNumeric();
  var useSpecials = checkUseSpecials();

  //debugger;
  //Make sure they selected at least one type of character, if not start over
  if ((useUppers === false) && (useLowers===false)  && (useNumeric===false) && (useSpecials===false)){
    window.alert("You need to select at least one type of character for a password please.");
    generatePassword();
  }

  
  // make a string of all possible characters the user requested
  possibleChars = makePossibleCharStr(useUppers, useLowers, useNumeric, useSpecials);
//debugger;
  //How many characters in the possibleChars string
  possibleCharsLen = possibleChars.length;
  tempPWord = "";
  // randomly pick the proper characters
  //outter loop for total number of characters
  for (let i = 0; i < (numOfChars-1); i++) {
    newCharLoc = Math.floor(Math.random()* possibleCharsLen);
    newChar = possibleChars.charAt(newCharLoc);
    tempPWord = tempPWord + newChar;
    
  }

  
  
   console.log("Length of possibleChars " + possibleCharsLen);
  string = tempPWord;
  return string;

 
  
  

}






// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //debugger;
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

