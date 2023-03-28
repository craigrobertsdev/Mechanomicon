const links = {
  jobsLink: document.getElementById("job-link"),
  customerLink: document.getElementById("customer-link"),
  inventoryLink: document.getElementById("inventory-link"),
};
const sections = {
  jobSection: document.getElementById("jobs-section"),
  customerSection: document.getElementById("customer-section"),
  inventorySection: document.getElementById("inventory-section"),
};
const buttons = document.getElementsByClassName("assign-technician");

// add event listeners
links.jobsLink.addEventListener("click", openJobList);
links.customerLink.addEventListener("click", openCustomerList);
links.inventoryLink.addEventListener("click", openInventory);

for (const button of buttons) {
  button.addEventListener("click", assignTechnician);
}

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

function init() {
  setListStyle(links.jobsLink);
}

init();
