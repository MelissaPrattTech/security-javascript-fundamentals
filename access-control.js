/**
 * Role-Based Access Control (RBAC) - simple example
 * Roles: admin, editor, viewer
 * Actions: read, write, delete
 */

// What each role is allowed to do
const ROLE_PERMISSIONS = {
  admin:  ["read", "write", "delete"],
  editor: ["read", "write"],
  viewer: ["read"],
};

// Core check: can this user do this action?
function can(user, action) {
  if (!user || !user.role) return false;

  const allowedActions = ROLE_PERMISSIONS[user.role] || [];
  return allowedActions.includes(action);
}

// Example users
const users = [
  { name: "Melissa", role: "admin" },
  { name: "Alex", role: "editor" },
  { name: "Sam", role: "viewer" },
];

// Quick demo
const actions = ["read", "write", "delete"];

for (const user of users) {
  for (const action of actions) {
    console.log(`${user.name} (${user.role}) -> ${action}: ${can(user, action) ? "ALLOW" : "DENY"}`);
  }
}
