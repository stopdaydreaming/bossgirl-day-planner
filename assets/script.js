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

var todaysDate = $('#currentDay');
todaysDate.text(moment().format('dddd, MMMM, Do YYYY'));

var currHour = (moment().format('hA'));

var timeOfDay = [9, 10, 11, 12, 13, 14, 15, 16, 17];

for (var i = 0; i < timeOfDay.length; i++ ){
    var row = $('<div>');
    row.addClass('row time-block');
    var hour = $('<div>');
    var hourDisplay = moment().set("hour", timeOfDay[i]).format("hA");
    hour.text(hourDisplay);

    hour.addClass('hour col-1 mt-1');
    row.append(hour);

    var textArea = $('<textarea>'); 
    textArea.addClass('past description col-10');
    row.append(textArea);

    var button = $('<button>');
    button.append('<i class="far fa-save fa-2x"></i>');
    button.addClass('saveBtn col-1');
    button.on('click', saveEvent);
    row.append(button);
    
    $('.container').append(row);

    if(timeOfDay[i] == moment().hour()){
        $(hour).addClass(".present");
    }
    else if(i < moment().hour()){
        $(hour).addClass(".past");
    } 
    else{
        $(hour).addClass(".future");
    }
}

function saveEvent() {
    var hour = $(this)
        .siblings(".hour")
        .text();

    var textArea = $(this)
        .siblings(".description")
        .val();

    localStorage.setItem(hour, textArea);

    //if text area has content show content
    if(localStorage.getItem(hours[i]) !== null) {
        var saveEventData = localStorage.getItem(hours[i]);
        textArea.text(saveEventData);
    }

}






