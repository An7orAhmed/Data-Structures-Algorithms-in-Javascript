
function detectCycle(adj, numVertices) {
    let visited = new Array(numVertices + 1).fill(false);
    for (let v = 1; v <= numVertices; v++) {
        if (!visited[v]) {
            if (detectCycleHelper(v, -1, adj, visited)) {
                return true;
            }
        }
    }
    return false;
}

function detectCycleHelper(v, parent, adj, visited) {
    visited[v] = true;
    for (let u of adj[v]) {
        if (!visited[u]) {
            if (detectCycleHelper(u, v, adj, visited)) {
                return true;
            }
        } else if (parent !== u) {
            return true;
        }
    }
    return false;
}

