// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  //get the date with Moment
  console.log(moment().format("dddd, MMMM Do"))
  //put the date on the page
  $("#currentDay").text(moment().format("dddd, MMMM Do"))


  //get current hour
  var currentHour = moment().hours();
  console.log(currentHour)

  //for each loop over the hour blocks
  $(".time-block").each(function () {
      $(this).removeClass("past present future");
      //get the value from the html for the current hour block
      let blockHour = parseInt($(this).attr("id").split("-")[1]);
      console.log(blockHour)
      //check and see if the currentHour > or < blockHour
      //add css styling to the text areas
      if (currentHour === blockHour) {
          $(this).addClass("present");
      } else if (currentHour < blockHour) {
          $(this).addClass("future");
      } else {
          $(this).addClass("past");
      }
  })

  $(".saveBtn").on("click", function() {
      //grab the user inputs that they put in
      var userTask = $(this).siblings(".description").val();
      var timeBlock = $(this).parent().attr("id");

      //console log the info
      console.log("task = ", userTask);
      console.log("time-slot =", timeBlock);

      // save the user inputs and change them to strings
      localStorage.setItem(timeBlock, JSON.stringify(userTask))
    });

    //access the user's tasks after refresh
    $('#hour-9 .description').val(JSON.parse(localStorage.getItem("hour-9")));
    $('#hour-10 .description').val(JSON.parse(localStorage.getItem("hour-10")));
    $('#hour-11 .description').val(JSON.parse(localStorage.getItem("hour-11")));
    $('#hour-12 .description').val(JSON.parse(localStorage.getItem("hour-12")));
    $('#hour-13 .description').val(JSON.parse(localStorage.getItem("hour-13")));
    $('#hour-14 .description').val(JSON.parse(localStorage.getItem("hour-14")));
    $('#hour-15 .description').val(JSON.parse(localStorage.getItem("hour-15")));
    $('#hour-16 .description').val(JSON.parse(localStorage.getItem("hour-16")));
    $('#hour-17 .description').val(JSON.parse(localStorage.getItem("hour-17")));
});
$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });
  