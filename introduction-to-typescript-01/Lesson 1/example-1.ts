// Without Typescript
function greetWithoutTypeScript(person) {
    return `Hello, ${person}!`;
}

// With TypeScript
function greetWithTypeScript(person: string): string {
    return `Hello, ${person}!`;
}

/*
The TypeScript version clearly states that the 
`person` parameter should be a string and the return value
of the function should be string too, which improving code 
readability.
*/