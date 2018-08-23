'use strict';

(function () {
    class Calc {
        constructor(input, display) {
            this._input = document.querySelectorAll(input);
            this._display = document.querySelector(display);
            this._assignEvent(this._input);
        }
        _assignEvent(input) {
            input.forEach(this._click, this);
        }
        _click(input) {
            input.addEventListener('click', this._calculate.bind(this));
        }
        _calculate(input) {
            if (input.target.value === 'C') {
                this._display.value = '';
            }
            else if (input.target.value === '=') {
                this._display.value = eval(this._display.value);
            }
            else {
                this._display.value += input.target.value;
            }
        }
    }
    new Calc('input[type ="button"]', '#res');
})();
