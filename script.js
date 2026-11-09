
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const status = document.getElementById("status");

    if (validateContact(name, email, message)) {
        status.textContent = "Message validated successfully!";
        status.style.color = "lightgreen";
        form.reset();
    } else {
        status.textContent = "Please enter valid contact details.";
        status.style.color = "red";
    }
});
