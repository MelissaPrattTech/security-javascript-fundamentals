// input-validation.js
// Simple example of input validation (CompTIA-aligned concept)

function validateUsername(username) {
  if (typeof username !== "string") {
    return "Invalid input type";
  }

  if (username.length < 3 || username.length > 12) {
    return "Username must be between 3 and 12 characters";
  }

  return "Username is valid";
}

// Test cases
console.log(validateUsername("admin"));
console.log(validateUsername("a"));
console.log(validateUsername(12345));
