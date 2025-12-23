// input-validation.js
// Purpose: Validate user input before it enters the system
// Security concept: Prevent malformed or malicious input

function validateUsername(username) {

  // Ensure input is a string to prevent unexpected data types
  if (typeof username !== "string") {
    return "Invalid input type";
  }

  // Enforce length limits to reduce abuse and system strain
  if (username.length < 3 || username.length > 12) {
    return "Username must be between 3 and 12 characters";
  }

  // Input passed all validation checks
  return "Username is valid";
}

// Test cases to verify validation behavior
console.log(validateUsername("admin"));   // valid
console.log(validateUsername("a"));       // too short
console.log(validateUsername(12345));     // invalid type
