// Author: BlatantStriker(aka. Chaitanya)


// Function to guess the password
async function guessPassword(password) {
    // List of characters used for generating combinations
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789' +
                       '`~!@#$%^&*()-_=+[{]}\\|;:\'",<.>/?';
    let found = false; // Flag to indicate if the password is found
    let totalAttempts = 0; // Counter for total password attempts
  
    // Recursive function to generate all possible combinations
    function generateCombinations(currentTry, length) {
      // If the password is found or currentTry length exceeds password length, return
      if (found || currentTry.length > length) {
        return;
      }
  
      // Loop through all characters to generate combinations
      for (let i = 0; i < characters.length; i++) {
        const guess = currentTry + characters[i]; // Generate a new guess
        totalAttempts++; // Increment total attempts count
        console.log("Trying Password:", guess);
  
        // If the generated guess matches the actual password, set 'found' flag to true and return
        if (guess === password) {
          found = true;
          console.log("Password Found:", guess);
          console.log("\nTotal Attempts:", totalAttempts,"\n\n\n");
          return;
        }
  
        // Recursive call to generate more combinations
        generateCombinations(guess, length);
      }
    }
  
    // Function to read dictionary from .txt file
    async function loadDictionary(filePath) {
      try {
        // Read data from the specified file
        const data = await Deno.readFile(filePath);
        const decoder = new TextDecoder();
        const dictionary = decoder.decode(data);
        // Split the file contents by newline to get individual words
        const words = dictionary.split('\n');
        // Print the dictionary words for logging purposes
        words.forEach((word, index) => {
          console.log(`Trying dictionary word no. ${index + 1}: ${word}`);
        });
        return words;
      } catch (err) {
        // Handle errors if reading dictionary fails
        console.error("Error reading dictionary:", err);
        return [];
      }
    }
  
    // Prompt the user for the dictionary file path
    const dictFilePath = prompt("Enter the .txt dictionary file path (leave empty if none): ");
  
    // Load dictionary from .txt file if provided, otherwise use an empty array
    const dictionary = dictFilePath ? await loadDictionary(dictFilePath) : [];
  
    // Merge the provided dictionary with the built-in character guesses
    const mergedDictionary = dictionary.concat(characters.split(''));
  
    // Try all lengths from 1 to the password length
    for (let length = 1; length <= password.length; length++) {
      // Call generateCombinations function to try all combinations of the current length
      generateCombinations('', length);
    }
  
    // Try dictionary words and characters from the built-in character set
    for (const word of mergedDictionary) {
      totalAttempts++;
      if (word === password) {
        found = true;
        console.log("Password Found in Dictionary:", word);
        console.log("\n\nPassword Found:", guess);
        break;
      }
    }
  
    // If the password is not found, print a message indicating so
    if (!found) {
      console.log("Password not found.");
    }
  
    // Print the total number of attempts made to find the password
    console.log("\nTotal Attempts:", totalAttempts,"\n\n");
  }
  
  // Prompt the user for the password
  const pass = prompt("Enter the password: ");
  
  // Call the guessPassword function with the entered password
  guessPassword(pass);
  