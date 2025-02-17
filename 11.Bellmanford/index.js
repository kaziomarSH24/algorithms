//bellmanford algorithm
// Bellman-Ford Algorithm is used to find the shortest paths from the source vertex to all other vertices in a weighted graph. It depends on the fact that the shortest path will contain at most V-1 edges, where V is the number of vertices in the graph.
// The algorithm works by relaxing all the edges V-1 times, where V is the number of vertices in the graph. The relaxation process involves checking if the distance to a vertex can be minimized by taking the current edge.
// The algorithm also detects negative weight cycles in the graph. A negative weight cycle is a cycle whose total weight is negative. If a graph contains a negative weight cycle, then there is no shortest path because the total weight of the path can be made as small as possible by going through the cycle again and again.
// The time complexity of the Bellman-Ford Algorithm is O(V*E), where V is the number of vertices and E is the number of edges in the graph.
// Let's implement the Bellman-Ford Algorithm in JavaScript:

function bellmanford(graph, V, E, src) {
    const dist = new Array(V).fill(Infinity);
    dist[src] = 0;
    for (let i = 0; i < V - 1; i++) {
        for (let j = 0; j < E; j++) {
            const { u, v, w } = graph[j];
            if (dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
            }
        }
    }
    for (let i = 0; i < E; i++) {
        const { u, v, w } = graph[i];
        if (dist[u] + w < dist[v]) {
            console.log('Graph contains negative weight cycle');
            return;
        }
    }
    console.log('Vertex Distance from Source');
    for (let i = 0; i < V; i++) {
        console.log(i, dist[i]);
    }
}

const V = 5;
const E = 8;

const graph = [
    { u: 0, v: 1, w: -1 },
    { u: 0, v: 2, w: 4 },
    { u: 1, v: 2, w: 3 },
    { u: 1, v: 3, w: 2 },
    { u: 1, v: 4, w: 2 },
    { u: 3, v: 2, w: 5 },
    { u: 3, v: 1, w: 1 },
    { u: 4, v: 3, w: -3 }
];

bellmanford(graph, V, E, 0);