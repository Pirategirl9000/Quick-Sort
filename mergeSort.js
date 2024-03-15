function mergeSort(array) {
    if (array.length == 1) {
        return array;
    }

    let arrayOne = [];
    let arrayTwo = [];

    for (let i = 0; i < Math.floor(array.length/2); i++) {
        arrayOne.push(array[i]);
    }

    for (let i = Math.floor(array.length/2); i < array.length; i++) {
        arrayTwo.push(array[i]);
    }


    arrayOne = mergeSort(arrayOne);
    arrayTwo = mergeSort(arrayTwo);
    return merge(arrayOne, arrayTwo);
}

function merge(arrayOne, arrayTwo) {
    let array = [];
    let i = 0;
    let j = 0;

    while (i < arrayOne.length && j < arrayTwo.length) {
        if (arrayOne[i] < arrayTwo[j]) {
            array.push(arrayOne[i]);
            i++;
        } else {
            array.push(arrayTwo[j]);
            j++;
        }
    }

    while (i < arrayOne.length) {
        array.push(arrayOne[i]);
        i++;
    }

    while (j < arrayTwo.length) {
        array.push(arrayTwo[j]);
        j++;
    }

    return array;
}

console.log(mergeSort([49, -38, 0, 0, -483, 4875, 34937, -458, 383, 5973, -384, 5973, -58463]));