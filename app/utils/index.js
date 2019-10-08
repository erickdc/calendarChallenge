import moment from 'moment';
export const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
export const weekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export function getDayInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

Date.prototype.addDays = function(days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

export function getDaysArray(startDate, endDate, isActualMonth) {
  var dateArray = new Array();
  var currentDate = startDate;
  while (currentDate <= endDate) {
    const currentDay = new Date(currentDate);
    dateArray.push({
      number: currentDay.getDate(),
      actualDate: currentDay,
      isActualMonth,
    });
    currentDate = currentDate.addDays(1);
  }
  return dateArray;
}

export function isWeekend(date) {
  return date.getDay() % 6 == 0;
}

export function getUnixTimestamp(date) {
  return Math.round(date.getTime() / 1000);
}

export function getCurrentCalendarHeader(date) {
  return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
}

export function getPreviousMonthDays(year, month) {
  const days = [];
  const firstDayActualMonth = new Date(year, month, 1);
  let lastDayPreviousMonth = new Date(year, month, 0);
  const amount = firstDayActualMonth.getDay();
  for (let i = 0; i < amount; i += 1) {
    days.push({
      number: lastDayPreviousMonth.getDate(),
      actualDate: new Date(lastDayPreviousMonth.getTime()),
      isActualMonth: false,
    });
    lastDayPreviousMonth.setDate(lastDayPreviousMonth.getDate() - 1);
  }
  return days;
}

export function getNextMonthDays(year, month, amount) {
  const days = [];
  const nextMonth = month + 1;
  for (let i = 0; i < amount; i += 1) {
    const day = i + 1;
    days.push({
      number: day,
      actualDate: new Date(year, nextMonth, day),
      isActualMonth: false,
    });
  }
  return days;
}
