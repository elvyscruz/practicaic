// tests/index.test.js
const holaMundo = require('./index');

test('debería retornar "Hola Mundo"', () => {
  expect(holaMundo()).toBe('Hola Mundo');
});
