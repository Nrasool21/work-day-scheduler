const timeBlocks = $(".container .row");
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

const UpdateTimeBlock = (event) => {
  const hour = parseInt($(this).attr("data-mytime"));
  if (hour < currentHour) {
    container.remove(future);
    container.append(past);
    console.log(UpdateTimeBlock);
  }
  if (hour === currentHour) {
    container.remove(past);
    container.append(present);
  }
  if (hour > currentHour) {
    container.remove(past);
    container.append(future);
  }
};

timeBlockArray.forEach(UpdateTimeBlock);

const saveText = () => {};

const addEventListenerOnBtn = (forEachBtn) => {
  forEachBtn.addEventListener("click, saveText");
  console.log(addEventListenerOnBtn);
};

buttonElement.forEach(addEventListenerOnBtn);
