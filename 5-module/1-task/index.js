'use strict';

/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    const lines = table.querySelectorAll('tbody tr');

    for (let tr of lines) {
        // Вычисление наличия
        const tdAvailableTd = tr.querySelector('[data-available]');

        if (tdAvailableTd) {
            const dataAvailable = tdAvailableTd.dataset.available;

            if (dataAvailable === 'true') tr.classList.add('available');
            if (dataAvailable === 'false') tr.classList.add('unavailable');
        } else {
            tr.setAttribute('hidden', 'true');
        }

        // Вычисление пола
        const genderNode = tr.querySelector('td:nth-of-type(3)');
        const gender = genderNode.textContent;

        if (gender === 'm') tr.classList.add('male');
        if (gender === 'f') tr.classList.add('female');

        // Вычисление возраста
        const ageNode = tr.querySelector('td:nth-of-type(2)');
        const age = parseFloat(ageNode.textContent);

        if (age < 18) tr.style = "text-decoration: line-through";
    }
}
