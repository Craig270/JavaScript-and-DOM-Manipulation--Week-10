"use strict";
/* IDs I am using(ID : description):
coffee-table : Single Table on page taking in first,last names, and favorite Coffee.
first-name  :  User Entered First Name.
last-name   :  Users Entered Last Name. 
favorite-coffee  : Users Entered Favorite Coffee. 
add-coffee-button   :  Button for submitting user entered data.

*/

document.getElementById("add-coffee-button").addEventListener("click", () => {
  let table = document.getElementById("coffee-table");
  console.log(table.rows.length);
  let row = table.insertRow(table.rows.length); //Trying to insert at bottom of Table
  row.setAttribute("id", `item-${table.rows.length - 2}`);
  row.insertCell(0).innerHTML = document.getElementById("first-name").value;
  row.insertCell(1).innerHTML = document.getElementById("last-name").value;
  row.insertCell(2).innerHTML = document.getElementById(
    "favorite-coffee"
  ).value;
  //   row.insertCell(3).appendChild(deleteButton(id++));
  document.getElementById("first-name").value = "";
  document.getElementById("last-name").value = "";
  row.insertCell(3).appendChild(makeDeleteBtn(table.rows.length - 2));
  document.getElementById("favorite-coffee").value = "";
});

function makeDeleteBtn(id) {
  console.log(id);
  let btn = document.createElement("button"); // <button> </button>
  btn.className = "btn btn-primary"; //<button class="btn btn-primary"></button>
  btn.id = id; //<button class="btn btn-primary" id="3"></button>
  btn.innerHTML = "Delete"; //<button class="btn btn-primary" id="3"> Delete</button>
  btn.onclick = () => {
    document
      .getElementById(`item-${id}`)
      .parentNode.removeChild(document.getElementById(`item-${id}`));
  };

  return btn;
}
