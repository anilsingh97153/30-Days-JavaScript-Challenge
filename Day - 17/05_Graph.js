// Implement a graph class with methods to add vertices, add edges, and perform breadth-first search (BFS)

// Use the Graph class to represent a simple network and perform BFS to find the shortest path between two nodes.

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // Add a vertex to the graph
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  // Add edge between two vertices
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1); // For undirected graph
  }

  // Perform BFS to find the shortest path between two nodes
  bfs(start, end) {
    const queue = [start]; // Initialize the queue with the start node
    const visited = new Set(); // Track visited nodes
    const predecessors = {}; // Track predecessors for path reconstruction

    visited.add(start);

    while (queue.length) {
      const current = queue.shift(); // Dequeue the front node

      if (current === end) {
        // Reconstruct the path from end to start
        const path = [];
        let step = end;
        while (step) {
          path.push(step);
          step = predecessors[step];
        }
        return path.reverse(); // Return the path from start to end
      }

      // Process each neighbor of the current node
      for (const neighbor of this.adjacencyList[current]) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor); // Enqueue the neighbor
          visited.add(neighbor); // Mark neighbor as visited
          predecessors[neighbor] = current; // Record predecessor
        }
      }
    }

    return []; // Return empty path if end node is not reachable
  }
}

// Example usage
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");
graph.addEdge("D", "E");

console.log("Adjacency List:", graph.adjacencyList);
// Output: { A: [ 'B', 'C' ], B: [ 'A', 'D' ], C: [ 'A', 'D' ], D: [ 'B', 'C', 'E' ], E: [ 'D' ] }

const path = graph.bfs("A", "E");
console.log("Shortest Path from A to E:", path);
// Output: Shortest Path from A to E: [ 'A', 'C', 'D', 'E' ]
