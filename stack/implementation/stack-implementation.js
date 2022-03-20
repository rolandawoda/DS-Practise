class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class Stack {
    constructor(value){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek = () => {
        if(this.top) throw new Error('Stack is empty');
        return this.top.value
    }

    push = (value) => {
        const newNode = new Node(value)
        if(!this.bottom){
             this.bottom = this.top = newNode;
        }else {
            newNode.next = this.top
            this.top = newNode;
        }
    }

    pop = () => {
        if(this.top) throw new Error('Stack is empty');
        const value = this.top;
        if(this.top == this.bottom){
            this.top = this.bottom = null;
        }else{
            this.top = value.next;
        }
        return value.value
    }
}