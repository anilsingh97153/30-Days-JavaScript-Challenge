function solveNQueens(n) {
    const results = [];
    const board = Array(n).fill().map(() => Array(n).fill('.'));
    const cols = new Set(); // Columns with queens
    const diag1 = new Set(); // Main diagonals with queens
    const diag2 = new Set(); // Anti-diagonals with queens
  
    function placeQueens(row) {
      if (row === n) {
        results.push(board.map(row => row.join('')));
        return;
      }
      
      for (let col = 0; col < n; col++) {
        const d1 = row - col;
        const d2 = row + col;
        if (cols.has(col) || diag1.has(d1) || diag2.has(d2)) {
          continue;
        }
  
        board[row][col] = 'Q';
        cols.add(col);
        diag1.add(d1);
        diag2.add(d2);
  
        placeQueens(row + 1);
  
        board[row][col] = '.';
        cols.delete(col);
        diag1.delete(d1);
        diag2.delete(d2);
      }
    }
  
    placeQueens(0);
    return results;
  }
  
  // Example usage:
  const n = 4;
  console.log(solveNQueens(n));
  