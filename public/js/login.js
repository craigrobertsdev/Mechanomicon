// Login form handler function
async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector("#login-email").value.trim();
  const password = document.querySelector("#login-password").value.trim();

  if (email && password) {
    const response = await fetch("/api/user/login", {
      method: "post",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    const body = await response.json();

    if (response.ok) {
      // redirect user to appropriate dashboard based on role
      switch (body.user.role) {
        case "manager":
          document.location.replace("/workshop");
          break;
        case "technician":
          document.location.replace("/mechanicDashboard");
          break;
        case "user":
          document.location.replace("/customer");
          break;
      }
    } else {
      alert(response.statusText);
    }
  }
}

// Signup form handler function
async function signupFormHandler(event) {
  event.preventDefault();

  const first_name = document.querySelector("#signup-first-name").value.trim();
  const last_name = document.querySelector("#signup-last-name").value.trim();
  const email = document.querySelector("#signup-email").value.trim();
  const password = document.querySelector("#signup-password").value.trim();

  if (first_name && last_name && email && password) {
    const response = await fetch("/api/user/signup", {
      method: "post",
      body: JSON.stringify({
        first_name,
        last_name,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log("success");
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    }
  }
}
$(document).ready(function () {
  $("#show-signup").on("click", function () {
    $("#login-section").addClass("hidden");
    $("#signup-section").removeClass("hidden");
    $("#left-section").insertAfter("#right-section");
  });

  $("#show-login").on("click", function () {
    $("#signup-section").addClass("hidden");
    $("#login-section").removeClass("hidden");
    $("#left-section").insertBefore("#right-section");
  });
});

// Event listener for login form
document
  .querySelector("#login-form")
  .addEventListener("submit", loginFormHandler);

// Event listener for signup form
document
  .querySelector("#signup-form")
  .addEventListener("submit", signupFormHandler);
