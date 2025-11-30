// Hash set, unique hashset for every single row
// Hash set, user for every single column for duplicates 


var board = 
[["1","2",".",".","3",".",".",".","."],
 ["4",".",".","5",".",".",".",".","."],
 [".","9","8",".",".",".",".",".","3"],
 ["5",".",".",".","6",".",".",".","4"],
 [".",".",".","8",".","3",".",".","5"],
 ["7",".",".",".","2",".",".",".","6"],
 [".",".",".",".",".",".","2",".","."],
 [".",".",".","4","1","9",".",".","8"],
 [".",".",".",".","8",".",".","7","9"]]

 const validSudoku = (board) => {
  let rows = new Array(9).fill(0);
  let cols = new Array(9).fill(0);
  let squares = new Array(9).fill(0);

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (board[r][c] === ".") continue;

      let val = parseInt(board[r][c]) - 1; // convert char to number 0–8

      const squareIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

      if (
        (rows[r] & (1 << val)) ||
        (cols[c] & (1 << val)) ||
        (squares[squareIndex] & (1 << val))
      ) {
        return false;
      }

      // Set the bit for this value
      rows[r] |= 1 << val;
      cols[c] |= 1 << val;
      squares[squareIndex] |= 1 << val;
    }
  }

  return true;
};

console.log(validSudoku(board)); // ✅ true