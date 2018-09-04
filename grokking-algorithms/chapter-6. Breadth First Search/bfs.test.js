import search from './bfs.js';

test('There is a mango seller', () => {
  const graph = {
    One: ['Two', 'Three'],
    Two: [],
    Three: ['Four'],
  };
  expect(search(graph, 'One', 'Four')).toBe('Four is a mango seller!');
});

test('There is no mango sellers', () => {
  const graph = {
    One: ['Two, Three'],
    Two: [],
    Three: ['No one'],
  };
  expect(search(graph, 'One', 'Four')).toBe('Try to look somewhere else');
});
