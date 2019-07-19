(function () {
    'use strict';

    /**
     * Компонент, который реализует таблицу
     * с возможностью удаления строк
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
    class ClearedTable {
        constructor(data) {
            this.el = document.createElement('table');
            this.data = data;
            this.elThead = document.createElement('thead');
            this.elTbody = document.createElement('tbody');
            this.arrTitle = [];

            this.init();
        }

        init() {
            this.el.classList.add('pure-table');
            this.el.appendChild(this.elThead);
            this.el.appendChild(this.elTbody);
            this.listTitle();
            this.render();
            this.addEventDel();
        }

        listTitle() {
            for (let item in this.data) {
                if (+item === 0) {
                    for (let title in this.data[item]) {
                        if (!(title === 'id')) {
                            this.arrTitle.push(title);
                        }
                    }

                    this.arrTitle.push('');
                }
            }
        }

        render() {
            this.renderHead();
            this.renderBody();
        }

        renderHead() {
            let thead = this.el.querySelector('thead');
            let row = document.createElement('tr');
            thead.appendChild(row);

            for (let title of this.arrTitle) {
                let td = document.createElement('td');

                td.innerText = title;
                row.appendChild(td);
            }
        }

        renderBody() {
            let tbody = this.el.querySelector('tbody');
            tbody.innerHTML = '';

            for (let item of this.data) {
                let row = document.createElement('tr');

                for (let param in item) {
                    let td = document.createElement('td');

                    if (param === 'id') {
                        td.innerHTML = `<a href="#delete" data-delete-id="${item[param]}">X</a>`;
                        row.appendChild(td);
                    } else {
                        td.innerText = item[param];
                        row.insertBefore(td, row.lastChild);
                    }
                }

                tbody.appendChild(row);
            }
        }

        addEventDel() {
            this.el.addEventListener('click', (event) => {
                if (!event.target.hasAttribute('data-delete-id')) return;
                event.preventDefault();
                let id = parseInt(event.target.getAttribute('data-delete-id'));

                this.onRemoved(id);
            });
        }

        /**
         * Метод который выщывается после удалении строки
         * @param {number} id - идентификатор удаляемого пользователя
         */
        onRemoved(id) {
            for (let item in this.data) {
                if (this.data[item].id == id) {
                    this.data.splice(item, 1);
                }
            }

            this.renderBody();
        }
    }

    window.ClearedTable = ClearedTable;
})();
