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

  traverseDFRecursion = (label) => {
    const node = this.nodes[label];
    if (!node) return;
    this.traverseDFRecursionImplementation(node, {});
  };
  traverseDFRecursionImplementation = (node, visited) => {
    console.log(node);
    visited[node] = true;
    const list = this.adjacencyList[node];
    for (let i = 0; i < list.length; i++) {
      if (visited[list[i]]) continue;
      this.traverseDFRecursionImplementation(list[i], visited);
    }
  };

  traverseDFIteration = (label) => {
    const node = this.nodes[label];
    if (!node) return;
    const visited = {};
    const stack = [];
    stack.push(node);
    while (stack.length) {
      const currentItem = stack.pop();
      if (visited[currentItem]) continue;
      console.log(currentItem);
      visited[currentItem] = true;
      const adjacentNodes = this.adjacencyList[currentItem];
      for (let i = 0; i < adjacentNodes.length; i++) {
        if (visited[adjacentNodes[i]]) continue;
        stack.push(adjacentNodes[i]);
      }
    }
  };

  traverseBFRecursion = (label) => {
    const node = this.nodes[label];
    if (!node) return;
    const visited = {};
    const queue = [];
    queue.push(node)
    traverseBFRecursionImplementation(queue, visited);
  };
  
  traverseBFRecursionImplementation =  (queue, visited) => {
    if(!queue.length) return;
     const current = queue.shift();
    if(visited[current]){
      return this.traverseBFRecursionImplementation(queue,visited);
    }
    console.log(current);
    visited[current] = true;
    const adjacentNode = this.adjacencyList[current];
    for(let i = 0; i < adjacentNode.length; i++){
      if(visited[adjacentNode[i]]) continue;
      queue.push(adjacentNode[i])
    }
    return this.traverseBFRecursionImplementation(queue,visited)
  }

  traverseBFIteration = (label) => {
    const node = this.nodes[label];
    if (!node) return;
    const visited = {};
    const queue = [];
    queue.push(node);
    while (queue.length) {
      const current = queue.shift();
      if (visited[current]) continue;
      console.log(current);
      visited[current] = true;
      const adjacentNodes = this.adjacencyList[current];
      for (let i = 0; i < adjacentNodes.length; i++) {
        if (visited[adjacentNodes[i]]) continue;
        queue.push(adjacentNodes[i]);
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
