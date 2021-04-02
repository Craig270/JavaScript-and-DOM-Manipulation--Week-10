"use strict";
/* IDs I am using(ID : description):
coffee-table : Single Table on page taking in first,last names, and favorite Coffee.
first-name  :  User Entered First Name.
last-name   :  Users Entered Last Name. 
favorite-coffee  : Users Entered Favorite Coffee. 
add-coffee-button   :  Button for submitting user entered data.

*/
let id = 0;

document.getElementById("add-coffee-button").addEventListener("click", () => {
  let table = document.getElementById("coffee-table");
  let row = table.insertRow(id - 1); //Trying to insert at bottom of Table
  row.setAttribute("id", `item-${id}`);
  row.insertCell(0).innerHTML = document.getElementById("first-name").value;
  row.insertCell(1).innerHTML = document.getElementById("last-name").value;
  row.insertCell(2).innerHTML = document.getElementById(
    "favorite-coffee"
  ).value;
  //   row.insertCell(3).appendChild(deleteButton(id++));
  document.getElementById("first-name").value = "";
  document.getElementById("last-name").value = "";
  document.getElementById("favorite-coffee").value = "";
});
