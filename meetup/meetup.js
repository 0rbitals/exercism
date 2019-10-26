export const meetupDay = (year, month, day, descriptor) =>  {
  let daysOfTheMonth = [];

  for (let i = 1; i <= 31; i++) {
    const currentDate = new Date(year, month, i);
    if (currentDate.toString().includes(day.slice(0,3)) && currentDate.getMonth() === month) {
      daysOfTheMonth.push(currentDate.getDate());
    }
  }

  if (descriptor !== 'last' && descriptor !== 'teenth') {
    const date = new Date (year, month, daysOfTheMonth[Number(descriptor.slice(0,1)) - 1]);
    if (date.toString() !== 'Invalid Date') {
      return date;
    } else {
      throw new Error('Invalid Date');
    }
  } else if (descriptor === 'last') {
    const date = new Date (year, month, daysOfTheMonth.pop());
    if (date.toString() !== 'Invalid Date') {
      return date;
    } else {
      throw new Error('Invalid Date');
    }
  } else { // handles 'teenths'
    const teenthDay = daysOfTheMonth.find((value) => value >= 13 && value <= 19);
    const date = new Date(year, month, teenthDay);
    if (date.toString() !== 'Invalid Date') {
      return date;
    } else {
      throw new Error('Invalid Date');
    }
  }
}