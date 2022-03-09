const insertElement = (el, arr, idx) => {
    const len = arr.length
    if(idx >= len) return
    for(let i = len; i > idx; i--){
        arr[i] = arr[i - 1]
    }
    arr[idx] = el
}