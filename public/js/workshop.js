const links = {
  jobsLink: document.getElementById("job-link"),
  customerLink: document.getElementById("customer-link"),
  mechanicLink: document.getElementById("mechanic-link"),
  inventoryLink: document.getElementById("inventory-link"),
};
const sections = {
  jobSection: document.getElementById("jobs-section"),
  customerSection: document.getElementById("customer-section"),
  mechanicSection: document.getElementById("add-mechanic-section"),
  inventorySection: document.getElementById("inventory-section"),
};

// add event listeners
links.jobsLink.addEventListener("click", openJobList);
links.customerLink.addEventListener("click", openCustomerList);
links.mechanicLink.addEventListener("click", openMechanicList);
links.inventoryLink.addEventListener("click", openInventory);

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
function openMechanicList(event) {
  setListStyle(event.target);
  hideSections();
  showSection(sections.mechanicSection);
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

function init() {
  setListStyle(links.jobsLink);
}

init();
