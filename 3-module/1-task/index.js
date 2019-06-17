/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
    let str = [];

    for (let item of data) {
        if (item.age <= age) {
            str.push(`${item.name}, ${item.balance}`);
        }
    }

    str = str.join('\n');

    return str;
}


