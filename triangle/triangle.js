export class Triangle {
  constructor(x, y, z) {
    this.arr = [x, y, z].sort((a,b) => a - b);
  }

  kind() {
    if (this.arr.reduce((acc, curr) => acc + curr) > 0) {
      if (this.arr[2] <= this.arr[0] + this.arr[1]) {
        if (this.arr[0] === this.arr[2]) {
          return 'equilateral';
        } else if (this.arr[0] !== this.arr[1] && this.arr[1] !== this.arr[2]) {
          return 'scalene';
        } else {
          return 'isosceles';
        }
      } else {
        throw new Error('violating triangle inequality');
      }
    } else {
      throw new Error('triangle with no size');
    }
  }
}