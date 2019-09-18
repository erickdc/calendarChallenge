export function getDayInMonth(month, year) {
    return new Date(month, year, 0).getDate();
}

export function getDaysArray(amount) {
    let days = [];
    for(var i = 1; i <= amount; i++) {
        days.push(i);
    }
    console.log(days);
    return days;
} 