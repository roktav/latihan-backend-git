// index.ts

// Function to greet a user
function greetUser (name: string): string {
    return `Hello, ${name}! Welcome to our TypeScript application.`;
}

// Main execution
const userName: string = "Alice";
const greetingMessage: string = greetUser (userName);

console.log(greetingMessage);