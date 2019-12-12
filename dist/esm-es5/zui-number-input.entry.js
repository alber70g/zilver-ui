import { r as registerInstance, h } from './core-930aed62.js';
var NumberInput = /** @class */ (function () {
    function NumberInput(hostRef) {
        registerInstance(this, hostRef);
        /**
         * minimalNumber is the minimal value it takes
         * the default value is set to 0 so it will not accept negative numbers
         */
        this.minimalNumber = 0;
    }
    NumberInput.prototype.handleKeyDown = function (ev) {
        var isNum = /^[a-zA-Z0-9._\b]+$/.test(String.fromCharCode(ev.keyCode));
        if (ev.key === "ArrowUp" || ev.key === "ArrowDown") {
            this.numValue = this.numInput.value;
            return;
        }
        else if (!isNum) {
            ev.preventDefault();
            return false;
        }
        return undefined;
    };
    NumberInput.prototype.render = function () {
        var _this = this;
        return (h("input", { pattern: "\\d*", type: "number", min: this.minimalNumber, placeholder: this.placeholder, ref: function (el) { return (_this.numInput = el); }, value: this.numValue || this.value }));
    };
    Object.defineProperty(NumberInput, "style", {
        get: function () { return "input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}"; },
        enumerable: true,
        configurable: true
    });
    return NumberInput;
}());
export { NumberInput as zui_number_input };
