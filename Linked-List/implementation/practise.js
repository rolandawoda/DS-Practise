class Node {
  value = null;
  next = null;
  /*
     @param any
    */
  constructor(val) {
    this.value = val;
  }
}

class LinkedList {
  head = null;
  length = 0;
  //search
  /*
\  @params any
   @return  boolean
  */

   has = (val) => {
      let currentNode = this.head;
      while (currentNode) {
        if(currentNode.value == val){
            return true;
        }
        currentNode = currentNode.next;
      }
      return false
   }

  /*
   * @params array
   * @return boolean
   */
  put = (value) => {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode) {
        if (currentNode.next == null) break;
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  };
  //insertAt;

  /*
     @return any
    */
  remove = () => {
    if (!this.head) throw new Error("Cannot remove from an empty list");
    let value;
    if (this.head.next == null) {
      value = this.head.value;
      this.head = null;
    } else {
      let currentNode = this.head;
      while (currentNode) {
        if (currentNode.next != null && currentNode.next.next != null) {
          currentNode = currentNode.next;
        } else {
          break;
        }
      }
      value = currentNode.next;
      currentNode.next = null;
    }
    return value;
  };
  //to string
  /*
     @return Array<any> 
    */
  toString = () => {
    const result = [];
    let currentNode = this.head;
    while (currentNode) {
      result.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return result;
  };

  reverse = () => {
      let previous = this.head;
      let currentNode = this.head.next;
      while(currentNode){
        const next  = currentNode.next;
        currentNode.next = previous;
        previous = currentNode;
        currentNode = next;
      }
      this.head.next = null
      this.head = previous
  }
}

let list = new LinkedList();
list.put(1);
list.put(2);
list.put(5);
list.reverse();
console.log(list.toString());
list.reverse();
console.log(list.toString());
