const m = moment();

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
