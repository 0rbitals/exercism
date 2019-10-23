export class Matrix {
  constructor(matrix) {
    this.matrix = matrix;
  }
  
  // Converts all elements in rows from strings to numbers
  convert(arr) {
    return arr.map((subarr) => {
      return subarr.map((str) => Number(str));
    });
  }

  // Get number of digits in the first row 
  // (I'm assuming all rows have the same number of digits)
  numberOfColumns() {
    return this.rows[0].length;
  }

  get rows() {
    const rows = [];
    let arr = this.matrix.split('\n');
    for (let i = 0; i < arr.length; i++) {
      rows.push(arr[i].split(' '));
    }
    return this.convert(rows);
  }

  get columns() {
    const columns = [];
    let temp = [];
    for (let i = 0; i < this.numberOfColumns(); i++) {
      for (let j = 0; j < this.rows.length; j++) {
        temp.push(this.rows[j][i]);
      }
      columns.push(temp);
      temp = [];
    }
    return columns;
  }
}