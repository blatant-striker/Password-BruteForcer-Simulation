// Author: BlatantStriker(aka. Chaitanya)


// Function to guess the password
function guessPassword(password) {
  // List of characters used for generating combinations
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789' +
                     '`~!@#$%^&*()-_=+[{]}\\|;:\'",<.>/?';
  let found = false; // Flag to indicate if the password is found
  let totalAttempts = 0; // Counter for total password attempts

  // Recursive function to generate all possible combinations
  function generateCombinations(currentTry, length) {
    // If the password is found or currentTry length exceeds the desired length, return
    if (found || currentTry.length > length) {
      return;
    }

    // Loop through all characters to generate combinations
    for (let i = 0; i < characters.length; i++) {
      const guess = currentTry + characters[i]; // Generate a new guess
      totalAttempts++; // Increment total attempts count
      console.log("Trying Password:", guess);
      // Note: The following line are commented out, so the function won't log every attempt
      // console.log("\nTotal Attempts:", totalAttempts,"\n\n\n");

      // If the generated guess matches the actual password, set 'found' flag to true and return
      if (guess === password) {
        found = true;
        console.log("\n\nPassword Found:", guess);
        console.log("\nTotal Attempts:", totalAttempts,"\n\n\n");
        return;
      }

      // Recursive call to generate more combinations
      generateCombinations(guess, length);
    }
  }

  // Try all lengths from 1 to the password length
  for (let length = 1; length <= password.length; length++) {
    // Call generateCombinations function to try all combinations of the current length
    generateCombinations('', length);
  }

  // If the password is not found, print a message indicating so
  if (!found) {
    console.log("Password not found.");
  }
}

// Prompt the user for the password
const pass = prompt("Enter the password: ");
// Call the guessPassword function with the entered password
guessPassword(pass);
