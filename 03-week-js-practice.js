// 🏔 Epic Goals 11 in total

console.log("=================================")
console.log("CHALLENG NUMER 0")
console.log("=================================")

// 9 Create a function called highLow that takes in a number and returns whether the number is higher or lower than the "answer".

const highLow = (num) => {
    if (num > 8) {
        return "this is high"
    }else {return "this is low"}
}
console.log("9:", highLow(16));
// 10 Create an HTML page and link your JavaScript file. More info here.

// 11 As a user, I see a prompt or input where I can guess a number between 1 and 100 (both inclusive).

// 11 As a user, I can see if my guess is too high or too low.

// 11 As a user, if I guess the "answer" correctly I am notified that I won.

// 11 As a user, I can continue to guess the "answer" until I am correct.

// 12 STRETCH: As a user, if I have not guessed the correct number in seven tries I see a losing message.


// ################################################################

// 💻 Challenge: React Components
console.log("=================================")
console.log("CHALLENG NUMER 1")
console.log("=================================")

// The goal of the following challenge is for us to practice nesting components and getting familiar with the component syntax.

// Create a new HTML file. Copy the following code into your file:

// <!DOCTYPE html>
// <html lang="en" dir="ltr">
//   <head>
//     <meta charset="utf-8" />
//     <script
//       src="https://unpkg.com/react@18/umd/react.development.js"
//       crossorigin
//     ></script>
//     <script
//       src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
//       crossorigin
//     ></script>
//     <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
//     <title>Intro to React</title>
//   </head>
//   <body>
//     <div id="react-container"></div>

//     <script type="text/babel">
//       const App = () => {
//         return <></>
//       }

//       const domContainer = document.querySelector("#react-container")
//       const root = ReactDOM.createRoot(domContainer)
//       root.render(<App />)
//     </script>
//   </body>
// </html>
// 📚 User Stories
// As a user, I see a Header component with the name of your cohort.
// As a user, I can see a Content component that contains an unordered list of all your classmates.
// As a user, I can see a Footer component with your name.

console.log("=================================")
console.log("CHALLENG NUMER 2")
console.log("=================================")

// ⭐️ Challenge: Favorites
// As a developer, you are tasked with creating an application to share your favorite things. Decide which favorite things you would like to showcase. When creating a project, it is important to think about organization of your code. It is best practice to separate and compartmentalize all the actions in your code into individual components.

// 📚 User Stories
// As a user, I can see a Header component with the title of your app.
// As a user, I can see a Profile component with information about you and your partner.
// As a user, I can see a Footer component with the name of your cohort.
// As a user, I can see a Favorite component with a list of top five favorites (i.e. top five favorite TV shows, top five favorite songs, top five favorite taco shops).
// 🏔 Stretch Goals
// As a user, I can see a browser tab with a customized name and favicon.

console.log("=================================")
console.log("CHALLENG NUMER 3")
console.log("=================================")

// 🟧 Challenge: Color Box
// As a developer, you are tasked with creating a color box application. The application will allow the user to click a box and see a different color with every click.

// 📚 User Stories
// As a user, I can see a square box on the screen with a black border and a white background.
// As a user, I can see the default color name "white" inside the box.
// As a user, every time I click on the box the name of a different color appears.
// Possible color names: red, orange, yellow, green, blue, purple, pink
// As a user, every time I click the box instead of the color name, I see the background color in the box change to represent the color.
// As a user, I can see many boxes on the page all acting independently of one another.
// 🏔 Stretch Goals
// As a user, I can start with no boxes on the screen.
// As a user, I can see a button to add a box.
// As a user, I can see a button to remove a box.
// As a user, every time I click the add button, I can add an additional box that acts independently of the other boxes.
// As a user, every time I click the remove button, I can remove the last box in the series.


console.log("=================================")
console.log("CHALLENG NUMER 4")
console.log("=================================")

// 🐽 Pig Latin Challenge
// Story 1: In order to see English words converted to Pig Latin, as the user of the application, I need to see words beginning with a vowel translated to add "way" to the end.

// Branch: vowel-functionality

// Acceptance Criteria

// Can type any word that begins with a vowel in the text input (e.g. apple)
// Can hit the submit button
// Can see the words that begin with a vowel translated to Pig Latin and rendered to the page (e.g. appleway)
// Story 2: In order to see English words converted to Pig Latin, as the user of the application, I need to see words that have "qu" in the first syllable translated by moving all the consonants and the "u" to the end and adding "ay".

// Branch: qu-functionality

// Acceptance Criteria

// Can type any word that has a "qu" in the first syllable in the text input (e.g. squeal)
// Can hit the submit button
// Can see the words that have a "qu" in the first syllable translated to Pig Latin and rendered to the page (e.g. ealsquay)
// Story 3: In order to see English words converted to Pig Latin, as the user of the application, I need to see words that have no vowels other than "y" translated by moving all the consonants to the end and adding "ay".

// Branch: y-functionality

// Acceptance Criteria

// Can type any word that has no vowels other than "y" in the text input (e.g. fry)
// Can hit the submit button
// Can see the words that have no vowels other than "y" translated to Pig Latin and rendered to the page (e.g. yfray)
// Story 4: In order to see English words converted to Pig Latin, as the user of the application, I need to see words that have one or more consonants translated by moving all the consonants to the end and adding "ay".

// Branch: consonant-functionality

// Acceptance Criteria

// Can type any word that starts with one or more consonants in the text input (e.g. through)
// Can hit the submit button
// Can see the words that start with one or more consonants translated to Pig Latin and rendered to the page (e.g. oughthray)
// 🏔 Stretch Challenges
// As a user, I can see pleasant stylings on the application.
// As a user, I can input a sentence that includes punctuation.
// As a user, I can input a sentence that includes lower and upper case words.
// As a user, I can see a message if I am not using the application correctly.
// 👩‍💻 Developer Stretch Challenges
// As a developer, I have a well-commented application.
// As a developer, I have well written README file with instructions on how to access my repository.
// As a developer, my variables are all named semantically.
// As a developer, I have refactored and efficient code.
// As a developer, I have my application deployed as a live website.
// 🎙 Project Demos
// Each team will give a brief (three minute) presentation of their application. Presenting your project will allow you to practice communication and coding vocabulary. Presentations are not a judgement of your work or ability as each team will have different weaknesses and strengths. Presentations allow other members of the cohort to appreciate a different approach to solving a complex problem.

// Full team: show off your application's user interface (UI)
// First team member: What was your team's approach to solving this problem? Did the initial approach work out in the end?
// Second team member: What was the hardest thing about this project? What is your biggest takeaway?
// Third team member (if applicable): How did you manage the workflow in a group of three?

console.log("=================================")
console.log("CHALLENG NUMER 5")
console.log("=================================")

// 🎲 Challenge: Dice Roller
// As a developer, you are tasked with creating a dice application. The application will allow the user to role a standard six-sided dice and see the result of each roll. As the user rolls the dice, each roll gets logged which creates a list of all the previous rolls.

// When creating a project it is important to think about organization of your code. It is best practice to separate and compartmentalize all the actions in your code. The dice UI will be in its own component as will the roll log UI. App.js controls of all the data in state, renders the other components, and passes data to the dice and roll component.

// dice game

// 📚 User Stories
// As a user, I can see a square box on the screen with a black border and a white background.
// As a user, I can click on the box to roll the dice and see the result of my roll in the box.
// As a user, I can see my roll logged and see the roll log continue to grow as I roll the dice.
// 🏔 Stretch Goals
// As a user, I can see the image of a dice face when I roll the dice.
// As a user, I can click a restart button that clears my roll log.
// 🗂 Assets
// Dice One
// Dice Two
// Dice Three
// Dice Four
// Dice Five
// Dice Six

console.log("=================================")
console.log("CHALLENG NUMER 6")
console.log("=================================")

// 🌮 Challenge: Food Ordering App
// As a developer, you are tasked with creating a food ordering application in React. This is the first iteration of an application that is going to be much larger in the future so it is important to create a solid foundation from which the code base can grow.

// The menu UI will be in its own component as will the order UI. App.js controls of all the data in state, renders the other components, and passes data to the menu and the order component.

// 📚 User Stories
// As a user, I can see an application that has a list of food items and the price of each item.
// Hint: Take some time to think about the data structure that will allow you to effectively store the required information.
// As a user, I can click a button to select an item I wish to order.
// As a user, I can see the selected items displayed on the page.
// 🏔 Stretch Goals
// As a user, I can see the total cost of my current order.
// As a user, I can see both the base total cost of my food selections and the total that includes sales tax.
// As a user, I can see the total that includes sales tax rounded to two decimals.
// As a user, I can see an image of my food selection on the menu.

console.log("=================================")
console.log("CHALLENG NUMER 7")
console.log("=================================")

// 📚 User Stories
// As a user, I can see a landing page with heading and a text input.
// As a user, I see titles of three robots waiting for my text.
// As a user, I see my "Good Robot" repeating exactly what I type in real time.
// As a user, I see my "Bad Robot" saying "BLABLA....." One character for every character I type in real time.
// For example, a user input of "robot" would return "BLABL".
// As a user, I see a third robot that modifies the input as per the developer's choice in real time.
// 🏔 Stretch Goals
// As a user, I see a fourth robot that modifies the input as per the developer's choice in real time.
// As a user, I can see pleasant stylings on the application.
// 👩‍💻 Developer Stretch Goals
// As a developer, I have a well commented application.
// As a developer, I have well written README file with instructions on how to access my repository.
// As a developer, my variables are all named semantically.
// As a developer, I have refactored and efficient code.
// As a developer, I have my application deployed as a live website.

console.log("=================================")
console.log("CHALLENG NUMER 8")
console.log("=================================")

// 📚 User Stories
// As a user, I can see a page with a three by three grid board game with a question mark in each square.
// As a user, when I click on one of the question marks, an alert appears with the index position of that question mark in the array.
// As a user, when I click on one of the question marks, a tree emoji appears instead of the alert.
// As a user, if I select the winning square, the question mark will become a treasure emoji. If I select the losing square, the question mark will become a bomb emoji.
// As a user, I can click on a “Play Again” button that will restart the game.
// As a user, I can see a counter that shows how many guesses are remaining. The counter starts at five and decrements by one every time I click on a square that is neither the treasure nor the bomb.
// As a user, I can see a message stating that I won the game by selecting the square that contains the treasure.
// As a user, I can see a message stating that I lost the game by selecting the square that contains the bomb.
// As a user, I cannot continue to play the game after I win or lose.
// As a user, I can see a message informing me that I lost the game when I run out of turns (the counter reaches zero).
// 🏔 Stretch Goals
// Consider how to handle a situation where the bomb and the treasure are at the same index.
// 👩‍💻 Developer Stretch Goals
// As a developer, I have a well commented application.
// As a developer, I have well written README file with instructions on how to access my repository.
// As a developer, my variables are all named semantically.
// As a developer, I have refactored and efficient code.
// As a developer, I have my application deployed as a live website.


console.log("=================================")
console.log("CHALLENG NUMER 9")
console.log("=================================")

// 📚 User Stories
// As a user, I can see a three by three grid game board on the page.
// As a user, I can click on a square to mark it.
// As a user, my partner can click on a square after me and see their mark.
// As a user, I can't click on a square that has already been marked.
// As a user, when either my partner or I win the game (three squares in a row: horizontally, vertically, or diagonally), I can see a notice telling me which player won.
// As a user, I can't play the game after the game has been won.
// As a user, if there are no more squares available, I can see a notice telling me that the game has ended.
// As a user, I can click on a restart button that will clear the game board.
// 🏔 Stretch Goals
// As a user, I can see pleasant stylings on the application.
// As a user, I can see a notification that informs me whether it is currently my partner or my turn.
// As a user, I can choose my marker from a predetermined list (X, O, a color, an emoji, etc...).
// 👩‍💻 Developer Stretch Goals
// As a developer, I have a well commented application.
// As a developer, I have well written README file with instructions on how to access my repository.
// As a developer, my variables are all named semantically.
// As a developer, I have refactored and efficient code.
// As a developer, I have my application deployed as a live website.

console.log("=================================")
console.log("CHALLENG NUMER 10")
console.log("=================================")

// 💡 Challenge: Light Bulb
// As a developer, you are tasked with creating a light switch application. The application will display an image of a lightbulb and corresponding switch. When the user clicks the switch the images will toggle between a light switch and bulb that are "off" and a light switch and bulb that are "on".

// 📚 User Stories
// As a user, I can see a square box on the screen with a black border and a white background.
// As a user, I can see the word "off" inside the box.
// As a user, every time I click on the box, the word toggles between the word "off" and the word "on."
// As a user, when I see the word "off", the background color of the box is white.
// As a user, when I see the word "on", the background color of the box is yellow.
// As a user, I can see many boxes on the page that are acting independently of one another.
// As a user, I can see a picture of a light switch in the "off" position instead of seeing a box.
// As a user, when I click on the light switch, I can see a picture of a light switch in the "on" position.
// As a user, when the light switch is "off", I see a white light bulb.
// As a user, when the light switch is "on", I see a yellow light bulb.
// 🏔 Stretch Goals
// As a user, I can start with no light bulbs or switches on the screen.
// As a user, I can see a button to add a light bulb and corresponding switch.
// As a user, I can see a button to remove a light bulb and corresponding switch.
// As a user, every time I click the add button, I can add an additional light bulb and corresponding switch that acts independently of the other light bulbs and corresponding switches.
// As a user, every time I click the remove button, I can remove the last light bulb and corresponding switch in the series.
// 🗂 Assets
// Switch On
// Switch Off
// Light On
// Light Off
