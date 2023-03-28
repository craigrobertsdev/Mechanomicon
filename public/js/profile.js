async function updateProfile(event) {
  event.preventDefault();

  const first_name = document.querySelector("#first_name").value.trim();
  const last_name = document.querySelector("#last_name").value.trim();
  const phone = document.querySelector("#phone").value.trim();
  const address = document.querySelector("#address").value.trim();
  const postcode = document.querySelector("#postcode").value.trim();
  const city = document.querySelector("#city").value.trim();
  const state = document.querySelector("#state").value.trim();

  const response = await fetch("/api/user/profile", {
    method: "PUT",
    body: JSON.stringify({
      first_name,
      last_name,
      phone,
      address,
      postcode,
      city,
      state,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    alert("Profile updated successfully!");
    location.reload();

    // document.location.replace("/dashboard");
  } else {
    alert("Failed to update profile.");
  }
}

document
  .querySelector("#update-profile-form")
  .addEventListener("submit", updateProfile);
