function dijkstra(graph, source, numNodes) {
    // Initialize distances to all nodes as infinity
    const distances = new Array(numNodes).fill(Infinity);
    distances[source] = 0;

    // Priority queue to store nodes by their current distance
    const priorityQueue = [];
    priorityQueue.push([0, source]);

    while (priorityQueue.length > 0) {
        // Extract the node with the smallest distance
        const [currentDistance, currentNode] = priorityQueue.shift()
            .sort((a, b) => a[0] - b[0])[0];

        // Skip if we've already found a shorter path to this node
        if (currentDistance > distances[currentNode]) continue;

        // Explore all adjacent nodes
        for (const neighbor of graph[currentNode]) {
            const [nextNode, weight] = neighbor;
            const newDistance = currentDistance + weight;

            // Update distance if a shorter path is found
            if (newDistance < distances[nextNode]) {
                distances[nextNode] = newDistance;
                priorityQueue.push([newDistance, nextNode]);
            }
        }
    }

    return distances;
}

// Example usage
const graph = [
    [[1, 4], [2, 2]],          // Node 0
    [[2, 1], [3, 5]],          // Node 1
    [[3, 8], [4, 10]],         // Node 2
    [[4, 2]],                  // Node 3
    []                          // Node 4
];

const sourceNode = 0;
const numNodes = graph.length;
const shortestPaths = dijkstra(graph, sourceNode, numNodes);

console.log("Shortest paths from node 0:", shortestPaths);