class Queue {
  constructor() {
    this.front = [];
    this.back = [];
  }

  peek() {
    if (this.last.length > 0) {
      return this.last.length[0];
    }
    return this.first[this.first.length - 1];
  }

  enqueue(value) {
    for (let i = 0; i < this.front.length; i++) {
      this.back.push(this.front.pop());
    }
    this.back.push(value);
  }

  dequeue() {
    for (let i = 0; i < this.back.length; i++) {
      this.front.push(this.back.pop());
    }
    return this.front.pop();
  }
}
