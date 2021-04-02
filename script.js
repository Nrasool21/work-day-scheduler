const timeBlockArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];
const past = $(".past");
const present = $(".present");
const future = $(".future");
const buttonElement = $(".saveBtn");
const currentHour = moment().hour();

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
    const scheduledEvent = plannerEvents[timeBlocks];
    console.log(plannerEvents, timeBlocks);
  } else {
    localStorage.setItem("plannerEvents", JSON.stringify({}));
  }
};

const onReady = () => {
  console.log("I am ready!");

  renderCalenderEvents();
};

$(document).ready(onReady);

const timeBlocks = $(".container .row");

const UpdateTimeBlock = () => {
   
  const hour = parseInt($(this).attr("data-mytime"));
  if (hour < currentHour) {
    $(this).find(textarea).removeClass("future").addClass("past");
   
  }
  if (hour === currentHour) {
    $(this).find(textarea).removeClass("past").addClass("present");
    
  }
  if (hour > currentHour) {
    $(this).find(textarea).removeClass("past").add(future);
    console.log(UpdateTimeBlock);
  }
  
};

timeBlocks.each(UpdateTimeBlock);



const addEventListenerOnBtn = (forEachBtn) => {
  forEachBtn.addEventListener("click, saveText");
  console.log(addEventListenerOnBtn);
};

//buttonElement.forEach(addEventListenerOnBtn);
