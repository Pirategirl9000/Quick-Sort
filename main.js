function quickSort(array) {
    if (array.length < 1) {
        return array;
    }

    let pivot = array[0];
    let left = [];
    let right = [];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([-45, 0, -6, -3847, 4983, 95, 38, -385, -58, 5838, 1, 497, -384]));