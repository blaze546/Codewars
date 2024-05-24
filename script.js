function isItLetter(character) {
    // Check if the input is a single character
    if (typeof character !== 'string' || character.length !== 1) {
      return false;
    }
  
    // Check if the character is a letter
    return /^[a-zA-Z]$/.test(character);
  }

  //alt 
  function isItLetter(character) {
    return /[a-z]/i.test(character);
  }