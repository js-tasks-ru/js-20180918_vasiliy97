/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow(m, n) {
    let number = m;

    for(let i = 0; i < n; i++) {
        if (i > 0) {
            number = number * m;
        }
    }

    return number;
}
