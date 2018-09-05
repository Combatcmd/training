let processed = [];

const findLowestCost = (costs) => {
  let lowestCost = Infinity;
  let lowestCostIndex = null;
  for (let node in costs) {
    let cost = costs[node];
    if (cost < lowestCost && processed.indexOf(node) === -1) {
      lowestCost = costs[node];
      lowestCostIndex = node;
    }
  }
  return lowestCostIndex;
};

export default (graph, costs, parents) => {
  let node = findLowestCost(costs, processed);

  while (node !== null) {
    let cost = costs[node];
    let neighbors = graph[node];
    for (let n in neighbors) {
      let newCost = cost + neighbors[n];
      if (newCost < costs[n]) {
        costs[n] = newCost;
        parents[n] = node;
      }
    }
    processed.push(node);
    node = findLowestCost(costs, processed);
  }
  return costs.finish;
};
