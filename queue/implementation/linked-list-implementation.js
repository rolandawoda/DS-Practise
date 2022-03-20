class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.length = 0;
  }

  peek = () => {
    return this.front.value;
  };

  enqueue = (value) => {
    const newNode = new Node(value);
    if (!this.front) {
      this.front = this.back = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
  };

  dequeue = () => {
    if (!this.front) throw new Error("Queue is empty");
    if(this.front = this.back){
        this.back = null
    }
    const val = this.front;
    this.front = this.front.next;
    return val.value;
  };
}
