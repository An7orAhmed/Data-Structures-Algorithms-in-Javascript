function bfs(graph, start) {
    const visited = {};
    const queue = [];
    const result = [];

    queue.push(start);
    visited[start] = true;

    while (queue.length > 0) {
        const node = queue.shift();
        result.push(node);

        for (const neighbor of graph[node]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        }
    }

    return result;
}