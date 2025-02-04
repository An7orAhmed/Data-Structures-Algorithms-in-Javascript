
function dijkstra(graph, numNodes, startNode) {
    const INF = Number.MAX_SAFE_INTEGER;
    const distances = new Array(numNodes).fill(INF);
    distances[startNode] = 0;
    
    const priorityQueue = [];
    for (let i = 0; i < numNodes; i++) {
        priorityQueue.push([i, distances[i]]);
    }
    
    while (priorityQueue.length > 0) {
        priorityQueue.sort((a, b) => a[1] - b[1]);
        const [currentNode, currentDistance] = priorityQueue.shift();
        
        if (currentDistance > distances[currentNode]) {
            continue;
        }
        
        for (let neighbor = 0; neighbor < numNodes; neighbor++) {
            const weight = graph[currentNode][neighbor];
            if (weight > 0 && distances[neighbor] > currentDistance + weight) {
                distances[neighbor] = currentDistance + weight;
            }
        }
    }
    
    return distances;
}

