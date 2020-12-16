// # 05 Third-Party APIs: Work Day Scheduler

// ## Your Task

// Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

// You'll need to use a library like [Moment.js](https://momentjs.com/) to work with dates and times. `Moment.js` has historically been the most popular date/time library but is no longer supported by its developers. However, you can still use it for this project, or you can look into one of the following alternatives:

//   * [Luxon](https://moment.github.io/luxon/)

//   * [Day.js](https://day.js.org/)

//   * [date-fns](https://date-fns.org/)

//   * [js-Joda](https://js-joda.github.io/js-joda/)

// Whichever library you choose, be sure to read the documentation carefully!


// ## User Story

// ```
// AS AN employee with a busy schedule
// I WANT to add important events to a daily planner
// SO THAT I can manage my time effectively
// ```


// ## Acceptance Criteria

// ```
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
// ```
// var btnIcon = "<i class="far fa-save"></i>"

var todaysDate = $('#currentDay');
todaysDate.text(moment().format('dddd, MMMM, Do YYYY'));

var currTime = (moment().format('HH'));
// console.log(currTime);

var timeOfDay = ['9', '10', '11', '12', '13', '14', '15', '16', '17'];

for (var i = 0; i < timeOfDay.length; i++ ){
    var row = $('<div>');
    row.addClass('row time-block');
    
        // 3 steps again for hours
        var hour = $('<div>');
        hour.text(timeOfDay[i]);
        hour.addClass('hour col-1');
        row.append(hour);
        //compare hour to current time of day, loop (ex: 9 < 15, 'past' class)
        //
        //if statement
    
        // 3 steps again for text area
        var textArea = $('<textarea>'); 
        textArea.addClass('past description col-10');
        row.append(textArea);

        // 3 steps again for button
        var button = $('<button>');
        button.append('<i class="far fa-save fa-2x"></i>');
        button.addClass('saveBtn col-1');
        button.on('click', saveEvent);
        row.append(button);
    
    $('.container').append(row);
}

function saveEvent() {
    // console.log("saved");
    
    // get hour value from sibling element
        // look at current element clicked
        var hour = $(this)
        // get the sibling element that is the hour block
        .siblings(".hour")
        // get text value from hour block div
        .text();
        // console.log(hour);
    // get text area value from sibling element
        // look at current element clicked
        // get the sibling element that is the text area
        // get text value from text area
        var textArea = $(this).siblings(".description").val();
        // console.log(textArea);
    //
    localStorage.setItem(hour, textArea);
}







