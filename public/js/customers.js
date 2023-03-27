// filter runinng on search bar
function filterUsers() {
  const input = document.getElementById("search-bar");
  let filterText = input.value.toUpperCase();
  // Loop through all list items, and hide those who don't match the search query
  for (let i = 0; i < userRows.length; i++) {
    let row = userRows[i].getElementsByTagName("td");

    // get the text values from each cell and set to uppercase
    let textValues = [];
    for (const cell of row) {
      textValues.push(cell.innerText.toUpperCase());
    }

    // iterate over each value and check whether the current text value is in the list
    for (const value of textValues) {
      console.log(textValues);
      console.log(value.toUpperCase().indexOf(filterText));
      if (value.toUpperCase().indexOf(filterText) > -1) {
        userRows[i].style.display = "";
        break;
      } else {
        userRows[i].style.display = "none";
      }
    }
  }
}

function openUserModal(event) {
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
  document.body.style.paddingRight = "15px";
}

function closeUserModal() {
  modal.style.display = "none";
}

function selectRow(event) {
  event.preventDefault();
  for (const row of userRows) {
    row.style.backgroundColor = "white";
  }
  event.currentTarget.style.backgroundColor = "grey";
}

const tableBody = document.getElementById("user-table");
const userRows = tableBody.getElementsByTagName("tr");
const modal = document.getElementById("modal");
// add event listeners to each user row
for (let i = 0; i < userRows.length; i++) {
  const row = userRows[i];
  row.addEventListener("click", selectRow);
  row.addEventListener("dblclick", openUserModal);
}

document.getElementById("search-bar").addEventListener("keyup", filterUsers);

document
  .getElementById("close-button")
  .addEventListener("click", closeUserModal);
