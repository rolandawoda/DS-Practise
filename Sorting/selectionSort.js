const dataset = [10, 1, 13, 100, 23, 50, 30];

const selectionSort = (arr) => {
    const len = arr.length;
    for(let i = 0; i < len; i++){
       let minIndex = i;
       for(let j = i; j < len; j++){
           if(arr[j] < arr[minIndex]){
               minIndex = j
           }
       }
       const temp = arr[i];
       arr[i] = arr[minIndex];
       arr[minIndex] = temp;
    }
}

selectionSort(dataset);
console.log(dataset);