function prims(graph, V) {
    const parent = new Array(V).fill(-1);
    const key = new Array(V).fill(Infinity);
    const mstSet = new Array(V).fill(false);
    key[0] = 0;
    parent[0] = -1;
    for (let i = 0; i < V - 1; i++) {
        const u = minKey(key, mstSet);
        mstSet[u] = true;
        for (let v = 0; v < V; v++) {
            if (graph[u][v] && !mstSet[v] && graph[u][v] < key[v]) {
                parent[v] = u;
                key[v] = graph[u][v];
            }
        }
    }
    printMST(parent, V, graph);
}

function minKey(key, mstSet) {
    let min = Infinity;
    let minIndex = -1;
    for (let v = 0; v < key.length; v++) {
        if (!mstSet[v] && key[v] < min) {
            min = key[v];
            minIndex = v;
        }
    }
    return minIndex;
}

function printMST(parent, V, graph) {
    console.log('Edge Weight');
    for (let i = 1; i < V; i++) {
        console.log(`${parent[i]} - ${i}: ${graph[i][parent[i]]}`);
    }
}

const V = 5;

const graph = [
    [0, 2, 0, 6, 0],
    [2, 0, 3, 8, 5],
    [0, 3, 0, 0, 7],
    [6, 8, 0, 0, 9],
    [0, 5, 7, 9, 0]
];

prims(graph, V);
// In the above code, we have implemented the Prim's Algorithm in JavaScript. The prims function takes the graph and the numb