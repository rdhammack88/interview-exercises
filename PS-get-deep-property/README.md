# PS-get-deep-property exercise

## Instructions

- Using vanilla javascript, create a function that gets the value of a property at a given path
- Example:
  - If given the object: {person: {name: {first: 'FirstName', middleInitial: 'I', lastName: 'LastName''}}}
  - And given the path: 'person.name.lastName'
  - The output would be: 'LastName'
- After you complete the exercise, provide any notes on your code below such as how to run your example

## Sample Code Structure

```javascript
function getDeepProperty(obj, path) {
  // your code goes here
  // return;
}
const someObj = {person: {name: {first: 'FirstName', middleInitial: 'I', lastName: 'LastName''}}};
const value = getDeepProperty(someObj, 'person.name.lastName');
```

## Candidate Notes

### *__[Problem Solving - Get Deep Property](https://github.com/rdhammack88/interview-exercises/tree/master/PS-get-deep-property)__*

#### To Run the algorithm

- Download the zip or clone the project
- cd into project folder
- Make sure you have NodeJS installed
- run *_node index.js_*
- **I have also added an extra couple test cases to confirm the deep traversal.**
