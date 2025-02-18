//insertion sort
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let currentVal = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > currentVal) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = currentVal;
    }
    return arr;
  }
  let arr = [20,15,10,5,25,30];
 
  console.log('Unsorted Array: ', arr);
  console.log('Sorted Array: ', insertionSort(arr));
  

  //write some short notes on insertion sort
    //Insertion sort is a simple sorting algorithm that works the way we sort playing cards in our hands.
    // It is efficient for smaller data sets, but very inefficient for larger lists.
    