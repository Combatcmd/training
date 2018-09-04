export default (graph, start, seller) => {
  let queue = [];
  queue = queue.concat(graph[start]);
  let searched = [];

  while (queue.length) {
    let person = queue.shift();
    if (!searched.includes(person)) {
      if (person === seller) {
        return person + ' is a mango seller!';
      } else {
        queue = queue.concat(graph[person]);
        searched.push(person);
      }
    }
  }

  return 'Try to look somewhere else';
};
