
const currentDayElement = document.getElementById('currentDay');
const currentDay = dayjs().format('MMMM D, YYYY');
currentDayElement.textContent = currentDay;

document.addEventListener("DOMContentLoaded", function () {
  var currentHour = dayjs().format("H");

  var timeBlocks = document.getElementsByClassName("time-block");
  for (var i = 0; i < timeBlocks.length; i++) {
    var timeBlock = timeBlocks[i];
    var hour = timeBlock.id.split("-")[1];

    
    timeBlock.classList.remove("past");
    timeBlock.classList.remove("present");
    timeBlock.classList.remove("future");

    if (hour < currentHour) {
      timeBlock.classList.add("past");
    } else if (hour == currentHour) {
      timeBlock.classList.add("present");
    } else {
      timeBlock.classList.add("future");
    }
  }
});

document.addEventListener('DOMContentLoaded', function() {
  var currentHour = dayjs().hour();

  var timeBlocks = document.querySelectorAll('.time-block');

  timeBlocks.forEach(function(timeBlock) {
    var hour = parseInt(timeBlock.id.split('-')[1]);
    var description = timeBlock.querySelector('.description');
    var saveBtn = timeBlock.querySelector('.saveBtn');

    description.value = localStorage.getItem('event-' + hour);

    saveBtn.addEventListener('click', function() {
      var event = description.value;
      localStorage.setItem('event-' + hour, event);
    });
  });
});

