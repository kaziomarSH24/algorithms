//wirte merge sort function

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
  }
    function merge(arr1, arr2) {
        let result = [];
        let i = 0;
        let j = 0;
        while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
        }
        while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
        }
        while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
        }
        return result;
    }
    
    let arr = [7,20,3,15, 10, 5, 25, 30];

    console.log('Unsorted Array: ', arr);
    console.log('Sorted Array using merge sort: ', mergeSort(arr));
   
    