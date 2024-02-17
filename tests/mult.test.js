/*import the file in the folder src*/
const mult = require('../src/mult')

/*execute the operation with 2 parameters, showing if is the result*/
it('should return correct mult', () => {
    const result = mult(2,5)
    expect(result).toBe(10)
})