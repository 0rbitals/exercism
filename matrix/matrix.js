export class Matrix {
  constructor(matrix) {
    this.matrix = matrix.split('\n');
  }

  constructRows(matrix) {
    return matrix.map((el, index, arr) => arr[index].split(' ').map((el) => Number(el)));
  }

  get rows() {
    return this.constructRows(this.matrix);
  }

  constructColumns(rows) {
    return rows[0].map((v, i) => rows.map(row => row[i]));
  }

  get columns() {
    return this.constructColumns(this.rows);
  }
    
}

const test = new Matrix('1 2 3 4\n5 6 7 8\n9 8 7 6');
console.log(test.rows);
console.log(test.columns);