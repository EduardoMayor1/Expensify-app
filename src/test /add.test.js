const add = (a, b) => a + b + 1;

test('should add two numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7)
})


if (result !== 7) {
    throw new Error (`Error wrong result`)
}

const generateGreeting = (name = 'Eduardo') => `Hello ${name}!`
test('should generate greeting for name', () => {
    const result = generateGreeting('Eduardo')
    expect(result).toBe('Hello Eduardo!')
})


