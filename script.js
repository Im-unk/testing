function ageToBirthYear(age) {
    var currentYear = new Date().getFullYear();
    var birthYear = currentYear - age;
    return birthYear;
}


var result = ageToBirthYear(30);
if (result === new Date().getFullYear() - 29) {
    console.log('Test case 1 passed');
} else {
    console.log('Test case 1 failed');
}