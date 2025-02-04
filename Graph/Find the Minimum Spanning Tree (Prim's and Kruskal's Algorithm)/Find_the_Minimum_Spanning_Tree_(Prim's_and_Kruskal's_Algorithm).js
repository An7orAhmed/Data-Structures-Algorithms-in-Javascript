
function Kruskal(graph) {
    let result = [];
    let i, e = 0;
    let vertices = Object.keys(graph);
    let edgeList = [];

    // Create edge list
    for (let u in graph) {
        for (let v in graph[u]) {
            edgeList.push([u, v, graph[u][v]]);
        }
    }

    // Sort edges by weight
    edgeList.sort((a, b) => a[2] - b[2]);

    // Union-Find data structure
    let parent = {};

    function findet(u) {
        if (parent[u] !== u) {
            parent[u] = findet(parent[u]);
        }
        return parent[u];
    }

    function union(u, v) {
        let rootU = findet(u);
        let rootV = findet(v);
        if (rootU !== rootV) {
            parent[rootV] = rootU;
        }
    }

    // Initialize Union-Find
    for (let u in graph) {
        parent[u] = u;
    }

    // Kruskal's algorithm
    for (let [u, v, w] of edgeList) {
        if (e < vertices.length - 1) {
            if (findet(u) !== findet(v)) {
                result.push([u, v, w]);
                union(u, v);
                e++;
            }
        } else {
            break;
        }
    }

    return result;
}

function Prim(graph) {
    let result = [];
    let vertices = Object.keys(graph);
    let visited = {};
    let key = {};

    for (let v in graph) {
        key[v] = Infinity;
        visited[v] = false;
    }

    key['A'] = 0;
    let minKey = (keys) => Object.entries(keys).reduce((min, [k, v]) => !min || v < min[1] ? [k, v] : min, [null, Infinity])[0];

    for (let i = 0; i < vertices.length; i++) {
        let u = minKey(key);
        visited[u] = true;

        for (let v in graph[u]) {
            if (!visited[v] && graph[u][v] < key[v]) {
                key[v] = graph[u][v];
            }
        }
    }

    // Build result
    for (let v in key) {
        if (v !== 'A' && key[v] !== Infinity) {
            result.push([v, key[v]]);
        }
    }

    return result;
}

