class Node {
  constructor(label) {
    this.label = label;
  }

  toString() {
    return this.label;
  }
}

class Graph {
  constructor() {
    this.nodes = {};
    this.adjacencyList = {};
  }

  addNode = (label) => {
    const newNode = new Node(label);
    if (this.nodes[label]) throw new Error("Already Exists");
    this.nodes[label] = newNode;
    this.adjacencyList[newNode] = [];
  };

  addEdge = (from, to) => {
    const source = this.nodes[from],
      target = this.nodes[to];
    if (!source) throw new Error("Source Node Does not Exists");
    if (!target) throw new Error("Target Node Does not Exists");
    this.adjacencyList[source].push(target);
  };

  removeNode = (label) => {
    const node = this.nodes[label];
    if (!node) return;
    for (let key in this.adjacencyList) {
      this.adjacencyList[key] = this.adjacencyList[key].filter(
        (target) => target != node
      );
    }
    delete this.adjacencyList[node];
  };

  removeEdge = (from, to) => {
    const source = this.nodes[from],
      target = this.nodes[to];
    if (!source) throw new Error("Source Node Does not Exists");
    if (!target) throw new Error("Target Node Does not Exists");
    this.adjacencyList[source] = this.adjacencyList[source].filter(
      (node) => node != target
    );
  };

  print = () => {
    for (const source in this.adjacencyList) {
      const targets = this.adjacencyList[source];
      if (targets.length) {
        console.log(`${source} is Connected to ${targets}`);
      }
    }
  };
}

const graph = new Graph();

graph.addNode(1);
graph.addNode(2);
graph.addNode(3);
graph.addNode(4);
graph.addNode(5);

graph.addEdge(1, 2);
graph.addEdge(1, 3);

graph.addEdge(3, 4);
graph.addEdge(3, 5);
graph.addEdge(5, 1);
graph.addEdge(5, 2);

graph.print();

graph.removeNode(3);
graph.removeEdge(5, 2);

graph.print();
