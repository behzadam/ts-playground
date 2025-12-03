// TypeScript Playground
// Start coding here!

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

console.log(greetUser(user));

