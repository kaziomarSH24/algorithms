//bainary search

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

let arr = [5,10,22,35,46,89,92,93,99,100];
let target = 35;
console.log(`Found Element ${target} at position`,binarySearch(arr, target)); 
