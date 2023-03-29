const userTableBody = document.getElementById("user-table");
const technicianTableBody = document.getElementById("technician-table");
const userRows = userTableBody.getElementsByTagName("tr");
const technicianRows = technicianTableBody.getElementsByTagName("tr");
const userModal = document.getElementById("user-modal");
const technicianModal = document.getElementById("technician-modal");
document.getElementById("search-bar").addEventListener("keyup", filterUsers);
document
  .getElementById("user-modal-close")
  .addEventListener("click", closeUserModal);
document
  .getElementById("technician-modal-close")
  .addEventListener("click", closeTechnicianModal);

const links = {
  jobsLink: document.getElementById("job-link"),
  customerLink: document.getElementById("customer-link"),
  technicianLink: document.getElementById("technician-link"),
  inventoryLink: document.getElementById("inventory-link"),
};
const sections = {
  jobSection: document.getElementById("jobs-section"),
  customerSection: document.getElementById("customer-section"),
  technicianSection: document.getElementById("technician-section"),
  inventorySection: document.getElementById("inventory-section"),
};
const buttons = document.getElementsByClassName("assign-technician");

// add event listeners
links.jobsLink.addEventListener("click", openJobList);
links.customerLink.addEventListener("click", openCustomerList);
links.technicianLink.addEventListener("click", openTechnicianList);
links.inventoryLink.addEventListener("click", openInventory);

for (const button of buttons) {
  button.addEventListener("click", assignTechnician);
}

// add event listeners to each user row
for (let i = 0; i < userRows.length; i++) {
  const row = userRows[i];
  row.addEventListener("click", selectUserRow);
  row.addEventListener("dblclick", openUserModal);
}

// add event listeners to each technician row
for (let i = 0; i < technicianRows.length; i++) {
  const row = technicianRows[i];
  row.addEventListener("click", selectTechnicianRow);
  row.addEventListener("dblclick", openTechnicianModal);
}

// jobs view

function openJobList(event) {
  setListStyle(event.target);
  hideSections();
  showSection(sections.jobSection);
}
function openCustomerList(event) {
  setListStyle(event.target);
  hideSections();
  showSection(sections.customerSection);
}
function openTechnicianList(event) {
  setListStyle(event.target);
  hideSections();
  showSection(sections.technicianSection);
}
function openInventory(event) {
  setListStyle(event.target);
  hideSections();
  showSection(sections.inventorySection);
}

// add background color to the currently selected list item
function setListStyle(element) {
  for (const [key, value] of Object.entries(links)) {
    value.style.backgroundColor = "";
  }

  element.style.backgroundColor = "blue";
}

function hideSections() {
  for (const [key, value] of Object.entries(sections)) {
    value.classList.remove("block");
    value.classList.add("hidden");
  }
}

function showSection(section) {
  section.classList.remove("hidden");
  section.classList.add("block");
}

async function assignTechnician(event) {
  console.log(event.target.previousElementSibling);
  const technician = event.target.previousElementSibling.value;
  const response = await fetch("/api/workshop/technician", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      technician,
    },
  });
}

// customer view
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
  userModal.style.display = "flex";
  document.body.style.overflow = "hidden";
  document.body.style.paddingRight = "15px";
}

function closeUserModal() {
  userModal.style.display = "none";
}

function selectUserRow(event) {
  event.preventDefault();
  for (const row of userRows) {
    row.style.backgroundColor = "white";
  }
  event.currentTarget.style.backgroundColor = "grey";
}

// technician view

// calls API to get data about the individual technician's details and job history
async function openTechnicianModal(event) {
  const rowId = event.currentTarget.id.split("-")[1];
  const response = await fetch(`/api/workshop/technician/:${rowId}`);

  technicianModal.style.display = "flex";
  document.body.style.overflow = "hidden";
  document.body.style.paddingRight = "15px";
}

function closeTechnicianModal() {
  technicianModal.style.display = "none";
}

function selectTechnicianRow(event) {
  event.preventDefault();
  for (const row of technicianRows) {
    row.style.backgroundColor = "white";
  }
  event.currentTarget.style.backgroundColor = "grey";
}
// inventory view

//#endregion

function init() {
  setListStyle(links.jobsLink);
}

init();

console.log(mechanics);
