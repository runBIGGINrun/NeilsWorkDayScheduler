// Global Variables
let currentDayDisplay = document.getElementById('currentDay');
let hoursContainer = document.getElementById('hoursList');
let thisDay = moment().format('LL');
currentDayDisplay.textContent = thisDay;
