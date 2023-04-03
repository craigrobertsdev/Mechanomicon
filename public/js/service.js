const completeServiceButtons = document.getElementsByClassName(
  "completeServiceButton"
);

document.getElementById("modal-close").addEventListener("click", closeModal);

for (const button of completeServiceButtons) {
  button.addEventListener("click", openModal);
}

function openModal(event) {
  document.getElementById(`complete-service-modal`).classList.remove("hidden");
}

function closeModal(event) {
  document.getElementById(`complete-service-modal`).classList.add("hidden");
}

// show the selected section
function showSection(id) {
  const sections = ["job-info"];

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

// Complete Service
document.addEventListener("DOMContentLoaded", async (jobId) => {
  const completeServiceForm = document.getElementById(`completeServiceForm`);

  completeServiceForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(completeServiceForm);
    const data = Object.fromEntries(formData);

    console.log(data);

    try {
      const response = await fetch("/api/service", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Service completed!");
        location.reload();
      } else {
        alert("Failed to complete service.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to complete service.");
    }
  });
});
// Show the default section when the page loads
showSection("job-info");
