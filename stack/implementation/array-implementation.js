class ArrayStack {
    items = []
    count = 0
    constructor(count) {
        this.items = new Array(count).fill(0)
    }

    isEmpty = () => {
        return this.count === 0
    }

    isFull = () => {
        return this.count === this.items.length
    }

    //push

    push = (item) => {
        if (this.isFull()) throw new Error('Stack overflow, cannot add to a stack that is completely filled')
        this.items[this.count++] = item
    }

    //pop

    pop = () => {
        if (this.isEmpty()) throw new Error('Stack Empty, cannot remove from an already empty stack')
        return this.items[--this.count]
    }

    //peek
    peek = () => {
        if (this.isEmpty()) throw new Error('Illegal Operation')
        return this.items[this.count - 1]
    }

    toString = () => {
        return this.items.splice(0, this.count)
    }

    //size
    length = () => {
        return this.count
    }
}

const shooter = () => {
    const shooters = []
    const createShooter = () => {
        i = 0
        while (i < 5) {
            shooters.push((function (i) {
                return function () {
                    console.log(i);
                }
            })(i))
            i++
        }
    }
    createShooter()
    return shooters;
}