
let arr = [5, 10, 15, 20, 25, 30];
searchElement(arr, 15);

function linearSearch(arr, key) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key) {
            return i;
        }
    }
    return -1;
}

function searchElement(arr, key) {
    const index = linearSearch(arr, key);
    if (index !== -1) {
        console.log(`Element ${key} found at index position ${index}`);
    } else {
        console.log(`Element ${key} not found in the array`);
    }
}

