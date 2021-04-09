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

//iterations
const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(fruit => console.log(`I want to eat a ${fruit}.`))

//the MAP Method
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => animal[0]);

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(num => num/100);

console.log(smallNumbers)


//the filter method
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(randomNumbers => {
  return randomNumbers < 250;
}

)

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(
  favoriteWords => {
    return favoriteWords.length > 7;

  }
)
//MAP METHOD SYNTAX
arrayname.map(item=>{
    console.log("item")
})

//findINDEX method
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
});

const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's' ? true : false;
});

//Reduce method

const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce(function(accumulator,currentValue){
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
},10);
console.log(newSum);

//EXAMPLE
const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.method(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.method(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.method((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.method(num => num - 5);

// Choose a method that will return a boolean value
nums.method(num => num < 0);

/////iterator example
const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => {city.length > 7});

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.some(num => num < 0);

