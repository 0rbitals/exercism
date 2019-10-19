export class Clock {
  constructor(hours, minutes='0') {
    this.time = new Date();
    this.time.setHours(hours);
    this.time.setMinutes(minutes);
  }

  toString() {
    return this.time.toString().slice(16,21);
  }

  plus(minutes) {
    this.time.setTime(this.time.getTime() + (minutes * 60 * 1000));
    return this;
  }

  minus(minutes) {
    this.time.setTime(this.time.getTime() - (minutes * 60 * 1000));
    return this;
  }

  equals(otherTime) {
    return this.toString() === otherTime.toString();
  }
}