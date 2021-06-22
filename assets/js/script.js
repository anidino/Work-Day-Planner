var currentDay = document.createElement("p");
// currentDay = moment().format("YYYY-MM-DD");
currentDay.innerHTML = moment().format("MMM DD, YYYY - hh:mm a");
timeNow.appendChild(currentDay) // Append to <p> with id of timeNow in the HTML doc
console.log(moment()); //console log because it's a good practice to do so

// WHEN USER CLICKS SAVE, THE TEXT VALUE IS OBTAINED
$(".saveBtn").on("click", function () {
    // OBTAIN TEXT VALUES FROM ROW CLASS AND ID 
    var textValue = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // SET TO SAVE IN LOCALSTORAGE
    localStorage.setItem(time, textValue);
});

//MAKE READABLE TIME VARIABLES BUT KEEP NECCESSARY NUMERIC VALUE
var nine = 9;
var ten = 10;
var eleven = 11;
var twelve = 12;
var one = 13;
var two = 14;
var three = 15;
var four = 16;
var five = 17;

// OBTAIN DATA FROM LOCALSTORAGE FOR EACH ROW USING ID AND CLASS NAME
$("#row9 .description").val(localStorage.getItem("row9"));

$("#row10 .description").val(localStorage.getItem("#row10"));

$("#row11 .description").val(localStorage.getItem("row11"));

$("#row12 .description").val(localStorage.getItem("row12"));

$("#row1 .description").val(localStorage.getItem("row1"));

$("#row2 .description").val(localStorage.getItem("row2"));

$("#row3 .description").val(localStorage.getItem("row3"));

$("#row4 .description").val(localStorage.getItem("row4"));

$("#row5 .description").val(localStorage.getItem("row5"));


// USE MOMENT.JS TO SET CURRENTHOUR VARIABLE TO THE HOUR
var currentHour = moment().format('H');

// MAKE IF/ELSE IF STATEMENTS FOR EACH BLOCK
// IF THE CURRENT HOUR IS LESS THAN 9'OCLOCK, ADD THE CLASS "FUTURE" TO THE TEXTAREA SO IT CAN BE STYLED ACCORDINGLY (GREEN)
// BUT IF THE CURRENT HOUR IS GREATER THAN NINE ADD THE CLASS "PAST" TO THE TEXTAREA SO IT CAN BE STYLED ACCORDINGLY (GREY)
// AND IF THE CURRENT HOUR IS EQUAL TO NINE ADD THE CLASS "PRESENT" TO THE TEXTAREA SO IT CAN BE STYLED ACCORDINGLY (REDD)
// DO THIS FOR EACH TIME BLOCK
if (currentHour < nine) {
    $("#text9").addClass("future");
} else if (currentHour > nine) {
    $("#text9").addClass("past");
} else if (currentHour = nine) {
    $("#text9").addClass("present");
}