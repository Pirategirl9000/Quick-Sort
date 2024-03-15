function quickSort(array) {
    if (array.length < 2) {
        return array;
    }

    let left = [];
    let right = [];
    let pivot = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([-49, -4, 39874, 0, 0, 4836, -3836, 8574, -5862, 54857, 39836, 5986, -2829, 0]));