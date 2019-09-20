export function getDayInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

export function getDaysArray(amount) {
    let days = [];
    for(var i = 1; i <= amount; i++) {
        days.push({ number: i, actualDate: new Date(2019, 8, i)});
    }
    return days;
} 

export function isWeekend(date) {
    return !(date.getDay() % 6);
}