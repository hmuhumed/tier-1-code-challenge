/*
You’ve been given an index.html file and this starter js file.

0. Source this file into the index.html file. You should see a console log when this is done correctly.
  -- There is no JS to write for this step.
*/

console.log("Step 0 complete! client.js loaded!");

// Write your code here!

// 1. Start with the number 29 and set that equal to a variable named ‘highScore’;

let highScore = 29;

// 2. Make a new empty array called myScrabbleTiles.

let myScrabbleTiles = [];

// 3. Put these 6 tile objects into myScrabbleTiles:
/*
  { tile: 'N', score: 1 }
  { tile: 'K', score: 5 }
  { tile: 'Z', score: 10 }
  { tile: 'X', score: 8 }
  { tile: 'D', score: 2 }
  { tile: 'A', score: 1 }
*/
function addMyScrabbleTiles(tile, score) {
  let scrabble = {
    tile: tile,
    score: score,
  };
  myScrabbleTiles.push(scrabble);
  return scrabble;
}

console.log(addMyScrabbleTiles("N", 1));
console.log(addMyScrabbleTiles("K", 5));
console.log(addMyScrabbleTiles("Z", 10));
console.log(addMyScrabbleTiles("X", 8));
console.log(addMyScrabbleTiles("D", 2));
console.log(addMyScrabbleTiles("A", 1));

// 4. Remove the last tile from myScrabbleTiles.
myScrabbleTiles.pop();
console.log("Removed last tile:", myScrabbleTiles);

// 5. Add the following new tile to myScrabbleTiles:
/*
  { tile: 'F', score : 4 }
*/
myScrabbleTiles.push({ tile: "F", score: 4 });
console.log("Added tile F", myScrabbleTiles);
// 6. Complete this function. It needs to be given an array of tile objects. The function will use a for-loop and return the sum of all the scores in the given array.
function sumTiles(myScrabbleTiles) {
  let sumOf = 0;
  for (let i = 0; i < myScrabbleTiles.length; i++) {
    sumOf += myScrabbleTiles[i].score;
  }
  return sumOf;
}

let totalscore = sumTiles(myScrabbleTiles);
console.log('The total score is ' , totalscore);

// 7. Use the function above to get the total score for myScrabbleTiles and assign the value to a variable called "myScore".
let myscore = totalscore;
console.log('Therefore my score is ' , myscore);

// 8. Check whether or not your score is higher than the highScore.
// 8-1 If your score is higher, change highScore to the new high score.
if (myscore > highScore) {
  let myScore = highScore
  console.log(myscore, "which is my score is higher than the high score of", highScore);
} else {
  console.log('Whew, my score of ' + myscore + 'is not higher than the high score which is ' + highScore);
}; 



// used extension Prettier to clean my code. 


// DONE!

