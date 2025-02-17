
function dfs(graph, node, visited = new Set()) {
    console.log(node);
    visited.add(node);
    for (const neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
            dfs(graph, neighbor, visited);
        }
    }
}
const graph = {
    0: [1, 2],
    1: [2],
    2: [0, 3],
    3: [3]
};

console.log('DFS Traversal:');
dfs(graph, 2);

