"use strict";



var tDay = new Date();

document.getElementById("calendar").innerHTML = gymCalendar(tDay);

/* Function to generate the calendar table */
function gymCalendar(date) {
   var calCode = "<table id='calendar_table'>";
   calCode += calCaption(date);
   calCode += calWeek();
   calCode += calDays(date);
   calCode += "</table>";
   return calCode;
}

/*Function to write the calendar caption */
function calCaption(date) {
   
   var month = ["January", "February", "March", "April",
                     "May", "June", "July", "August", "September",
                     "October", "November", "December"];
   
   //Determine the current month
   var currentMonth = date.getMonth();

   //Determine the current year 
   var currentYear = date.getFullYear();

   //write the caption
   return "<caption>" + month[currentMonth] + " " + currentYear + "</caption>";
}

function calWeek() {

   //Array of weekday abbreviations
   var dayName = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
   var rowSetup = "<tr>";

   //Loop through the dayName array
   for (var i = 0; i < dayName.length; i++) {
    rowSetup += "<th class='calendar_weekdays'>" + dayName[i] + "</th>";
   }

   rowSetup += "</tr>";
   return rowSetup;
}

/*Function to calculate the number of days in the month */
function monthDays(date){
   //Array of days in each month
   var dayNum = [31,28,31,30,31,30,31,31,30,31,30,31];

   //Extract the four digit year and month value
   var currentYear = date.getFullYear();
   var currentMonth = date.getMonth();

   //Revise the days in February for leap years
   if (currentYear % 4 === 0) {
      if ((currentYear % 100 !== 0) || (currentYear % 400 === 0)) {
        dayNum[1] = 29;
      }
   }

   //Return the number of days for the current month
   return dayNum[currentMonth];
}

/*Function to write table rows for each day of the month */
function calDays(date){
   //Determine the starting day of the month
   var day = new Date(date.getFullYear(), date.getMonth(), 1);
   var weekDay = day.getDay();

   //Write blank cells preceding the staring day
   var pageSetup = "<tr>";
   for (var i = 0; i < weekDay; i++){
    pageSetup += "<td></td>";
   }

   // Write cells for each day of the month 
   var totalDays = monthDays(date);
   var highlightDay = date.getDate();
   for (var i = 1; i <= totalDays; i++){
      day.setDate(i);
      weekDay = day.getDay();

      if (weekDay === 0) pageSetup += "<tr>";
      if (i === highlightDay){
        pageSetup += "<td class='calendar_dates' id='calendar_today'>" + i + gymClass[i] + "</td>";
      }
      else{
        pageSetup += "<td class='calendar_dates'>" + i + gymClass[i] + "</td>";
      }
   
      if (weekDay === 6) pageSetup += "</tr>";
   }

   return pageSetup;
}