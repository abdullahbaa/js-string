const person ={
    name: 'sadar uddin',
    age: 24,
    profession: 'developer',
    salary : 25000,
    married:true ,
    'fav places' : ['Cumilla', 'Chottogram','Laksham']
}
// console.log(person);
// dot value diye object er value access kora
// dot notation
console.log(person.age);
const income = person.salary;
console.log(income);

// Bracket  notation
// third bracket diye access kora
let married = true;
let age = 24;
console.log(person[married]);
const boyosh =person [age];
console.log(boyosh);
console.log(person["fav places"]);

