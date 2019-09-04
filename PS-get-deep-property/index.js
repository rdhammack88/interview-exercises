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
/** Test Case 1 */
const someObj = {person: {name: {first: 'FirstName', middleInitial: 'I', lastName: 'LastName'}}};
const value = getDeepProperty(someObj, 'person.name.lastName');
console.log("value: " + value)
/** Test Case 2 */
const someNewObj = {person: {personal: {name: {first: 'FirstName', middleInitial: 'I', lastName: 'LastName', alias: {nickname: 'Nickname'}}, address: {street: '123 fake st.', city: 'Dallas', state: 'Tx', zip: '12345'}}}};
const value2 = getDeepProperty(someNewObj, 'person.personal.name.alias.nickname');
console.log("value 2: " + value2)
/** Test Case 3 */
const value3 = getDeepProperty(someNewObj, 'person.personal.address.state');
console.log("value 3: " + value3)