// Wait for the button click to trigger the validation
const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the values typed by the user
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Tracks whether everything is valid so far
    let isValid = true;

    // Clear old error messages before checking again
    document.getElementById("name-error").textContent = "";
    document.getElementById("phone-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("message-error").textContent = "";

    // Check for empty fields
    if (name === "") {
        document.getElementById("name-error").textContent = "Name is required.";
        isValid = false;
    } else if (!/^[A-Za-z\s]+$/.test(name)) {
        document.getElementById("name-error").textContent = "Name must contain only letters and spaces.";
        isValid = false;
    }

    if (phone === "") {
        document.getElementById("phone-error").textContent = "Phone number is required.";
        isValid = false;
    } else if (!/^\d{9,10}$/.test(phone)) {
        document.getElementById("phone-error").textContent = "Phone number must be 9 or 10 digits, numbers only.";
        isValid = false;
    }

    if (email === "") {
        document.getElementById("email-error").textContent = "Email is required.";
        isValid = false;
    }

    if (message === "") {
        document.getElementById("message-error").textContent = "Please describe your query.";
        isValid = false;
    }

    // If everything passed, show a success message
    if (isValid) {
        alert("Thank you! Your message has been sent.");
        form.reset();
    }
});