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

            this.onMouseOver = this.mouseOver.bind(this);
            this.onMouseOut = this.mouseOut.bind(this);
        }

        /**
         * Метод подключает включает работу подсказок
         * на элементе
         *
         * @param {Element} root - элемент, внутри которого, нужно включить работу подсказок
         */
        attach(root) {
            this.root = root;
            this.root.addEventListener('mouseover', this.onMouseOver);
            this.root.addEventListener('mouseout', this.onMouseOut);
        }

        /**
         * Удаляет все обработчики событий
         */
        detach() {
            this.root.removeEventListener('mouseover', this.onMouseOver);
            this.root.removeEventListener('mouseout', this.onMouseOut);
        }

        mouseOver(e) {
            let target = e.target;
            let tooltip = target.getAttribute('data-tooltip');
            if (!tooltip) return;

            this.el.classList.add('tooltip_active');
            this.el.innerHTML = tooltip;

            let coords = target.getBoundingClientRect();
            let windowHeight = document.documentElement.clientHeight;

            let top = coords.top + this.el.offsetHeight + this.indent;
            if (windowHeight < top) { // не вылезать за верхнюю границу окна
                top = coords.top - target.offsetHeight - this.el.offsetHeight - this.indent;
            }

            this.el.style.top = top + 'px';
        }

        mouseOut() {
            this.el.innerHTML = '';
            this.el.classList.remove('tooltip_active');
        }
    }

    window.Tooltip = Tooltip;
})();
