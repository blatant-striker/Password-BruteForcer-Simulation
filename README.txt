BruteForcer Password Cracking Simulation
========================================

Overview
--------

This code simulates password guessing using both brute force and dictionary attacks. It demonstrates how easy it can be to crack weak passwords, especially those found in widely used password dictionaries, such as `rockyou.txt`.

Dictionary Choice
-----------------
When prompted for a dictionary file, add: **rockyou.txt**

`rockyou.txt` is a popular password dictionary frequently used by security professionals for testing and analysis. It contains millions of passwords leaked from RockYou, a social media company that made the critical error of storing passwords in plain text. This breach, which occurred in 2009, highlights the importance of proper password security practices, including the encryption of passwords.

Tip: Open `rockyou.txt` in any text editor, use `Ctrl + F`, and search for your commonly used passwords. If any of your passwords appear in the file, you're using a common password and are at high risk of being hacked. It’s highly recommended that you change such passwords immediately.

Why Strong Passwords Matter
---------------------------
The RockYou dictionary exposed millions of weak passwords, reinforcing the importance of using unique, complex passwords to protect online accounts. To avoid falling victim to password-related breaches:

- Use long passwords that include letters (upper and lowercase), numbers, and special characters.
- Avoid using common words or phrases.
- Use password managers to generate and store strong passwords.

Code Description
----------------
This JavaScript code, named `bruteforcer.js`, simulates a password guessing process using two methods:

1. Brute Force Attack: The function tries every possible combination of characters, one by one, to guess the password.
2. Dictionary Attack: If a password dictionary (`rockyou.txt` or any other) is provided, the function will attempt to match the password with entries in the dictionary.

How It Works:
-------------
- The function `guessPassword(password)` accepts a password and attempts to find it using combinations of characters and a dictionary if provided.
- It generates possible passwords by trying all combinations of characters (letters, numbers, special symbols) and comparing each one to the target password.
- Additionally, it can load and use a dictionary from a `.txt` file, checking if the password exists in the dictionary before falling back to brute force attempts.

Key Sections of the Code:
-------------------------
- Brute Force Attempts: Generates all possible combinations of characters to guess the password.
- Dictionary Check: Loads a password dictionary and checks if the password is listed.
- Total Attempts: Keeps track of the number of attempts made to guess the password, providing feedback on performance and success.

Installation Guide
------------------

Requirements:
--------------
To run this code, you'll need to use **Deno** (a modern runtime environment for JavaScript and TypeScript). Deno provides a secure, built-in way to handle file system operations without additional dependencies.

Step 1: Install Deno
--------------------
Open your terminal and install Deno by following the steps below depending on your operating system:

MacOS/Linux:
```
curl -fsSL https://deno.land/x/install/install.sh | sh
```

Windows (using PowerShell):
```
iwr https://deno.land/x/install/install.ps1 -useb | iex
```

For detailed installation instructions, you can refer to Deno's official documentation: https://deno.land/manual/getting_started/installation.

Step 2: Verify Deno Installation
--------------------------------
Run the following command in your terminal to check if Deno is installed successfully:
```
deno --version
```

You should see output that shows the version of Deno installed.

Step 3: Running the Code
------------------------
1. Save the code provided in the `bruteforcer.js` file.
2. In the terminal, navigate to the directory containing `bruteforcer.js`.
3. Run the code using Deno with the following command:
```
deno run --allow-read bruteforcer.js
```

The `--allow-read` flag is required to enable file reading permissions for the script, as it will be loading a dictionary file such as `rockyou.txt`.

Disclaimer
----------
This project is for **educational purposes only**. The use of password dictionaries and brute force techniques should only be applied in legal, ethical contexts, such as pentesting in environments where you have explicit permission. Misusing these tools for unauthorized access to systems or data is illegal and unethical. Always ensure you adhere to cybersecurity laws and best practices.

Author
------
BlatantStriker (Chaitanya)
