function getDeepProperty(obj, path) {
    // your code goes here
    //   if(!path.length) { return; }

    let paths = path.split('.');

    if (paths.length < 2) {
        console.log(path);
        return obj[path];
    }

    if (paths.length > 1) {
        let pathArr = path.split('.');
        console.log("Original pathArr: " + pathArr)
        let prop = pathArr.shift();
        console.log("Altered pathArr: " + pathArr)
        console.log("Current Property: " + obj[prop]);
        return getDeepProperty(obj[prop], pathArr.join('.'))
    }


    //   let newPathArr = pathArr.splice(0, 1).join('.')
    //   console.log(newPathArr)






    //   return getDeepProperty(obj[pathArr.split[0]], newPathArr)


    //   return obj[pathArr[0]][pathArr[1]][pathArr[2]];

    //   for(let i = 0; i < pathArr.length; i++) {

    //   }

    //   person.name.lastName
    // console.log('no path') 

}
const someObj = {
    person: {
        name: {
            first: 'FirstName',
            middleInitial: 'I',
            lastName: 'LastName'
        }
    }
};
const value = getDeepProperty(someObj, 'person.name.lastName');

console.log("value: " + value)
