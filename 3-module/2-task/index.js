let calendar = {
    from: new Date('2018-01-01T15:09:10Z'),
    to: new Date('2018-02-01T10:09:10Z')
};

calendar[Symbol.iterator] = function () {
    let current = this.from;
    let last = this.to;

    return {
        next() {
            if (current <= last) {
                let date = new Date(current.setDate(current.getDate() + 1));
                let value = '';

                if (date.getDay() === 0 || date.getDay() === 6) {
                    value = `[${checkDay(date)}]`;
                } else {
                    value = `${checkDay(date)}`;
                }

                function checkDay(date) {
                    let day = date.getDate();
                    if (day < 10) day = '0' + day;
                    return day;
                }

                return {
                    done: false,
                    value: value
                };
            } else {
                return {
                    done: true
                };
            }
        }

    }
};
