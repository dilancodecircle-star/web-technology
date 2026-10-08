const date = new Date("Mon Oct 10 2026").getDay();

console.log(date)
if (date == 0 || date == 6) {
    document.write("to day is weekend");
}
else {
    window.alert("today is weekday");
}