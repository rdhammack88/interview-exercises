# Interview Exercises

## Instructions

### *__[PS-get-deep-property exercise](https://github.com/rdhammack88/interview-exercises/tree/master/PS-get-deep-property)__*

- Using vanilla javascript, create a function that gets the value of a property at a given path
- Example:
  - If given the object: {person: {name: {first: 'FirstName', middleInitial: 'I', lastName: 'LastName''}}}
  - And given the path: 'person.name.lastName'
  - The output would be: 'LastName'
- After you complete the exercise, provide any notes on your code below such as how to run your example

### *__[UI-user-feed exercise](https://github.com/rdhammack88/interview-exercises/tree/master/UI-user-feed-ng)__*

- Using any UI framework (or none) create a social media user feed component using the data.json file provided and the requirements below
- Component should use data.json file to mock initial feed list items. The data is a list of feed objects that describe a user's comment or tweet.
- Component should display each feed value and the number of likes it has in a list of feed items.
- Component should provide a button around the number of likes for users to click and increment the number of likes for that item.
- Component should provide a text box for a user to add another item to the feed by pressing enter
- Component should display a count above the list of feed items of the number feed items. If new items are added this number should increment.
- After you complete the exercise, provide notes below on how your code can be ran whether it be by simply opening a index.html file or through an npm command

## Candidate Notes

### *__[Problem Solving - Get Deep Property](https://github.com/rdhammack88/interview-exercises/tree/master/PS-get-deep-property)__*

- *__I have also added an extra couple test cases to confirm the deep traversal.__*

#### To Run the algorithm

- *__Make sure you have NodeJS installed__*
- Download the zip or clone the project
- *_cd PS-get-deep-property_*
- run *_node index.js_*

### *__[User Interface - User Feed -- Written in ANGULAR 7](https://github.com/rdhammack88/interview-exercises/tree/master/UI-user-feed-ng)__*

- *__Completed for all **Required** test cases__*
- *__Written in Angular@7 using SASS, Bootstrap@4 and Font-Awesome@5__*

#### To Run the web app

- Download the zip or clone the project
- *_cd UI-user-feed-ng_*
- *_npm install_*

- *__To run DEVELOPMENT source code__*
  - *_npm serve -o_*

- *__To view the production ready__*
  - *_ng build --prod_*
  - When the compilation completes, open "UI-user-feed-ng/dist" and double-click the index.html file

- *__Visit the live production @ [UI-User-Feed](https://rdhammack88.github.io/interview-exercises)__*

### *__[User Interface - User Feed -- Written in VanillaJS](https://github.com/rdhammack88/interview-exercises/tree/master/UI-user-feed)__*

- *__!!CURRENTLY NOT COMPLETED__*
- *__Started, and was a little sloppy with a potential of a larger codebase than desired. Left for later completion and comparison to Angular version.__*

#### To Run the app

- No need to install anything, just double-click the index.html file to run.
