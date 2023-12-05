// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // Display the current date in the header of the page
  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));

  // Add a listener for click events on the save button
  $(".saveBtn").on("click", function () {
    // Get the id of the time-block containing the clicked button
    var timeBlockId = $(this).parent().attr("id");

    // Get the user input from the textarea within the same time-block
    var userInput = $(this).siblings(".description").val();

    // Perform validation - check if the user input is not empty
    if (userInput.trim() !== "") {
      // Save the user input in local storage using the time-block id as a key
      localStorage.setItem(timeBlockId, userInput);
    } else {
      // Provide feedback to the user about empty input or handle it in your preferred way
      alert("Please enter a valid event before saving.");
    }
  });

  // Apply the past, present, or future class to each time block
  $(".time-block").each(function () {
    // Get the hour from the time-block id
    var hour = parseInt($(this).attr("id").split("-")[1]);

    // Get the current hour in 24-hour format using Day.js
    var currentHour = dayjs().format("H");

    // Compare the time-block hour with the current hour and apply classes accordingly
    if (hour < currentHour) {
      $(this).addClass("past");
    } else if (hour == currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }

    // Get user input from local storage and set the textarea value
    var storedInput = localStorage.getItem($(this).attr("id"));
    if (storedInput) {
      $(this).find(".description").val(storedInput);
    }
  });
});









