$(document).ready(function() {

    var todaysDate = $("#currentDay");
    todaysDate.text(moment().format("dddd, MMMM, Do YYYY"));

    var currHour = moment().hours();

    var timeOfDay = [9, 10, 11, 12, 13, 14, 15, 16, 17];

    for (var i = 0; i < timeOfDay.length; i++) {
    var row = $("<div>");
    row.addClass("row time-block");
    var hour = $("<div>");
    var hourDisplay = moment()
        .set("hour", timeOfDay[i])
        .format("hA");
    hour.text(hourDisplay);

    hour.addClass("hour col-1 mt-1");
    row.append(hour);

    var textArea = $("<textarea>");
    textArea.val(localStorage.getItem(hourDisplay));
    textArea.addClass("past description col-10");
    row.append(textArea);

    var button = $("<button>");
    button.append('<i class="fas fa-save fa-md"></i>');
    button.addClass("saveBtn col-1");
    button.on("click", saveEvent);
    row.append(button);

    $(".container").append(row);

    if (timeOfDay[i] === currHour) {
        textArea.addClass("present");
    } else if (timeOfDay[i] < currHour) {
        textArea.addClass("past");
    } else {
        textArea.addClass("future");
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
    }
});