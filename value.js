const person ={
    name: 'sadar uddin',
    age: 24,
    profession: 'developer',
    salary : 25000,
    married:true ,
    'fav places' : ['Cumilla', 'Chottogram','Laksham']
}

// Bracket notation
person.salary = 30000;
person['age'] =26;
console.log(person);
person["fav places"]=['Makkah','Madina', 'Uk'];
console.log(person);

// key notation
const keyName = 'profession';
console.log(person[keyName]);