function dfs(graph, startNode) {
    const visited = new Set();
    const visitedNodes = [];
    
    function dfsRecursive(node) {
        visited.add(node);
        visitedNodes.push(node);
        for (const neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                dfsRecursive(neighbor);
            }
        }
    }
    
    dfsRecursive(startNode);
    return visitedNodes;
}
