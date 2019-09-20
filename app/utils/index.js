export function getDayInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

export function getDaysArray(amount) {
    let days = [];
    for(var i = 1; i <= amount; i++) {
        days.push({ number: i, actualDate: new Date(2019, 9, i)});
    }
    return days;
} 