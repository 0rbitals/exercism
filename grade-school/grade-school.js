export class GradeSchool {  
  constructor() {
    this.db = {};
  }
  
  roster() {
    Object.keys(this.db).sort().forEach((key) => {
      this.db[key].sort();
    });
    return this.db;
  }

  add(name, grade) {
    if (!this.db[grade]) {
      this.db[grade] = [name];
    } else {
      this.db[grade].sort().push(name);
    }
  }

  grade(grade) {
    if(!this.db[grade]) return [];
    return this.db[grade].sort();
  }
}