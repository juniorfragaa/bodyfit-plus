// ============================================================
// CONTACT FORM VALIDATION
// This script runs only on contact.html. It checks the form's
// fields BEFORE allowing a "submission", since there is no
// server here to process the data - everything happens in the
// browser with JavaScript, as required by the assignment.
// ============================================================

// document.getElementById("contact-form") searches the whole page for the
// element whose id="contact-form" (the <form> tag in contact.html) and
// stores a reference to it in the "form" variable, so we can work with it
const form = document.getElementById("contact-form");

// addEventListener("submit", ...) tells the browser: "whenever this form
// is submitted (the Send Message button is clicked, or Enter is pressed
// inside a field), run the function below". This is how JavaScript reacts
// to something the user does, instead of running once when the page loads.
form.addEventListener("submit", function (event) {

    // By default, submitting a form makes the browser try to reload the
    // page and send the data somewhere. event.preventDefault() cancels
    // that default behaviour, so the page stays put and OUR code below
    // decides what happens next.
    event.preventDefault();

    // .value reads whatever text the user actually typed into each field
    // right now, and stores it in a variable so we can check it
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // isValid works like a switch that starts "on" (true) and gets
    // switched "off" (false) the moment ANY field fails a check below.
    // At the very end, we only show a success message if it's still true.
    let isValid = true;

    // Before checking anything, clear out any error messages left over
    // from a previous attempt to submit the form. Without this, an old
    // error would stay on screen even after the user fixes the problem
    // and submits again with everything correct.
    document.getElementById("name-error").textContent = "";
    document.getElementById("phone-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("message-error").textContent = "";

    // --- NAME: required, letters and spaces only ---
    // First check: is the field completely empty?
    if (name === "") {
        document.getElementById("name-error").textContent = "Name is required.";
        isValid = false;

    // Second check (only runs if name is NOT empty, because of "else if"):
    // does the text match this pattern (a "regular expression", or regex)?
    //   ^          -> start checking from the very first character
    //   [A-Za-z\s] -> only allow: a lowercase letter, OR an uppercase letter,
    //                 OR \s (a space)
    //   +          -> there must be one or more of those allowed characters
    //   $          -> checking must reach all the way to the very last character
    // Put together, this means: "from start to finish, this text must be
    // made ONLY of letters and spaces". The ! in front of !/regex/.test(name)
    // flips the result, so this "else if" runs when the text does NOT match
    // (i.e. it contains a number or a symbol somewhere).
    } else if (!/^[A-Za-z\s]+$/.test(name)) {
        document.getElementById("name-error").textContent = "Name must contain only letters and spaces.";
        isValid = false;
    }

    // --- PHONE: required, digits only, 9 or 10 of them ---
    if (phone === "") {
        document.getElementById("phone-error").textContent = "Phone number is required.";
        isValid = false;

    // \d means "a digit" (0-9), and {9,10} means "repeated 9 or 10 times".
    // So ^\d{9,10}$ means: "from start to finish, only digits, and there must
    // be exactly 9 or 10 of them". This rejects phone numbers that are too
    // short, too long, or contain letters/symbols like "-" or "(", "+", etc.
    } else if (!/^\d{9,10}$/.test(phone)) {
        document.getElementById("phone-error").textContent = "Phone number must be 9 or 10 digits, numbers only.";
        isValid = false;
    }

    // --- EMAIL and MESSAGE: only need to check they were filled in ---
    // The assignment only asks for a specific FORMAT check (using regex)
    // on the name and phone fields, so email and message just need the
    // simple "is it empty?" check.
    if (email === "") {
        document.getElementById("email-error").textContent = "Email is required.";
        isValid = false;
    }

    if (message === "") {
        document.getElementById("message-error").textContent = "Please describe your query.";
        isValid = false;
    }

    // If isValid is STILL true at this point, it means none of the checks
    // above ever set it to false - every field passed. Only then do we show
    // the success message and clear the form back to empty with form.reset().
    if (isValid) {
        alert("Thank you! Your message has been sent.");
        form.reset();
    }
    // If isValid is false, nothing happens here - the error messages that
    // were already written into the page (in the checks above) stay visible,
    // and the form does NOT get submitted or cleared, so the user can fix
    // their input and try again.
});
