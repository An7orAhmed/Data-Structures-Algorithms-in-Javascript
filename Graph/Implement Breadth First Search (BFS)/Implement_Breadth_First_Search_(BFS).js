Function bfs() JavaScript e implement kora hoyece. Ato a rokom write korbo:

function bfs(graph, start) {
  const visited = new Array(Object.keys(graph).length).fill(false);
  const queue = [];
  let result = [];

  queue.push(start);
  visited[start] = true;

  while (queue.length > 0) {
    const node = queue.shift(); // Dequeue operation
    result.push(node);

    const neighbors = graph[node];
    for (const neighbor of neighbors) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push(neighbor); // Enqueue operation
      }
    }
  }

  return result;
}

