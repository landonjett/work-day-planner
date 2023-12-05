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

  // Add a listener for click events on the clear button
  $(".clearBtn").on("click", function () {
    // Get the parent time-block and clear the associated textarea
    $(this).siblings(".description").val("");
    // Clear the stored input from local storage
    var timeBlockId = $(this).parent().attr("id");
    localStorage.removeItem(timeBlockId);
  });









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
