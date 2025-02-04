function findUnion(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}

function findIntersection(arr1, arr2) {
  const set = new Set(arr2);
  const intersection = arr1.filter(item => set.has(item));
  return [...new Set(intersection)];
}

