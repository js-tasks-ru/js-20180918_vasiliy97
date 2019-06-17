'use strict';

/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
function SortableTable(items) {
    /**
     * @property {Element} - обязательно свойство, которое ссылается на элемент <table>
     */
    this.el = document.createElement('table');
    let elThead = document.createElement('thead');
    let elTbody = document.createElement('tbody');
    let arrTitle = [];

    this.el.appendChild(elThead);
    this.el.appendChild(elTbody);

    for (let item in items) {
        if (+item === 0) {
            for (let title in items[item]) {
                arrTitle.push(title);
            }
        }
    }

    this.renderHead = function() {
        let thead = this.el.querySelector('thead');
        let row = document.createElement('tr');
        thead.appendChild(row);

        for (let title of arrTitle) {
            let td = document.createElement('td');

            td.innerText = title;
            row.appendChild(td);
        }
    };

    this.renderBody = function() {
        let tbody = this.el.querySelector('tbody');
        tbody.innerHTML = '';

        for (let item of items) {
            let row = document.createElement('tr');

            for (let param in item) {
                let td = document.createElement('td');

                td.innerText = item[param];
                row.appendChild(td);
            }

            tbody.appendChild(row);
        }
    };

    this.renderHead();
    this.renderBody();

    /**
     * Метод выполняет сортировку таблицы
     * @param {number} column - номер колонки, по которой нужно выполнить сортировку (отсчет начинается от 0)
     * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
     */
    this.sort = function (column, desc = false) {
        let param = arrTitle[column];
        let order = 1;

        if (desc) order = order * -1;

        items.sort(function(a, b) {
            return a[param] > b[param] ? order : order * -1;
        });

        this.renderBody();
    };
}

