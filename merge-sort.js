function mergeSort(arr) {
    if (arr.length === 1) return arr;
    else {
        let newArr = []
        let a = mergeSort(arr.slice(0, arr.length / 2));
        let b = mergeSort(arr.slice(arr.length / 2, arr.length));

        if (a[0] < b[0]) {
            b = mergeSort([...a.slice(1, a.length), ...b]);
            newArr = [a[0], ...b];
        } else {
            a = mergeSort([...b.slice(1, b.length), ...a]);
            newArr = [b[0], ...a];
        }

        return newArr;
    }
}

console.log(mergeSort([6, 4]));
console.log(mergeSort([5, 3, 7]));
console.log(mergeSort([7, 56, 32, 11, 29]));
console.log(mergeSort([1, 5, 76, 14, 54, 12, 63]));
console.log(mergeSort([99, -2, 54, 0.008, -76, 0.9, 36]));