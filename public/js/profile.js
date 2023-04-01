async function updateProfile(event) {
  event.preventDefault();

  const first_name = document.querySelector("#first_name").value.trim();
  const last_name = document.querySelector("#last_name").value.trim();
  const phone = document.querySelector("#phone").value.trim();
  const address = document.querySelector("#address").value.trim();
  const postcode = document.querySelector("#postcode").value.trim();
  const city = document.querySelector("#city").value.trim();
  const state = document.querySelector("#state").value.trim();

  //formatting input
  const formattedFirstName =
    first_name.charAt(0).toUpperCase() + first_name.slice(1).toLowerCase();
  const formattedLastName =
    last_name.charAt(0).toUpperCase() + last_name.slice(1).toLowerCase();

  const formattedCity =
    city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
  const formattedState = state.toUpperCase();

  const response = await fetch("/api/user/${userId}", {
    method: "PUT",
    body: JSON.stringify({
      first_name: formattedFirstName,
      last_name: formattedLastName,
      phone,
      address,
      postcode,
      city: formattedCity,
      state: formattedState,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    alert("Profile updated successfully!");
    document.location.replace("/dashboard");
  } else {
    alert("Failed to update profile.");
  }
}

document
  .querySelector("#update-profile-form")
  .addEventListener("submit", updateProfile);
