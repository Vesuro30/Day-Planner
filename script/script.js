// //
// //
var $currentDayP = $("p#currentDay");

$currentDayP.html(moment().format("MMM Do, YYYY h:m:ss a"));
setInterval(function()
  {
    $currentDayP.html(moment().format("MMM Do, YYYY h:m:ss a"));
  
  }, 1000);