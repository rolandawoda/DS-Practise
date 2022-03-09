class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next
    }
}

class LinkedList {

    //addfirst
    addFirst = (item) => {
        const newNode = new Node(item);
        if (this.first) {
            newNode.next = this.first;
            this.first = newNode;
        }
        else {
            this.first = newNode
            this.last = newNode
        }

    }
    //addLast

    addLast = (item) => {
        const newNode = new Node(item)
        if (this.last) {
            this.last.next = newNode;
            this.last = newNode
        } else {
            this.first = newNode
            this.last = newNode
        }
    }
    //deleteFirst
    deleteFirst = () => {
        this.first = this.first.next
    }

    //deleteLast
    deleteLast = () => {
        let currentNode = this.first;
        while (currentNode) {
            if (!currentNode.next.next) {
                this.last = currentNode
                this.last.next = null
                return
            }
            currentNode = currentNode.next
        }
    }

    //contains
    contains = (item) => {
        let currentNode = this.first;
        while (currentNode) {
            if (currentNode.value == item) {
                return true
            }
            currentNode = currentNode.next
        }
        return false
    }

    //indexOf 
    indexOf = (item) => {
        let currentNode = this.first;
        let index = 0
        while (currentNode) {
            if (currentNode.value == item) {
                return index
            }
            index++
            currentNode = currentNode.next
        }
        return -1
    }

    //print
    toArray = () => {
        let items = [];
        let currentNode = this.first;
        while (currentNode) {
            items.push(currentNode.value)
            currentNode = currentNode.next
        }
        return items
    }

    reverse = () => {
       let previous = this.first
       let current = this.first.next
       while(current){
            const next = current.next
            current.next = previous
            previous = current
            current = next
       }
       this.last = this.first
       this.last.next = null 
       this.first = previous
    }

    getKthNodeFromTheEnd = (k) => {
       let a = this.first
       let b = this.first
       for(let i = 0; i < k - 1; i++){
           b = b.next
       } 
       while(b != this.last){
           a = a.next;
           b = b.next
       }
       return a.value
    }
}

const list = new LinkedList()
list.addLast(1)
list.addLast(2)
list.addLast(14)
list.addLast(4)
console.log(list.toArray())
console.log(list.getKthNodeFromTheEnd(3))
console.log(list.reverse())
console.log(list.toArray())