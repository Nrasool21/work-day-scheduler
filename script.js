const m = moment();
const timeBlocks = $(".container .row");
console.log(timeBlocks);
const timeBlockArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];
const past = $(".past");
const present = $(".present");
const future = $(".future");
const currentHour = moment().hour();

//console.log(timeBlockArray);

const getCurrentDateTime = () => {
  //get current date and time
  const dateTime = m.format("dddd MMM Do YYYY, HH:mm:ss");

  return dateTime;
};

const startTime = () => {
  const callBack = () => {
    const renderDateTime = getCurrentDateTime();
    $("#currentDay").text(renderDateTime);
  };

  const timerInterval = setInterval(callBack, 1000);
};

$("document").ready(startTime());

const UpdateTimeBlock = (event) => {
  const hour = parseInt($(this).attr("data-mytime"));
  if (hour < currentHour) {
        container.remove(future);
        container.append(past);
        console.log(UpdateTimeBlock);
  } else if (hour === currentHour) {
      container.remove(past);
      container.append(present);
  } else if (hour > currentHour) {
        container.remove(past);
        container.append(future);
  } else {
      
  }
};

timeBlockArray.forEach(UpdateTimeBlock);
