const first ='Abid';
const last = 'Nabid';

// const fullname = first + last;
const fullname = first+ ' ' + last;


// Concat
console.log(fullname);
// const fullname2= first.concat(last);
const fullname2= first.concat(' ').concat(last);
console.log(fullname2);

// Includes
// For true values
console.log(last.includes('b'));
// For False Values
console.log(last.includes('x'));
