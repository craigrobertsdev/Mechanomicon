// open service modal
function openModal(serviceId) {
    document.getElementById(`serviceModal-${serviceId}`).classList.remove("hidden");
}
  
function closeModal(serviceId) {
    document.getElementById(`serviceModal-${serviceId}`).classList.add("hidden");
}
  
//edit car
async function updateService(serviceId) {
    const oilChanged = document.getElementById(`${serviceId}-oilChanged`).value;
    const filterChanged = document.getElementById(`${serviceId}-filterChanged`).value;
    const brakesChecked = document.getElementById(`${serviceId}-brakesChecked`).value;
    const coolantChecked = document.getElementById(`${serviceId}-coolantChecked`).value;
    const batteryChecked = document.getElementById(`${serviceId}-batteryChecked`).value;
    const suspensionChecked = document.getElementById(`${serviceId}-suspensionChecked`).value;
    const filtersChecked = document.getElementById(`${serviceId}-filtersChecked`).value;
    const tyresRotated = document.getElementById(`${serviceId}-tyresRotated`).value;
    const additionalNotes = document.getElementById(`${serviceId}-additionalNotes`).value;
  
    console.log("Updating service info:", serviceId, {
        oilChanged,
        filterChanged,
        brakesChecked,
        coolantChecked,
        batteryChecked,
        suspensionChecked,
        filtersChecked,
        tyresRotated,
        additionalNotes,
    });
  
    const response = await fetch(`/api/service/${serviceId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ oilChanged, filterChanged, brakesChecked, coolantChecked, batteryChecked, suspensionChecked, filtersChecked, tyresRotated, additionalNotes }),
    });
        if (response.ok) {
            location.reload();
        } else {
            alert("Error updating service");
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