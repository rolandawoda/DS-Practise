const nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3;
//Expected Output
// Output: [1,2,2,3,5,6]

const mergeSortedArray = (nums1, m, nums2, n) => {
    let newArr = [];
    let pos = 0;
    let i = 0;
    let j = 0;

    while (i < m && j < n) {
        if (nums1[i] < nums2[j]) {
            newArr[pos++] = nums1[i++]
        } else {
            newArr[pos++] = nums2[j++]
        }
    }

    while (i < m) {
        newArr[pos++] = nums1[i++]
    }

    while (j < n) {
         newArr[pos++] = nums2[j++]
    }

}

mergeSortedArray(nums1, m, nums2, n)
