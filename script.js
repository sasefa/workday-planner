// Get current date
var currentDate = dayjs().format("dddd, MMMM D");

// Display current date on the page
document.getElementById("currentDay").textContent = currentDate;

// Update time blocks based on current hour
function updateTimeBlocks() {
  var currentHour = dayjs().format("H");

  // Loop through each time block
  var timeBlocks = document.getElementsByClassName("time-block");
  for (var i = 0; i < timeBlocks.length; i++) {
    var timeBlock = timeBlocks[i];
    var hour = parseInt(timeBlock.id.split("-")[1]);

    // Check if the hour is in the past, present, or future
    if (hour < currentHour) {
      timeBlock.classList.add("past");
      timeBlock.classList.remove("present", "future");
    } else if (hour == currentHour) {
      timeBlock.classList.add("present");
      timeBlock.classList.remove("past", "future");
    } else {
      timeBlock.classList.add("future");
      timeBlock.classList.remove("past", "present");
    }
  }
}

// Event listener for save buttons
var saveButtons = document.getElementsByClassName("saveBtn");
for (var i = 0; i < saveButtons.length; i++) {
  saveButtons[i].addEventListener("click", saveEvent);
}

// Save event text in local storage
function saveEvent(event) {
  var timeBlock = event.target.closest(".time-block");
  var hour = timeBlock.id.split("-")[1];
  var eventText = timeBlock.querySelector(".description").value;

  // Save the event in local storage
  localStorage.setItem(hour, eventText);
}

// Load saved events from local storage
function loadEvents() {
  var timeBlocks = document.getElementsByClassName("time-block");
  for (var i = 0; i < timeBlocks.length; i++) {
    var timeBlock = timeBlocks[i];
    var hour = timeBlock.id.split("-")[1];
    var savedEvent = localStorage.getItem(hour);

    // Set the event text in the time block
    if (savedEvent) {
      timeBlock.querySelector(".description").value = savedEvent;
    }
  }
}

// Call the necessary functions on page load
window.addEventListener("load", function () {
  updateTimeBlocks();
  loadEvents();
});
