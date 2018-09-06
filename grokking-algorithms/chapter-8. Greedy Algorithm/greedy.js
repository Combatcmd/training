function intersection(setA, setB) {
  let _intersection = new Set();
  for (let elem of setB) {
    if (setA.has(elem)) {
      _intersection.add(elem);
    }
  }
  return _intersection;
}

function difference(setA, setB) {
  let _difference = new Set(setA);
  for (let elem of setB) {
    _difference.delete(elem);
  }
  return _difference;
}

export default (statesNeeded, stations) => {
  let finalStations = new Set();

  while (statesNeeded.size) {
    let bestStation = null;
    let statesCovered = new Set();

    for (let [station, states] of Object.entries(stations)) {
      let covered = intersection(statesNeeded, states);
      if (covered.size > statesCovered.size) {
        bestStation = station;
        statesCovered = covered;
      }
    }

    finalStations.add(bestStation);
    statesNeeded = difference(statesNeeded, statesCovered);
  }

  return finalStations;
};
