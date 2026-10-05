// Validates the contact form in the browser, since no server is used in this project
const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // stops the page from reloading on submit

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    let isValid = true;

    // clear old error messages before checking again
    document.getElementById("name-error").textContent = "";
    document.getElementById("phone-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("message-error").textContent = "";

    // name: required, letters and spaces only
    if (name === "") {
        document.getElementById("name-error").textContent = "Name is required.";
        isValid = false;
    } else if (!/^[A-Za-z\s]+$/.test(name)) {
        document.getElementById("name-error").textContent = "Name must contain only letters and spaces.";
        isValid = false;
    }

    // phone: required, digits only, 9 or 10 of them
    if (phone === "") {
        document.getElementById("phone-error").textContent = "Phone number is required.";
        isValid = false;
    } else if (!/^\d{9,10}$/.test(phone)) {
        document.getElementById("phone-error").textContent = "Phone number must be 9 or 10 digits, numbers only.";
        isValid = false;
    }

    // email and message: just required, no format check
    if (email === "") {
        document.getElementById("email-error").textContent = "Email is required.";
        isValid = false;
    }

    if (message === "") {
        document.getElementById("message-error").textContent = "Please describe your query.";
        isValid = false;
    }

    if (isValid) {
        alert("Thank you! Your message has been sent.");
        form.reset();
    }
});
