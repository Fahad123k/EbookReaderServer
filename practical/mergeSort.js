

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));




}

function merge(left, right) {
    const result = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) 
        { result.push(left.shift()) }
        else {
            result.push(right.shift());
        }
    }
    return [...result, ...left, ...right];
}


const arr = [4, 1, 5, 2, 6, 3, 7, 8];
// console.log(mergeSort(arr));



const grid = [

  ['I', 'B', 'C', 'A', 'L', 'K', 'A'],

  ['D', 'R', 'F', 'C', 'A', 'E', 'A'],

  ['G', 'H', 'O', 'E', 'L', 'A', 'D'],

];
 
function findStr(grid) {

  let str = "";

  let rows = grid.length;

  let cols = grid[0].length;

  let currentRow=0;

  while(currentRow<cols*rows){

    for(let r=0;r<rows;r++){

      for(let c=currentRow;c<cols;c++){

      if(r==c-currentRow && str[str.length-1]!=grid[r][c])

        str += grid[r][c]; 

      }

    }

    currentRow +=rows-1;

  }

  str = str.slice(0,-1);

  return str;

}

const str = findStr(grid);

console.log(str);

