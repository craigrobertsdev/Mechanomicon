// open edit modal
function openModal(carId) {
  document.getElementById(`editModal-${carId}`).classList.remove("hidden");
}

function closeModal(carId) {
  document.getElementById(`editModal-${carId}`).classList.add("hidden");
}

//open add car modal
function openAddCarModal() {
  const addCarModal = document.getElementById("addCarModal");
  if (addCarModal) {
    addCarModal.classList.remove("hidden");
  }
}

function closeAddCarModal() {
  const addCarModal = document.getElementById("addCarModal");
  if (addCarModal) {
    addCarModal.classList.add("hidden");
  }
}

// function to capitalize first letter of a string
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// add a car
async function addCar() {
  const make = capitalizeFirstLetter(document.getElementById("addMake").value);
  const model = capitalizeFirstLetter(
    document.getElementById("addModel").value
  );
  const licensePlate = document
    .getElementById("addLicensePlate")
    .value.toUpperCase();
  const year = document.getElementById("addYear").value;
  const colour = capitalizeFirstLetter(
    document.getElementById("addColour").value
  );

  console.log("Adding car:", { make, model, licensePlate, year, colour });

  const response = await fetch("/api/car", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ make, model, licensePlate, year, colour }),
  });

  if (response.ok) {
    location.reload();
  } else {
    const errorMsg = await response.json();
    console.error("Error adding car:", errorMsg);
    alert("Error adding car");
  }
}

//edit car
async function updateCar(carId) {
  const make = capitalizeFirstLetter(
    document.getElementById(`${carId}-make`).value
  );
  const model = capitalizeFirstLetter(
    document.getElementById(`${carId}-model`).value
  );
  const licensePlate = document
    .getElementById(`${carId}-licensePlate`)
    .value.toUpperCase();
  const year = document.getElementById(`${carId}-year`).value;
  const colour = capitalizeFirstLetter(
    document.getElementById(`${carId}-colour`).value
  );

  console.log("Updating car:", carId, {
    make,
    model,
    licensePlate,
    year,
    colour,
  });

  const response = await fetch(`/api/car/${carId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ make, model, licensePlate, year, colour }),
  });

  if (response.ok) {
    location.reload();
  } else {
    alert("Error updating car");
  }
}

//delete car
async function deleteCar(carId) {
  console.log("Delete button clicked for car with ID:", carId);
  const response = await fetch(`/api/car/${carId}`, {
    method: "DELETE",
  });

  if (response.ok) {
    alert("Successfully deleted");
    location.reload();
  } else {
    alert("Error deleting car");
  }
}

// show the selected section
function showSection(id) {
  const sections = ["car-info", "service", "book-service", "profile-page"];

  // Hide all sections
  sections.forEach((sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.style.display = "none";
    }
  });

  // Show the selected section
  const selectedSection = document.getElementById(id);
  if (selectedSection) {
    selectedSection.style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Show the default section when the page loads
  showSection("car-info");
});

// book service
document.addEventListener("DOMContentLoaded", () => {
  const addServiceForm = document.getElementById("add-service-form");

  addServiceForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(addServiceForm);
    const data = Object.fromEntries(formData);

    console.log(data);

    try {
      const response = await fetch("/api/job", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Service added successfully!");
        location.reload();
      } else {
        alert("Failed to add service.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to add service.");
    }
  });
});

//add event listener to the buttons in carInfo handlebars
document
  .getElementById("view-service-history-btn")
  .addEventListener("click", function () {
    document.getElementById("service").style.display = "block";
    document.getElementById("car-info").style.display = "none";
    document.getElementById("book-service").style.display = "none";
    document.getElementById("profile").style.display = "none";
  });

document
  .getElementById("book-service-btn")
  .addEventListener("click", function () {
    document.getElementById("service").style.display = "none";
    document.getElementById("car-info").style.display = "none";
    document.getElementById("profile").style.display = "none";
    document.getElementById("book-service").style.display = "block";
  });
