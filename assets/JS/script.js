// Global Variables
let currentDayDisplay = document.getElementById('currentDay');
let hoursContainer = document.getElementById('hoursList');
let thisDay = moment().format('LL');
currentDayDisplay.textContent = thisDay;

// Time prep for checking hours
let timeIncoming = moment.utc();
timeIncoming.local();
let thisHour = timeIncoming.hours();
console.log(thisHour)


let hoursAvailable = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm']
console.log(hoursAvailable);


function writeHours() {

    for (let i = 0; i < hoursAvailable.length; i++) {
        //  writes Elements
        let divEl = document.createElement('div');
        let divEl2 = document.createElement('div');
        let textArea = document.createElement('textarea');
        let buttonEl = document.createElement('button');
        let iconEl = document.createElement('i');
