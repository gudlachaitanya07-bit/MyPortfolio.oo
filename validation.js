
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateContact(name, email, message) {
    if (!name.trim()) return false;
    if (!isValidEmail(email)) return false;
    if (!message.trim()) return false;
    return true;
}

if (typeof module !== "undefined") {
    module.exports = { isValidEmail, validateContact };
}
