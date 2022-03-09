class Node {
    value = null;
    rightChild = null;
    leftChild = null;
    constructor(value){
        this.value = value
    }
}

class BST {
    rootNode = null;
    constructor(node){
        const newNode = new Node(value)
        this.rootNode = newNode
    }

    insert = (value) => {
        const newNode = new Node(value);
        if(!this.rootNode){
            this.rootNode = newNode;
            return this
        }
        const currentNode = this.rootNode
        while(true){
            if(value < currentNode.value){
                if(!currentNode.leftChild){
                    currentNode.leftChild = newNode
                    break
                }
                currentNode  = currentNode.leftChild
            }else {
                if(!currentNode.rightChild){
                    currentNode.rightChild = newNode
                    break
                }
                currentNode  = currentNode.rightChild
            }
        }
        return this
    }

    search = (value) => {
        let currentNode = this.rootNode;
        while(currentNode){
            if(value < currentNode.value){
                currentNode = currentNode.leftChild;
            }else if(value > currentNode.value){
                currentNode = currentNode.rightChild;
            }else {
                return true;
            }
        }
        return false;
    }

    min = (node) => {
        let currentNode = node || this.rootNode;
        let previousNode = null
        while(currentNode){
            previousNode = currentNode
            currentNode = currentNode.leftChild
        }
        return previousNode.value
    }

    minRecursion = (node = this.rootNode) => {
        if(!node){
            return 0
        }
        if(!node.rightChild && !node.leftChild){
            return node.value
        }
        return Math.min(node.value, Math.min(this.minRecursion(node.leftChild), this.minRecursion(node.rightChild)))
    }

    delete = (value, parentNode) => {
        let currentNode =  parentNode || this.rootNode;
        while(currentNode){
            if(value < currentNode.value){
                parentNode = currentNode
                currentNode = currentNode.leftChild
            }else if( value > currentNode.value){
                parentNode = currentNode
                currentNode = currentNode.rightChild
            }else {
                if(currentNode.leftChild && currentNode.rightChild){
                    currentNode.value = this.min(currentNode.rightChild)
                    this.delete(currentNode.value, currentNode.rightChild)
                }else if(!parentNode){
                    if(currentNode.rightChild){
                        currentNode.value = currentNode.rightChild.value;
                        currentNode.leftChild = currentNode.rightChild.leftChild
                        currentNode.rightChild = currentNode.rightChild.leftChild
                    }else if (currentNode.leftChild){
                        currentNode.value = currentNode.leftChild.value;
                        currentNode.rightChild = currentNode.leftChild.rightChild;
                        currentNode.leftChild = currentNode.leftChild.leftChild
                    }else{
                        currentNode = null
                    }
                }
                else if( parentNode.leftChild){
                    parentNode.leftChild = currentNode.leftChild || currentNode.rightChild
                }else if( parentNode.rightChild){
                    parentNode.rightChild = currentNode.rightChild || currentNode.leftChild
                }
            }
        } 
    }

    height = (node) => {
        if(!node || (!node.leftChild && !node.rightChild)) {
            return 0
        }
        return 1 + Math.max(this.height(node.leftChild, this.height(node.rightChild)))
    }

    equals = (node1, node2) => {
        if(!node1 && !node2){
            return true
        }
        if(!node1 || !node2){
            return false
        }
        if(node1.value !== node2.value){
            return false
        }
        return  (node1.value === node2.value) 
                && this.equals(node1.leftChild, node2.leftChild)
                && this.equals(node1.rightChild, node2.rightChild)
    }

    isBianrySearchTree = (node = this.rootNode, min = -2147483648,  max = 2147483647) => {
        if(!node) return true
        if(node.value < min || node.value > max) return false
        return this.isBianrySearchTree(node.leftChild) && this.isBianrySearchTree(node.rightChild)
    }
}