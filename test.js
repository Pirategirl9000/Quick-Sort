function quickSort(array) {
    if (array.length < 2) {
        return array;
    }

    let pivot = array[0];
    let left = [];
    let right = [];

    for (let i = 1; i < array.length; i++) {
        if (pivot > array[i]) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([43, -2, 409, 0, -48, 4387, -48, 28, -458, 397, 48, 0, -348]));