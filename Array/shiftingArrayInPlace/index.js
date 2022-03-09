
const shiftRight = (array, shift) => {
    const len = array.length
    shift  = Math.abs(len + (shift % len))
    let swapPosition = shift % len
    for(let i = 0; i < len - 1; i++) {
        const temp = array[0]
        array[0] = array[swapPosition]
        array[swapPosition] = temp
        swapPosition = (swapPosition + shift) % len
    }
}