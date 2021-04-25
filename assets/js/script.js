const startTime = () => {
  const renderCurrentDateTime = () => {
    const currentDateTime = moment().format("dddd MMM Do YYYY, HH:mm:ss");
    $("#currentDay").text(currentDateTime);
  };

  setInterval(renderCurrentDateTime, 1000);
};

const renderCalenderEvents = () => {
  const plannerEvents = JSON.parse(localStorage.getItem("plannerEvents"));

  if (plannerEvents !== null) {
    const currentHour = moment().hour();

    const updateTimeBlock = function () {
      const hour = parseInt($(this).attr("data-mytime"));

      if (hour === currentHour) {
        $(this).find("textarea").removeClass("past").addClass("present");
      }
      if (hour > currentHour) {
        $(this).find("textarea").removeClass("past").addClass("future");
      }

      const scheduledEvent = plannerEvents[hour];
      $(this).find("textarea").val(scheduledEvent);
    };

    $(".container .row").each(updateTimeBlock);
  } else {
    localStorage.setItem("plannerEvents", JSON.stringify({}));
  }
};

const onClick = function (event) {
  const plannerEvents = JSON.parse(localStorage.getItem("plannerEvents"));

  const target = $(event.target);

  if (target.is("button") || target.is("i")) {
    let key;
    let value;

    if (target.is("button")) {
      console.log("BUTTON");
      key = target.attr("id");
      value = target.parent().find("textarea").val();
    }

    if (target.is("i")) {
      console.log("ICON");
      key = target.parent().attr("id");
      value = target.parent().parent().find("textarea").val();
    }

    const newPlannerEvents = { ...plannerEvents, [key]: value };

    localStorage.setItem("plannerEvents", JSON.stringify(newPlannerEvents));
  }
};

const onReady = () => {
  startTime();

  renderCalenderEvents();

  $(".container").click(onClick);
};

$(document).ready(onReady);
