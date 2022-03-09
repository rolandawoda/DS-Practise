const Input = [1, 0, 2, 3, 0, 4, 5, 0]
// Expwctwd Output
//[1,0,0,2,3,0,0,4]



const duplicateZeroQuadComplexity = (arr) => {
    const len = arr.length - 1
    for (let i = len; i >= 0; i--) {
        if (arr[i] == 0) {
            for (let j = len; j > i; j--) {
                arr[j] = arr[j - 1]
            }
        }
    }
}

const duplicateZeroLinearComplexity = (arr) => {
    const len = arr.length - 1
    let duplicates = 0;

    //traverse through the array to determine total number of duplicates
    for (let i = 0; i <= len; i++) {
        if (!((i + duplicates) >= len)) {
            if (arr[i] == 0) {
                duplicates++
            }
        }
    }

    let reserved = len - duplicates

    //trverse the element that will be left and copy the elements
    for (let i = reserved; i >= 0; i-- ){
        if(arr[i] == 0 ){
            arr[i + duplicates] = 0
            duplicates--
            arr[i + duplicates] = 0
        }else{
            arr[i + duplicates] = arr[i]
        }
    }


}

duplicateZeroLinearComplexity(Input);

console.log(Input)