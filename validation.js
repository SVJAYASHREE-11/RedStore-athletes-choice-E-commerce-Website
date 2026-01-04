function validateForm() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var message = document.getElementById("message");

    if (!name || !email || !message) {
        console.error("Form elements not found");
        return false;
    }

    if (name.value.trim() === "") {
        alert("Please enter your name");
        name.focus();
        return false;
    }

    if (email.value.trim() === "" || !email.value.includes("@")) {
        alert("Please enter a valid email address");
        email.focus();
        return false;
    }

    if (message.value.trim().length < 10) {
        alert("Message must be at least 10 characters long");
        message.focus();
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}
