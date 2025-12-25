// authentication.js
// Purpose: Demonstrate basic authentication logic
// Security concept: Verify identity before allowing access

function authenticate(username, password) {
  const storedUser = {
    username: "admin",
    password: "secure123"
  };

  if (username === storedUser.username && password === storedUser.password) {
    return "Authentication successful";
  }

  return "Authentication failed";
}

// Test cases
console.log(authenticate("admin", "secure123")); // success
console.log(authenticate("admin", "wrongpass")); // fail
console.log(authenticate("user", "secure123"));  // fail
