const past = $(".past");
const present = $(".present");
const future = $(".future");
const buttonEl = $(".saveBtn");

const getCurrentDateTime = () => {
  //get current date and time
  const dateTime = moment().format("dddd MMM Do YYYY, HH:mm:ss");

  return dateTime;
};

const startTime = () => {
  const setCurrentDateTime = () => {
    const renderDateTime = getCurrentDateTime();
    $("#currentDay").text(renderDateTime);
  };

  setInterval(setCurrentDateTime, 1000);
};

const renderCalenderEvents = () => {
  const plannerEvents = JSON.parse(localStorage.getItem("plannerEvents"));

  if (plannerEvents !== null) {
    const currentHour = moment().hour();
    const updateTimeBlock = function () {
      const hour = parseInt($(this).attr("data-mytime"));
      //control the textarea coloring with time
      if (hour === currentHour) {
        $(this).find("textarea").removeClass("past").addClass("present");
      }
      if (hour > currentHour) {
        $(this).find("textarea").removeClass("past").addClass("future");
      }
      //populating textarea with text dynamically
      const scheduledEvent = plannerEvents[hour];
      $(this).find("textarea").val(scheduledEvent);
    };
    const timeBlocks = $(".container .row");

    timeBlocks.each(updateTimeBlock);
  } else {
    localStorage.setItem("plannerEvents", JSON.stringify({}));
  }
};

const onClick = function (event) {
  const plannerEvents = JSON.parse(localStorage.getItem("plannerEvents"));

  const target = $(event.target);
  const currentTarget = $(event.currentTarget);

  if (target.is("button")) {
    const key = target.attr("id");
    const value = target.parent().find("textarea").val();

    const newText = { ...plannerEvents, [key]: value };

    localStorage.setItem("plannerEvents", JSON.stringify(newText));
  }
};

const onReady = () => {
  //set event listener on container
  $(".container").click(onClick);

  startTime(); 

  renderCalenderEvents();
};

$(document).ready(onReady);
