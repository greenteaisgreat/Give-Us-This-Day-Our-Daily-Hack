/*
Write a function that logs to the console an nxn overlapping '+' and 'X' for a given 
number n where n must be an odd positive number. Note that each row of the star must
be 'n' characters long. Be sure to include any leading/trailing spaces per row.

Examples:
drawStar(1) ->
  +

drawStar(3) ->
  \|/
  -+-
  /|\

drawStar(5) ->
  \ | /
   \|/ 
  --+--
   /|\ 
  / | \

*/

const drawStar = (n: number): void => {
  //check for bad input; n MUST be an odd number!
  if (n < 1 || n % 2 === 0) return;
  if (n === 1) return console.log("+");

  //build the middle star row
  const mid = Math.floor(n / 2);
  const dashes = "-".repeat(mid);
  const midRow = dashes + "+" + dashes + "\n";

  //build the entire star
  const star = drawHalfStar(mid, "top") + midRow + drawHalfStar(mid, "bottom");

  console.log(star);
};

//helper function that returns a string representation of
//both top/bottom halves of the star
const drawHalfStar = (mid: number, half: string = "top"): string => {
  //depending on which half-orientation, slash1 & slash2 will alternate
  const slash1 = half === "top" ? "\\" : "/";
  const slash2 = half === "top" ? "/" : "\\";

  let halfStar = "";
  let i = 0;

  while (i < mid) {
    //number of inner/outer spaces dependent on half-orientation
    const numOuter = half === "top" ? i : mid - i - 1;
    const numInner = half === "top" ? mid - i - 1 : i;
    const outerSpaces = " ".repeat(numOuter);
    const innerSpaces = " ".repeat(numInner);

    halfStar += outerSpaces + slash1 + innerSpaces;
    halfStar += "|";
    halfStar += innerSpaces + slash2 + outerSpaces;

    //do not add newline for the last row in the bottom half of star
    if (i !== mid - 1 || half === "top") halfStar += "\n";
    i++;
  }
  return halfStar;
};

drawStar(3);
