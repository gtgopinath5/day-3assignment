//QUESTION 1: ANSWER
let obj1 = { name: "Person 1", age: 5 };
let obj2 = { age: 5, name: "Person 1" };

function areEqual(obj1, obj2) {
    // Convert objects to JSON strings and compare
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}
if (areEqual(obj1, obj2)) {
    console.log("Objects are equal");
} else {
    console.log("Objects are not equal");
}