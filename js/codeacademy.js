const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
const listItem = famousSayings[0] ;
console.log(listItem);
console.log(famousSayings[2]);
console.log(famousSayings[3]);

//push on array
const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('to study','to rest');
console.log(chores);

// The loop below loops from 0 to 3. Edited to loop backwards from 3 to 0
for (let counter = 0; counter < 4; counter++){
  console.log(counter);
};
for (let counter = 3; counter >= 0; counter--){
    console.log(counter);
  };

// for nested loop
const bobsFollowers = ['a','x','c','y'];
const tinasFollowers = ['x','y','z'];
let mutualFollowers = [];
for (let i =0; i<bobsFollowers.length; i++){
  for (let j =0; j<tinasFollowers.length; j++){
    if(bobsFollowers[i]===tinasFollowers[j]){
      mutualFollowers.push(bobsFollowers[i]);
      console.log(mutualFollowers);
    }
  }
};

const cards = ['diamond', 'spade', 'heart', 'club'];

// While loop
let currentCard
while(currentCard != 'spade'){
  currentCard = cards[Math.floor(Math.random() * 4)];
//   //*Math.floor(Math.random() * 4) will give us a random number from 0 to 3. We’ll use this number to index the cards array,
//    and assign the value of currentCard to a random element from that array.*//
  console.log(currentCard);
  console.log(currentCard);
  console.log(currentCard);
}

//do while loop
// Write your code below
let cupsOfSugarNeeded = 4;
let cupsAdded = 0;
do{
  cupsAdded++
  console.log(cupsAdded + ' cups was add.');
}
while(cupsAdded<cupsOfSugarNeeded);


//Break method
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if (rapperArray[i] === 'Notorious B.I.G.'){
    break;
  }
}
console.log("And if you don't know, now you know.");

//Function as Data
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  }
  
  // Write your code below
  let is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;
  is2p2();
  console.log(is2p2.name);

  //function as arguments
  const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  };
  
  const addTwo = num => num + 2;
  
  const timeFuncRuntime = funcParameter => {
    let t1 = Date.now();
    funcParameter();
    let t2 = Date.now();
    return t2 - t1;
  };
  
  // function as argument
  
  const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);
  
  const checkConsistentOutput = (func, val) => {
      let firstTry = func(val);
      let secondTry = func(val);
      if (firstTry === secondTry) {
          return firstTry
      } else {
          return 'This function returned inconsistent results'
      }
  };
  
  checkConsistentOutput(addTwo, 3);

