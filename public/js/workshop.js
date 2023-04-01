const userTableBody = document.getElementById("user-table");
const technicianTableBody = document.getElementById("technician-table");
const jobHistoryTableBody = document.getElementById("job-history-table");
const userRows = userTableBody.getElementsByTagName("tr");
const technicianRows = technicianTableBody.getElementsByTagName("tr");
const jobHistoryRows = jobHistoryTableBody.getElementsByTagName("tr");
const userModal = document.getElementById("user-modal");
const technicianModal = document.getElementById("technician-modal");
const addTechnicianForm = document.getElementById("add-technician-form");

document
  .getElementById("customer-search-bar")
  .addEventListener("keyup", filterCustomers);
document
  .getElementById("technician-search-bar")
  .addEventListener("keyup", filterTechnicians);
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
  addTechnicianLink: document.getElementById("add-technician-link"),
  jobHistoryLink: document.getElementById("job-history-link"),
};
const sections = {
  jobSection: document.getElementById("jobs-section"),
  customerSection: document.getElementById("customer-section"),
  technicianSection: document.getElementById("technician-section"),
  addTechnicianSection: document.getElementById("add-technician-section"),
  jobHistorySection: document.getElementById("job-history-section"),
};
const buttons = document.getElementsByClassName("assign-technician");

// add event listeners
links.jobsLink.addEventListener("click", openJobList);
links.customerLink.addEventListener("click", openCustomerList);
links.technicianLink.addEventListener("click", openTechnicianList);
links.addTechnicianLink.addEventListener("click", openAddTechnician);
links.jobHistoryLink.addEventListener("click", openJobHistory);

for (const button of buttons) {
  button.addEventListener("click", assignTechnician);
}

addTechnicianForm.addEventListener("submit", addTechnician);

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

for (let i = 0; i < jobHistoryRows.length; i++) {
  const row = jobHistoryRows[i];
  const id = row.id.split("-")[1];
  const link = row.children[0].children[0];
  link.href = `/invoice/${id}`;
  link.style.textDecoration = "underline";
}

// functions to swap between tabs
function openJobList(event) {
  setListStyle(event.currentTarget);
  hideSections();
  showSection(sections.jobSection);
}
function openCustomerList(event) {
  setListStyle(event.currentTarget);
  hideSections();
  showSection(sections.customerSection);
}
function openTechnicianList(event) {
  setListStyle(event.currentTarget);
  hideSections();
  showSection(sections.technicianSection);
}
function openAddTechnician(event) {
  setListStyle(event.currentTarget);
  hideSections();
  showSection(sections.addTechnicianSection);
}

function openJobHistory(event) {
  setListStyle(event.currentTarget);
  hideSections();
  showSection(sections.jobHistorySection);
}

// add background color to the currently selected list item
function setListStyle(element) {
  for (const [key, value] of Object.entries(links)) {
    value.style.backgroundColor = "";
  }

  element.style.backgroundColor = "#E0DCD1";
  element.style.textColor = "#000";
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

// TODO
function setSelectedTechnicians() {
  const jobCards = document.getElementsByClassName("job-card");
  for (const job of jobCards) {
    const selectElement = job.getElementsByClassName("mechanic-list")[0];
    // const
  }
}

// called when technician is assigned to a job. will create a blank service object in the database and link it to the job
async function assignTechnician(event) {
  const job = event.target.parentNode.parentNode.id;
  const technician = event.target.previousElementSibling.value;

  const car = event.target.parentNode.parentNode.children[4].id;

  const response = await fetch("/api/workshop/technician", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ job: job, technician: technician, car: car }),
  });

  if (response.ok) {
    location.reload();
  }
}

async function addTechnician(event) {
  event.preventDefault();

  const newTechnician = +document.getElementById("customer-list").value;
  const response = await fetch("/api/workshop", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ newTechnician: newTechnician }),
  });

  console.log(response);
  if (response.ok) {
    location.reload();
  }
}

// filter on search bar
function filterCustomers() {
  const input = document.getElementById("customer-search-bar");
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

function filterTechnicians() {
  const input = document.getElementById("technician-search-bar");
  let filterText = input.value.toUpperCase();
  // Loop through all list items, and hide those who don't match the search query
  for (let i = 0; i < technicianRows.length; i++) {
    let row = technicianRows[i].getElementsByTagName("td");

    // get the text values from each cell and set to uppercase
    let textValues = [];
    for (const cell of row) {
      textValues.push(cell.innerText.toUpperCase());
    }

    // iterate over each value and check whether the current text value is in the list
    for (const value of textValues) {
      if (value.toUpperCase().indexOf(filterText) > -1) {
        technicianRows[i].style.display = "";
        break;
      } else {
        technicianRows[i].style.display = "none";
      }
    }
  }
}

function filterjobHistory() {
  const input = document.getElementById("job-history-search-bar");
  let filterText = input.value.toUpperCase();
  // Loop through all list items, and hide those who don't match the search query
  for (let i = 0; i < jobHistoryRows.length; i++) {
    let row = jobHistoryRows[i].getElementsByTagName("td");

    // get the text values from each cell and set to uppercase
    let textValues = [];
    for (const cell of row) {
      textValues.push(cell.innerText.toUpperCase());
    }

    // iterate over each value and check whether the current text value is in the list
    for (const value of textValues) {
      if (value.toUpperCase().indexOf(filterText) > -1) {
        jobHistoryRows[i].style.display = "";
        break;
      } else {
        jobHistoryRows[i].style.display = "none";
      }
    }
  }
}

// this will dynamically render the content of the modal based on the user selected.
function openUserModal(event) {
  userModal.style.display = "flex";
  document.body.style.overflow = "hidden";
  document.body.style.paddingRight = "15px";
  const id = +event.currentTarget.id.split("-")[1];
  const customer = customersJSON.find((customer) => customer.id === id);

  document.getElementById("first-name-div").innerText = customer.first_name;
  document.getElementById("last-name-div").innerText = customer.last_name;
  document.getElementById(
    "address-div"
  ).innerText = `${customer.address} ${customer.postcode} ${customer.state}`;
  document.getElementById("phone-div").innerText = customer.phone;

  const serviceList = document.getElementById("service-list");
  serviceList.innerHTML = "";
  for (const car of customer.cars) {
    for (const service of car.services) {
      const row = document.createElement("tr");
      row.classList.add("border-b");
      row.classList.add("border-black");
      const invoiceLink = document.createElement("a");
      invoiceLink.href = `/invoice/${service.id}`;
      invoiceLink.classList.add("underline");
      const dateCell = document.createElement("td");
      dateCell.classList.add("mb-2");
      dateCell.classList.add("p-2");
      const serviceCell = document.createElement("td");
      serviceCell.classList.add("mb-2");
      serviceCell.classList.add("p-2");
      const registrationCell = document.createElement("td");
      registrationCell.classList.add("mb-2");
      registrationCell.classList.add("p-2");
      const invoiceCell = document.createElement("td");
      invoiceCell.classList.add("mb-2");
      invoiceCell.classList.add("p-2");
      invoiceCell.innerText = service.id;
      dateCell.innerText = service.job.date;
      serviceCell.innerText = toPascalCase(service.job.type);
      registrationCell.innerText = car.license_plate;

      invoiceLink.appendChild(invoiceCell);
      row.appendChild(invoiceLink);
      row.appendChild(dateCell);
      row.appendChild(serviceCell);
      row.appendChild(registrationCell);
      serviceList.appendChild(row);
    }
  }
}

function closeUserModal() {
  userModal.style.display = "none";
}

function selectUserRow(event) {
  event.preventDefault();
  for (const row of userRows) {
    row.style.backgroundColor = "#E0DCD1";
  }
  event.currentTarget.style.backgroundColor = "#e5e5e5ff";
}

// technician view

// calls API to get data about the individual technician's details and job history
async function openTechnicianModal(event) {
  technicianModal.style.display = "flex";
  document.body.style.overflow = "hidden";
  document.body.style.paddingRight = "15px";
  const id = +event.currentTarget.id.split("-")[1];
  const technician = techniciansJSON.find((technician) => technician.id === id);

  document.getElementById("first-name-div").innerText = technician.first_name;
  document.getElementById("last-name-div").innerText = technician.last_name;
  document.getElementById(
    "address-div"
  ).innerText = `${technician.address} ${technician.postcode} ${technician.state}`;
  document.getElementById("phone-div").innerText = technician.phone;

  const jobList = document.getElementById("job-list");
  jobList.innerHTML = "";
  for (const service of technician.services) {
    const row = document.createElement("tr");
    row.classList.add("border-b");
    row.classList.add("border-black");
    const invoiceLink = document.createElement("a");
    invoiceLink.href = `/invoice/${service.id}`;
    invoiceLink.classList.add("underline");
    const invoiceCell = document.createElement("td");
    invoiceCell.classList.add("mb-2");
    invoiceCell.classList.add("p-2");
    const dateCell = document.createElement("td");
    dateCell.classList.add("mb-2");
    dateCell.classList.add("p-2");
    const serviceCell = document.createElement("td");
    serviceCell.classList.add("mb-2");
    serviceCell.classList.add("p-2");
    const registrationCell = document.createElement("td");
    registrationCell.classList.add("mb-2");
    registrationCell.classList.add("p-2");
    invoiceCell.innerText = service.job.id;
    dateCell.innerText = service.job.date;
    serviceCell.innerText = toPascalCase(service.job.type);
    registrationCell.innerText = service.car.license_plate;

    invoiceLink.appendChild(invoiceCell);
    row.appendChild(invoiceLink);
    row.appendChild(dateCell);
    row.appendChild(serviceCell);
    row.appendChild(registrationCell);
    jobList.appendChild(row);
  }
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

function toPascalCase(phrase) {
  const words = phrase.split(" ");
  // make the first letter of each word a capital
  const capitalisedWords = words.map((word) =>
    word.replace(word[0], word[0].toUpperCase())
  );

  return capitalisedWords.join(" ");
}

function init() {
  setListStyle(links.jobsLink);
  setSelectedTechnicians();
}

init();

// console.log(mechanics);
