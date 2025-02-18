//quick sort function
let arr = [50,20,30,15,10,5,100];

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
      let p = pivot(arr, left, right);
      quickSort(arr, left, p - 1);
      quickSort(arr, p + 1, right);
    }
    return arr;
  }

//partition function
function pivot(arr, start = 0, end = arr.length - 1) {
    let pivot = arr[start];
    let s = start;
    for (let i = start + 1; i <= end; i++) {
      if (pivot > arr[i]) {
        s++;
        swap(arr, s, i);
      }
    }
    swap(arr, start, s);
    return s;
  }

//swap function
function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

console.log('Unsorted Array: ', arr);
console.log('Sorted Array using QuickSort: ', quickSort(arr));
