'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
    let arr = str.split(" ").join().split(',');
    let min = parseFloat(arr[0]);
    let max = min;

    for (let i in arr) {
        arr[i] = parseFloat(arr[i]);
        if (arr[i] > max) max = arr[i];
        if (arr[i] < min) min = arr[i];
    }

    return {min, max};
}
