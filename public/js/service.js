function openModal(jobId) {
  document.getElementById(`completeServiceModal-${jobId}`).classList.remove("hidden");
}

function closeModal(jobId) {
  document.getElementById(`completeServiceModal-${jobId}`).classList.add("hidden");
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
document.addEventListener("DOMContentLoaded", () => {
  const completeServiceForm = document.getElementById("complete-service-form");

  completeServiceForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(completeServiceForm);
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

document.addEventListener("DOMContentLoaded", function () {
  // Show the default section when the page loads
  showSection("job-info");
});