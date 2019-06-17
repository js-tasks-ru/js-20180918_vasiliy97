/**
 * Клонируем объект
 * @param {Object} obj - объект в котором ищем
 * @param {*} value - значение, которе ищем
 * @returns {Object}
 */
function find (obj, value) {
    let arr = [];
    let arrIn = [];

    function find2 (obj2, value2) {
        for (let key in obj2) {
            arrIn.push(key);
            if (typeof obj2[key] === 'object') {
                find2(obj2[key], value);
            }
            if (value2 === obj2[key]) {
                let str = arrIn.join('.');
                arrIn = [];
                arr.push(str);
            }
        }
    }

    find2(obj, value);

    if (arr.length === 1) {
        return arr.join('');
    } else if (arr.length === 0) {
        return null;
    } else {
        return arr;
    }
}
