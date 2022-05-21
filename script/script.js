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
var sectionDivTaskEl = $("section div.task");
var userInputTasks = $("section div.task textarea");
var saveButton  = $("section div.save");
var saveConfirm = $("#saveConfirm");
var allTasks = [];
//  Set global variables for the colors used to indicate whether a 
//  task is in the past, present or future
var colorPast = "#CCC";
var colorFuture = "#6cea3a";
var colorPresent = "#ea2525";




//  Get and display the current date and time
$currentDayP.html(moment().format("MMM Do, YYYY h:mm a"));
setInterval(function()
  {
    $currentDayP.html(moment().format("MMM Do, YYYY h:mm a"));
  
  }, 1000);


console.log(allTasks)

colorTimeslots();







  function colorTimeslots()
  {
    //  color present div red
    var currentHour = moment().format("H");
    $("section#h" + currentHour + " div.task").css("background-color", colorPresent);
    //  color future divs green
    for (let i = currentHour * 1 + 1; i < 18; i++) 
    {
      $("section#h" + i + " div.task").css("background-color", colorFuture);
      
    }
  }



  //  This function will read the local storage and get the values from a string and convert it
  //  to an array to populate the saved task fields.
  function populateTasks()
  {
    allTasks = JSON.parse(localStorage.getItem("savedUserTasks"));
    console.log(allTasks);

    for (let i = 0; i < 9; i++) 
    {
      $("section#h" + Number(i + 9) + " textarea").val(allTasks[i]);
      
    }
  };


  //  Add click handler to the save "buttons"
  saveButton.click(function()
  {
    saveTasks();
    saveConfirm.css("display", "block")
    setTimeout(function()
    {
      saveConfirm.css("display", "none");
    }, 2500)
  });


  //  This function takes the task fields as an array and converts the information to 
  //  a string to store in local storage
  function saveTasks()
  {
    allTasks = [];
    for (let i = 0; i < 9; i++) 
    {
      allTasks[i] = $("section#h" + Number(i + 9) + " textarea").val();
      console.log(allTasks);
 
    }

    localStorage.setItem("savedUserTasks", JSON.stringify(allTasks));

  }

  populateTasks();