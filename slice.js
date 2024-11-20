const address ='andarkilla';

// Slice ta ekta word or sentence ke kete dewar khetre use hoy. shee khetre eta kaj kore ----->slice(2,5)-->(first latter , last latter er ager latter)
const part = address.slice(2,5);
console.log(part);

const sentence='I am a good and hardworking person';
console.log(sentence.split(' '));
console.log(sentence.split('a'));

const friendsStr = 'Fahim, Rahim, Jahim, Nahim, Kahim, tahim';
const friends = friendsStr.split(',');
console.log(friends);

const realfriend = [ 'Fahim', ' Rahim', ' Jahim', ' Nahim', ' Kahim. tahim' ];

// String ke Add korar jonno
console.log(realfriend.join());
console.log(realfriend.join(','));
console.log(realfriend.join('|'));
console.log(realfriend.join('-'));