const add = (a, b) => a + b + 1

test('should add two numbers', () => {
    const result = add(3,4)

    if(result !== 7) {
        throw new Error('result was off!!!')
    }
});



const generateGreeting = (name = ' asda') => `Hello${name}!`

test ('should generate greeting from name', () => {
    const result = generateGreeting('Eduardo')
    expect(result).toBe('Hello Eduardo!')
});
