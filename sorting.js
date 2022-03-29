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

// approach 3 quicksort

const partition = (A, low, high) => {
  let pivot = A[low];
  let i = low + 1;
  let j = high;
  let temp;

  do {
    while (A[i] <= pivot) {
      i++;
    }

    while (A[j] > pivot) {
      j--;
    }

    if (i < j) {
      temp = A[i];
      A[i] = A[j];
      A[j] = temp;
    }
  } while (i < j);

  // Swap A[low] and A[j]
  temp = A[low];
  A[low] = A[j];
  A[j] = temp;
  return j;
};
const quickSort = (arr, low, high) => {
  let partitionIndex;
  if (low < high) {
    partitionIndex = partition(arr, low, high);
    quickSort(arr, low, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, high);
  }
  console.log(arr);
};
// approach 5 merge sort function
const merge = (A, mid, low, high) => {
  let i,
    j,
    k,
    B = [];
  i = low;
  j = mid + 1;
  k = low;

  while (i <= mid && j <= high) {
    if (A[i] < A[j]) {
      B[k] = A[i];
      i++;
      k++;
    } else {
      B[k] = A[j];
      j++;
      k++;
    }
  }
  while (i <= mid) {
    B[k] = A[i];
    k++;
    i++;
  }
  while (j <= high) {
    B[k] = A[j];
    k++;
    j++;
  }
  for (let i = low; i <= high; i++) {
    A[i] = B[i];
  }
};
const mergeSort = (A, low, high) => {
  let mid;
  if (low < high) {
    mid = (low + high) / 2;
    mergeSort(A, low, mid);
    mergeSort(A, mid + 1, high);
    merge(A, mid, low, high);
  }
  console.log(A);
};
// arpporoach 6 count sorting

// insertionSort();
// bubbleSort();
// selectionSort();
// mergeSort(arr, 0, arr.length - 1);
quickSort(arr, 0, arr.length - 1);
