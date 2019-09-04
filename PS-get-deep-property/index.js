function getDeepProperty(obj, path) {
    // your code goes here
    if(!path.length) { return 'No path was given'; }

    let paths = path.split('.');

    if (paths.length < 2) {
        // console.log(path);
        return obj[path];
    }

    if (paths.length > 1) {
        let pathArr = path.split('.');
        // console.log("Original pathArr: " + pathArr)
        let prop = pathArr.shift();
        // console.log("Altered pathArr: " + pathArr)
        // console.log("Current Property: " + obj[prop]);
        return getDeepProperty(obj[prop], pathArr.join('.'))
    }
}
const someObj = {person: {name: {first: 'FirstName', middleInitial: 'I', lastName: 'LastName'}}};
const value = getDeepProperty(someObj, 'person.name.lastName');
console.log("value: " + value)
