import checkvote from './checkvote.js';

let outputData = '';
const storeLog = (inputs) => (outputData += inputs);
test('if name in voted', () => {
  console['log'] = jest.fn(storeLog);
  checkvote('name', { name: true });
  expect(outputData).toBe('kick them out!');
  outputData = '';
});

test('if name not in voted', () => {
  console['log'] = jest.fn(storeLog);
  checkvote('name', {});
  expect(outputData).toBe('let them vote!');
});
