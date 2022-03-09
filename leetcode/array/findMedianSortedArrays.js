/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).
*/

var findMedianSortedArrays = function (arr1, arr2) {
    const totalLength = arr1.length + arr2.length;
    const isEven = totalLength % 2 === 0
    const mergedArray = [];
    let arr1Pos = 0
    let arr2Pos = 0
    while ((arr1Pos < arr1.length) && (arr2Pos < arr2.length)) {
        if (arr1[arr1Pos] > arr2[arr2Pos]) {
            mergedArray.push(arr2[arr2Pos++]);
        } else {
            mergedArray.push(arr1[arr1Pos++]);
        }
    }
    for (arr1Pos; arr1Pos < arr1.length; arr1Pos++) {
        mergedArray.push(arr1[arr1Pos]);
    }
    for (arr2Pos; arr2Pos < arr2.length; arr2Pos++) {
        mergedArray.push(arr2[arr2Pos]);
    }

    const median = isEven ? totalLength / 2 : Math.ceil(totalLength / 2)

    return isEven ? (mergedArray[median - 1] + mergedArray[median]) * 0.5 : mergedArray[median]

};


const nums1 = [1, 2], nums2 = [3, 4]

/*
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5
*/

const result = findMedianSortedArrays(nums1, nums2);
console.log(result)