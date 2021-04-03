const past = $(".past");
const present = $(".present");
const future = $(".future");
const buttonElement = $(".saveBtn");
const currentHour = moment().hour();
const timeBlocks = $(".container .row");

//console.log(timeBlockArray);

const getCurrentDateTime = () => {
  //get current date and time
  const dateTime = moment().format("dddd MMM Do YYYY, HH:mm:ss");

  return dateTime;
};

const startTime = () => {
  const callBack = () => {
    const renderDateTime = getCurrentDateTime();
    $("#currentDay").text(renderDateTime);
  };

  setInterval(callBack, 1000);
};

$("document").ready(startTime);

const renderCalenderEvents = () => {
  const plannerEvents = JSON.parse(localStorage.getItem("plannerEvents"));

  if (plannerEvents !== null) {
   

    const UpdateTimeBlock = () => {
      const hour = parseInt($(this).attr("data-mytime"));

      if (hour === currentHour) {
        $(this).find(textarea).removeClass("past").addClass("present");
        console.log("present");
      }
      if (hour > currentHour) {
        $(this).find(textarea).removeClass("past").add(future);
      }
       const scheduledEvent = plannerEvents[timeBlocks];
       $(this).text(scheduledEvent);
    };

    timeBlocks.each(UpdateTimeBlock);
  } else {
    localStorage.setItem("plannerEvents", JSON.stringify({11:"Event that already happened", 12:"Current hour"}));
  }
};

const onReady = () => {
  //console.log("I am ready!");

  renderCalenderEvents();
};

$(document).ready(onReady);


const addEventListenerOnBtn = (forEachBtn) => {
  forEachBtn.addEventListener("click, saveText");
  console.log(addEventListenerOnBtn);
};

//buttonElement.forEach(addEventListenerOnBtn);
