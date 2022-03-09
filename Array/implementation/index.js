class ArrayList {
    items;
    count = 0

    constructor(length) {
        this.items = new Array(length)
    }

    indexOf = (item) => {
        for (let i = 0; i < this.count; i++) {
            if (this.items[i] = item) {
                return i
            }
        }
        return -1
    }

    insert = (item) => {
        if (this.items.length === this.count) {
            const newDoubleArray = new Array(this.count * 2)
            for (let i = 0; i < this.count; i++) {
                newDoubleArray[i] = this.items[i]
            }
            this.items = newDoubleArray
        }
        this.items[this.count++] = item
    }

    print = () => {
        for(let i = 0; i < this.count; i++){
            console.log(this.items[i])
        }
    }

    removeAt = (index) => {
        if (index < 0 || index >= this.count) {
            throw new Error("index out of bound")
        }
        for (let i = index; i < this.count; i++) {
            this.items[i] = this.items[i + 1]
        }
        this.count--
    }

}


const list = new ArrayList(4)
list.insert(4)
list.insert(3)
list.insert(2)
list.insert(1)
list.insert(0)
list.print()