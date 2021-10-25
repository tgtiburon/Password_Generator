// Assignment code here

//Declare variables
var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowers = "abcdefghijklmnopqrstuvwxyz";
var numeric = "0123456789";
var specials = " !\\\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";




//#region User Input

// Check for user input and validate it
var checkNumOfChars = function () {
  
  let validNumber = false;
  
  while (validNumber === false) {
      var numOfChars = window.prompt("How many characters long do you want the password (8-128)?");
      if (numOfChars < 8) {
        window.alert("Your password needs to be between 8-128 characters");
        validNumber = false;
        
      }
      else if (numOfChars > 128) {
        window.alert("Your password needs to be between 8-128 characters");
        validNumber = false;
        
      }
      else if (numOfChars >=8 && numOfChars <=128) {
        validNumber = true;
        return numOfChars;
      }
      else 
      {
        window.alert("Your password needs to be between 8-128 characters");
        validNumber = false;
        
      }
    
    
  }// end while
}// end checkNumbers

var checkUseUppers = function () {
  var useUppers = window.confirm("Would you like to use UPPER CASE LETTERS? Please click okay for yes, and cancel for no.");
    if (useUppers) {
      return true;
    }
    else {
      return false;
    }

}
var checkUseLowers = function () {
  var useLowers = window.confirm("Would you like to use LOWER CASE LETTERS? Please click okay for yes, and cancel for no.");
  
    if (useLowers) {
      return true;
    }
    else {
      return false;
    }

}
var checkUseNumeric = function () {
  var useNumeric = window.confirm("Would you like to use Numerics? Please click okay for yes, and cancel for no.");
  
    if (useNumeric) {
      return true ;
    }
    else {
      return  false;
    }

}
var checkUseSpecials = function () {
  var useSpecials = window.confirm("Would you like to use SPECIAL CHARACTERS? Please click okay for yes, and cancel for no.");
  
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

  possibleChars = "";
  
  let numOfChars = checkNumOfChars();
  // If they failed inputting number of characters properly recall it.
  let useUppers = checkUseUppers();
  let useLowers = checkUseLowers();
  let useNumeric = checkUseNumeric();
  let useSpecials = checkUseSpecials();
  let hasAnUpper = false;
  let hasALower = false;
  let hasANumeric = false;
  let hasASpecial = false;
  let meetsRequirements = false;

 
  //Make sure they selected at least one type of character, if not start over
  if ((useUppers === false) && (useLowers===false)  && (useNumeric===false) && (useSpecials===false)){
    window.alert("You need to select at least one type of character for a password please.");
    generatePassword();
  }

  // make a string of all possible characters the user requested
  possibleChars = makePossibleCharStr(useUppers, useLowers, useNumeric, useSpecials);

  //How many characters in the possibleChars string
  possibleCharsLen = possibleChars.length;

  //reset the variables incase this is not the first loop
  tempPWord = "";
  hasANumeric = false;
  hasALower = false;
  hasANumeric = false;
  hasASpecial = false;
  //lets make a while loop to make sure each of the 
  //types of characters is selected
  while (meetsRequirements === false) 
  {
    
    // randomly pick the proper characters
    //outter loop for total number of characters
    //debugger;
    console.log("numofChars = " + numOfChars);
    for (let i = 0; i < (numOfChars); i++) {
      //console.log("i= " + i);
    
      newCharLoc = Math.floor(Math.random()* possibleCharsLen);
      newChar = possibleChars.charAt(newCharLoc);
      // Lets see what type of character it is
      // This way we make sure it has one of each type of 
      // character requested
      if (uppers.indexOf(newChar) > 0) {
        hasAnUpper = true;
      }
      if (lowers.indexOf(newChar)> 0 ) {
        hasALower = true;
      }
      if (numeric.indexOf(newChar) > 0) {
        hasANumeric = true;
      }
      if (specials.indexOf(newChar)> 0 ) {
        hasASpecial = true;
      }

      tempPWord = tempPWord + newChar;
      
    }
    
    // lets make sure all required character types are in the password
    if ((useUppers === hasAnUpper)&& (useLowers === hasALower) && (useNumeric === hasANumeric) && (useSpecials === hasASpecial)) {
      meetsRequirements = true;
    }
  }//end while haveAllTypes

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

