
const test = require("node:test");
const assert = require("node:assert");
const { isValidEmail, validateContact } = require("./validation");

test("Valid email should return true", () => {
    assert.strictEqual(isValidEmail("test@gmail.com"), true);
});

test("Invalid email should return false", () => {
    assert.strictEqual(isValidEmail("testgmail.com"), false);
});

test("Empty email should return false", () => {
    assert.strictEqual(isValidEmail(""), false);
});

test("Valid contact details should return true", () => {
    assert.strictEqual(
        validateContact("Krishna", "test@gmail.com", "Hello"),
        true
    );
});

test("Empty name should return false", () => {
    assert.strictEqual(
        validateContact("", "test@gmail.com", "Hello"),
        false
    );
});

test("Empty message should return false", () => {
    assert.strictEqual(
        validateContact("Krishna", "test@gmail.com", ""),
        false
    );
});
