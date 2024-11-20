const school ="Milestone Collage";

console.log(school);
console.log(school.toLowerCase());
console.log(school.toUpperCase());

const subject ='Chemistry';
const book ='chemistry';

if (subject.toLowerCase() == book.toLowerCase())
{
    console.log('I am reading chemistry book regularly');
}
else{
    console.log('hudai subject ');
}


const drink ='water';
const liquid ='  Water  ';

// 2 Sider space shoranor jonno 'trim() use korbo'
if ( drink.trim() == liquid.trim()){
    console.log('panir opor nam jibon');

}
else{
    console.log('lobonakto pani khawa jay na reeee');
}
