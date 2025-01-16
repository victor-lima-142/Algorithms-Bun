import { bubbleSort, insertionSort, quickSort, selectionSort } from "./sorts"

const numList = [30, 12, 5, 3, 2, 23, 1, 4, 10]

console.log(bubbleSort(numList))
console.log(quickSort(numList))
console.log(selectionSort(numList))
console.log(insertionSort(numList))