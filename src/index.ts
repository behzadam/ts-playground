// TypeScript Playground
// Start coding here!

import assert from "assert";

interface User {
  name: string;
  age: number;
  email?: string;
}

function greetUser(user: User): string {
  return `Hello, ${user.name}! You are ${user.age} years old.`;
}

const user: User = {
  name: "TypeScript Developer",
  age: 25,
  email: "dev@example.com"
};

// Test the output with assert
const result = greetUser(user);
assert.strictEqual(result, "Hello, TypeScript Developer! You are 25 years old.");
console.log("✓ All assertions passed!");

