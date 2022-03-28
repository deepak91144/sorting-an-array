// sorting an array
const arr = [3, 10, 7, 1, 8];
//approach1 bobble sort solution
const bubbleSort = () => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let swap = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = swap;
      }
    }
  }
  console.log(arr);
};

//approach2 insertion  sort solution
const insertionSort = () => {
  let k, j;
  for (let i = 1; i < arr.length; i++) {
    k = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] > k) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = k;
  }
  console.log(arr);
};
//approach2 selection  sort solution
const selectionSort = () => {
  let indexOfMin, temp;
  for (let i = 0; i < arr.length - 1; i++) {
    indexOfMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[indexOfMin];
    arr[indexOfMin] = temp;
  }
  console.log(arr);
};
// insertionSort();
// bubbleSort();
selectionSort();
