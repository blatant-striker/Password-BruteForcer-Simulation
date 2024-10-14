BruteForcer Password Cracking Simulation
"No System Is Safe"

Overview
This project demonstrates password cracking using both brute force and dictionary attacks. It simulates the process of guessing weak passwords, highlighting the importance of using strong and unique passwords. The project uses the well-known rockyou.txt dictionary file as part of the dictionary attack method.

Dictionary Choice
When prompted for a dictionary file, you should use: rockyou.txt

rockyou.txt is a widely used password dictionary compiled from passwords leaked during the 2009 RockYou data breach, where passwords were stored in plain text, a critical security mistake. This incident underscores the need for strong password security measures, including encryption.

Quick Tip:
Open rockyou.txt in any text editor.
Use Ctrl + F to search for your commonly used passwords.
If you find your password, it’s highly recommended that you change it immediately, as you're at high risk of being hacked.
Why Strong Passwords Matter
The RockYou dictionary is infamous for exposing millions of weak passwords, illustrating the dangers of using easily guessable passwords. In response to such breaches, websites and services now enforce stricter password policies to enhance security.

Protect Yourself with Strong Passwords:
Length: Use at least 12 characters, mixing letters, numbers, and symbols.
Uniqueness: Avoid common words or patterns.
Password Managers: Consider using password managers to generate and store strong passwords securely.
Code Description
The JavaScript file, bruteforcer.js, simulates password guessing using the following techniques:

Brute Force Attack: The code attempts every possible combination of characters to guess the password.
Dictionary Attack: The code can use a password dictionary, such as rockyou.txt, to check if the password matches any word in the dictionary before attempting brute force methods.
Key Features:
Brute Force Attempts: The code tries all possible combinations of letters, numbers, and special characters.
Dictionary Attack: If provided with a dictionary file, the code attempts to find the password by matching it with dictionary entries.
Total Attempts: The program keeps track of all attempts and logs the number of tries until the password is found (or not found).
Installation Guide
Requirements:
This project is designed to run using Deno, a modern runtime environment for JavaScript and TypeScript. Deno allows file system operations like reading dictionary files without additional dependencies.

Step 1: Install Deno
To install Deno, follow these instructions based on your operating system:

MacOS/Linux:
bash
Copy code
curl -fsSL https://deno.land/x/install/install.sh | sh
Windows (using PowerShell):
powershell
Copy code
iwr https://deno.land/x/install/install.ps1 -useb | iex
For more details, visit the official Deno installation guide.

Step 2: Verify Installation
After installation, verify that Deno is properly installed by running the following command in your terminal:

bash
Copy code
deno --version
Step 3: Running the Code
Save the JavaScript code in a file named bruteforcer.js.
Open your terminal and navigate to the directory where bruteforcer.js is saved.
Run the program using Deno:
bash
Copy code
deno run --allow-read bruteforcer.js
The --allow-read flag enables file reading permissions, which are necessary for the program to load the dictionary file (rockyou.txt).

Example Usage
Upon running the script, you'll be prompted to:

Enter a password to be cracked.
Optionally provide a dictionary file path (e.g., rockyou.txt).
The program will then attempt to guess the password, first using the dictionary if provided, and then falling back on brute force if necessary.

Disclaimer
This project is for educational purposes only. Password cracking techniques such as brute force and dictionary attacks should only be used in legal, authorized contexts, such as pentesting in environments where you have explicit permission. Unauthorized use of these techniques to access systems or data is illegal and unethical. Always adhere to cybersecurity laws and best practices.

Author
BlatantStriker (Chaitanya)
Feel free to contribute or customize this project further to suit your needs.
