//Dijksta Algorithm
 
function dijkstra(graph, V, src) {
    const dist = new Array(V).fill(Infinity);
    dist[src] = 0;
    const visited = new Array(V).fill(false);
    for (let i = 0; i < V - 1; i++) {
        const u = minDistance(dist, visited);
        visited[u] = true;
        for (let v = 0; v < V; v++) {
            if (!visited[v] && graph[u][v] !== 0 && dist[u] + graph[u][v] < dist[v]) {
                dist[v] = dist[u] + graph[u][v];
            }
        }
    }
    printSolution(dist, V);
}

function minDistance(dist, visited) {
    let min = Infinity;
    let minIndex = -1;
    for (let v = 0; v < dist.length; v++) {
        if (!visited[v] && dist[v] <= min) {
            min = dist[v];
            minIndex = v;
        }
    }
    return minIndex;
}

function printSolution(dist, V) {
    console.log('Vertex Distance from Source');
    for (let i = 0; i < V; i++) {
        console.log(i, dist[i]);
    }
}

const V = 8;

const graph = [
    [0, 5, 0, 0, 0, 0, 0, 10, 0], 
    [5, 0, 10, 0, 0, 0, 0, 15, 0], 
    [0, 10, 0, 8, 0, 6, 0, 0, 3],  
    [0, 0, 8, 0, 12, 18, 0, 0, 0], 
    [0, 0, 0, 12, 0, 14, 0, 0, 0], 
    [0, 0, 6, 18, 14, 0, 3, 0, 0], 
    [0, 0, 0, 0, 0, 3, 0, 2, 7],  
    [0, 0, 3, 0, 0, 0, 7, 8, 0]   
];

dijkstra(graph, V, 0);
