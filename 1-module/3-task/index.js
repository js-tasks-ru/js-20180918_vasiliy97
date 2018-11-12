'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
    let myArray = str.split(" ").join().split(',');
    let min = parseFloat(myArray[0]);
    let max = min;

    for (let i in myArray) {
        myArray[i] = parseFloat(myArray[i]);
        if (myArray[i] > max) max = myArray[i];
        if (myArray[i] < min) min = myArray[i];
    }

    return {min, max};
}

