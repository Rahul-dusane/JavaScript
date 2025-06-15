let array = []; // Declare array outside to persist values

function mergeSort(array, start, end) {
    if (start >= end) {
        return;
    }

    let center = start + Math.floor((end - start) / 2);

    mergeSort(array, start, center);
    mergeSort(array, center + 1, end);

    merge(array, start, center, end);
}

function input() {
    let num = parseInt(document.getElementById("num1").value);
    if (!num && num !== 0) return;

    if (array.length < 5) {
        array.push(num);
    }

    if (array.length === 5) {
        mergeSort(array, 0, array.length - 1);
        document.getElementById("result").innerText = "Sorted Array: " + array.join(", ");
    }
}

function merge(array, start, center, end) {
    let l1 = center - start + 1;
    let l2 = end - center;

    let arr1 = new Array(l1);
    let arr2 = new Array(l2);

    for (let i = 0; i < l1; i++) {
        arr1[i] = array[start + i];
    }
    for (let i = 0; i < l2; i++) {
        arr2[i] = array[center + 1 + i];
    }

    let i = 0, j = 0, k = start;

    while (i < l1 && j < l2) {
        if (arr1[i] < arr2[j]) {
            array[k] = arr1[i];
            i++;
        } else {
            array[k] = arr2[j];
            j++;
        }
        k++;
    }

    while (i < l1) {
        array[k] = arr1[i];
        i++;
        k++;
    }

    while (j < l2) {
        array[k] = arr2[j];
        j++;
        k++;
    }
}
