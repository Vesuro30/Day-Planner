// 
//  This script runs behind an HTML page to display the users daily tasks
//  Upon load or refresh the hour blocks will change color dependant on whether
//  the tasks are in the past, present or future.
//  The user will input tasks in the task field and will then be able to save
//  the tasks to local storage.
//  Upon load or refresh the script will read local storage and install the 
//  users tasks in the designated hour block.

//  Initialize variables
var $currentDayP = $("p#currentDay");
var colorPast = "#CCC";
var colorFuture = "#6cea3a";
var colorPresent = "#ea2525";





$currentDayP.html(moment().format("MMM Do, YYYY h:mm a"));
setInterval(function()
  {
    $currentDayP.html(moment().format("MMM Do, YYYY h:mm a"));
  
  }, 1000);




colorTimeslots();







  function colorTimeslots()
  {
    //  color present div
    var currentHour = moment().format("H");
    $("section#h" + currentHour + " div.task").css("background-color", colorPresent);
    //  color future divs
    for (let i = currentHour * 1 + 1; i < 18; i++) 
    {
      $("section#h" + i + " div.task").css("background-color", colorFuture);
      
    }



    console.log(currentHour);
  }




  function populateTasks()
  {

  }


  function saveTasks()
  {

  }