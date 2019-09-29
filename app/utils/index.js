export function getDayInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

export function getDaysArray(year, month, amount) {
  const days = [];
  for (let i = 1; i <= amount; i += 1) {
    days.push({ number: i, actualDate: new Date(year, month, i) });
  }
  return days;
}

export function getNextEmptyDay(year, month, amount) {
  const days = [];
  for (let i = 1; i <= amount; i += 1) {
    days.push({ number: i, actualDate: new Date(year, month + 1, i) });
  }
  return days;
}

export function isWeekend(date) {
  return !(date.getDay() % 6);
}

export function getUnixTimestamp(date) {
  return Math.round(date.getTime() / 1000);
}
