const m = moment();
const timeBlocks = $(".container .row");
console.log(timeBlocks);
const timeBlockArray = [9,10,11,12,13,14,15,16,17]; 
const past = $(".past");
const present = $(".present");
const future = $(".future");

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

    if (12 === getCurrentDateTime()) {
      
    }
 //console.log(event)
  //get current hour
};


timeBlockArray.forEach(UpdateTimeBlock);
