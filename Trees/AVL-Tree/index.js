class Node {
    value = null
    leftchild = null
    rightChild = null
    height = null
    constructor(value) {
        this.value = value
    }
}
class AVLTree {
    rootNode = null


    insert = value => {
        this.root = this.insertImplementation(value, this.rootNode)
    }

    insertImplementation = (value, node) => {
        if (node === null) {
            return new Node(value)
        }
        if (node.value < value) {
            node.leftchild = this.insertImplementation(value, node.leftchild)
        } else {
            node.rightChild = this.insertImplementation(value, node.rightChild)
        }
        node.height = Math.max(this.height(node.leftchild), this.height(node.rightChild)) + 1

        const balanceFactor = this.balanceFactor(node)

        if (this.isLeftHeavy(node)) {
            console.log(node.value + "left heavy")
        } else if (this.isRightHeavy(node)) {
            console.log(node.value + "right heavy")
        }

        return node
    }

    isLeftHeavy = (node) => {
        return node.leftchild.height - node.rightChild.height > 1
    }

    isRightHeavy = (node) => {
        return node.leftchild.height - node.rightChild.height < -1
    }

    balanceFactor = (node) => {
        return !node ? 0 : this.height(node.leftchild) - this.height(node.rightChild)
    }

    height = (node) => {
        return !node ? -1 : node.height
    }
}