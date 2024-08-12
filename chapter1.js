let person = {
    name: 'Alice',
    age: 30,
    greet: function() {
        console.log(`Hello, I'm ${this.name}`);
    }
};

// Adding/modifying properties
person.job = 'Developer';
person['age'] = 31;

// Object methods
console.log(Object.keys(person));  // ['name', 'age', 'greet', 'job']
console.log(Object.values(person));  // ['Alice', 31, [Function: greet], 'Developer']

console.log(person);  // Developer

// Destructuring
let { name, age } = person;

console.log('name', name, 'age', age);  // Developer
