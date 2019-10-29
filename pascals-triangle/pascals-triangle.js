export class Triangle {
  constructor(numberOfRows) {
    this.numberOfRows = numberOfRows;
  }

  constructRows() {
    let rows = [];
    for (let i = 0; i < this.numberOfRows; i++) {
      if (rows.length < 1) {
        rows.push([1]);
      } else if (rows.length < 2) {
        rows.push([1, 1]);
      } else {
        let temp = [];
        rows[i-1].map((val, index, arr) => {
          if (arr[index-1]) {
            temp.push(val + arr[index-1]);
          }
          if (index === rows[i-1].length - 1) {
            temp.unshift(1);
            temp.push(1);
            rows.push(temp);
          }
        });
      }
    }
    return rows;
  }

  get lastRow() {
    return this.rows[this.rows.length - 1];
  }

  get rows() {
    return this.constructRows();
  }
}