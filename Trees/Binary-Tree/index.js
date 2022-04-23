class Node {
  value = null;
  leftChild = null;
  rightChild = null;

  constructor(value) {
    this.value = value;
  }
}

class BinaryTree {
  rootNode = null;
  insert = (value) => {
    const newNode = new Node(value);
    if (!this.rootNode) {
      this.rootNode = newNode;
      return;
    }
    const currentNode = this.rootNode;
    while (true) {
      if (value < currentNode.value) {
        if (!currentNode.leftChild) {
          currentNode.leftChild = newNode;
          break;
        }
        currentNode = currentNode.leftChild;
      } else {
        if (!currentNode.rightChild) {
          currentNode.rightChild = newNode;
          break;
        }
        currentNode = currentNode.rightChild;
      }
    }
  };

  find = (value) => {
    let currentNode = this.rootNode;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.leftChild;
      } else if (value > currentNode.value) {
        currentNode = currentNode.rightChild;
      } else {
        return true;
      }
    }
    return false;
  };

  remove = (value, parentNode) => {
    let currentNode = parentNode || this.rootNode;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.leftChild;
      } else if (value > currentNode) {
        parentNode = currentNode;
        currentNode = currentNode.rightChild;
      } else {
        if (currentNode.leftChild && currentNode.rightChild) {
          currentNode.value = this.minImplementation(currentNode.rightChild);
          this.remove(value, currentNode.rightChild);
        } else if (!parentNode) {
          if (currentNode.leftChild) {
            currentNode.value = currentNode.leftChild.value;
            currentNode.rightChild = currentNode.leftChild.rightChild;
            currentNode.leftChild = currentNode.leftChild.leftChild;
          } else if (currentNode.rightChild) {
            currentNode.value = currentNode.rightChild.value;
            currentNode.leftChild = currentNode.rightChild.leftChild;
            currentNode.rightChild = currentNode.rightChild.rightChild;
          } else {
            currentNode.value = null;
          }
        } else if (parentNode.leftChild == currentNode) {
          parentNode.leftChild =
            currentNode.leftChild || currentNode.rightChild;
        } else if ((parentNode.rightChild = currentNode)) {
          parentNode.rightChild =
            currentNode.leftChild || currentNode.rightChild;
        }
        break;
      }
    }
    return this;
  };

  traversePreOrder = () => {
    this.traversePreOrderImplementation(this.rootNode);
  };

  traversePreOrderImplementation = (node) => {
    if (!node) return;
    console.log(node.value);
    this.traversePreOrderImplementation(node.leftChild);
    this.traversePreOrderImplementation(node.rightChild);
  };

  traverserInorder = () => {
    this.traverseInorderImplementation(this.rootNode);
  };

  traverseInorderImplementation(node) {
    if (!node) return;
    traverseInorderImplementation(node.leftChild);
    console.log(node.value);
    traverseInorderImplementation(node.rightChild);
  }

  traverserPostOrder = () => {
    this.traversePostOrderImplementation(this.rootNode);
  };

  traversePostOrderImplementation(node) {
    if (!node) return;
    traversePostOrderImplementation(node.leftChild);
    traversePostOrderImplementation(node.rightChild);
    console.log(node.value);
  }

  height = () => {
    return this.heightImplementation(this.rootNode);
  };

  heightImplementation = (node) => {
    if (!node || (!node.leftChild && !node.rightChild)) {
      return 0;
    }
    return (
      1 +
      Math.max(
        this.heightImplementation(node.leftChild),
        this.heightImplementation(node.rightChild)
      )
    );
  };

  min = () => {
    this.minImplementation(this.root);
  };

  minImplementation = (node) => {
    if (!node.leftChild && !node.rightChild) {
      return node.value;
    }
    const leftMinValue = min(node.leftChild);
    const rightMinValue = min(node.rightChild);
    return Math.min(Math.min(leftMinValue, rightMinValue), node.value);
  };

  equals = (otherTree) => {
    return this.equalsImplementation(this.root, otherTree.root);
  };

  equalsImplementation = (first, second) => {
    if (!first && !second) {
      return true;
    }
    if (first && second) {
      return (
        first.value == second.value &&
        this.equalsImplementation(first.leftChild, second.leftChild) &&
        this.equalsImplementation(first.rightChild, second.rightChild)
      );
    }
    return false;
  };

  DFSIsValidBST = () => {
    return DFSIsValidBSTImplemetation(
      this.rootNode,
      Number.NEGATIVE_INFINITY,
      Number.POSITIVE_INFINITY
    );
  };

  DFSIsValidBSTImplemetation = (node, min, max) => {
    if (!node) return true;
    if (node.value < min || node.value > max) return false;
    return (
      this.DFSIsValidBSTImplemetation(node.leftChild, min, node.value - 1) &&
      this.DFSIsValidBSTImplemetation(node.rightChild, node.value + 1, max)
    );
  };

  BFSIsvalidBST = function () {
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      const currentNode = queue.shift();
      if (currentNode.left) {
        queue.push(currentNode.left);
        if (currentNode.left.val > currentNode.val) {
          return false;
        }
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
        if (currentNode.val > currentNode.right.val) {
          return false;
        }
      }
    }
    return true;
  };

  getNodeAtDistance = (height) => {
    const listNodes = [];
    this.gegetNodeAtDistanceImplemetation(this.rootNode, height, listNodes);
    return listNodes;
  };

  getNodeAtDistanceImplemetation = (node, height, listNodes) => {
    if (node) {
      return;
    }
    if (height == 0) {
      listNodes.push(node.value);
      return;
    }
    this.getNodeAtDistanceImplemetation(node.leftChild, height--, listNodes);
    this.getNodeAtDistanceImplemetation(node.rightChild, height--, listNodes);
  };

  traverseLevelOrderBFS = () => {
    for (let i = 0; i < this.height(); i--) {
      this.getNodeAtDistance(i).forEach((node) => {
        console.log(node);
      });
    }
  };

  breathFirstSearchWithQueue = () => {
    const queue = [];
    const list = [];
    queue.push(this.root);

    while (queue.length > 0) {
      const currentNode = queue.shift();
      list.push(currentNode.val);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    t;
    return list;
  };

  breathFirstSearcWithQueueRecursiveApproach = (
    queue = [this.root],
    list = []
  ) => {
    if (!queue.length) {
      return list;
    }
    const currentNode = queue.shift();
    list.push(currentNode.val);
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
    return this.breathFirstSearcWithQueueRecursiveApproach(queue, list);
  };
}
