(function () {

    class Tooltip {

        /**
         * Имя компонента
         * @property {string}
         */
        get name() {
            return 'tooltip';
        }

        /**
         * Обязательный отступ
         */
        get indent() {
            return 5;
        }

        constructor() {
            /**
             * Данное свойство содержит ссылку на
             * елемент содержащий подсказку
             * @type {HTMLDivElement}
             */
            this.el = document.createElement('div');
            this.el.style.position = 'absolute';

            this.el.classList.add(this.name);
            document.body.appendChild(this.el);
        }

        /**
         * Метод подключает включает работу подсказок
         * на элементе
         *
         * @param {Element} root - элемент, внутри которого, нужно включить работу подсказок
         */
        attach(root) {
            let tooltipElem = document.body.querySelector('.tooltip');

            root.onmouseover = (e) => {
                let target = e.target;
                let tooltip = target.getAttribute('data-tooltip');
                if (!tooltip) return;

                tooltipElem.classList.add('tooltip_active');
                tooltipElem.innerHTML = tooltip;

                let coords = target.getBoundingClientRect();
                let windowHeight = document.documentElement.clientHeight;

                let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
                if (left < 0) left = 0; // не вылезать за левую границу окна

                let top = coords.top + tooltipElem.offsetHeight + this.indent;
                if (windowHeight < top) { // не вылезать за верхнюю границу окна
                    top = coords.top - target.offsetHeight - tooltipElem.offsetHeight - this.indent;
                }

                tooltipElem.style.left = left + 'px';
                tooltipElem.style.top = top + 'px';
            }

            root.onmouseout = (e) => {
                tooltipElem.innerHTML = '';
                tooltipElem.classList.remove('tooltip_active');
            };
        }

        /**
         * Удаляет все обработчики событий
         */
        detach() {
        }
    }

    window.Tooltip = Tooltip;
})();
