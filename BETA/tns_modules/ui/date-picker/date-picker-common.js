var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var dependencyObservable = require("ui/core/dependency-observable");
var proxy = require("ui/core/proxy");
var view = require("ui/core/view");
var DatePicker = (function (_super) {
    __extends(DatePicker, _super);
    function DatePicker() {
        _super.call(this);
    }
    Object.defineProperty(DatePicker.prototype, "year", {
        get: function () {
            return this._getValue(DatePicker.yearProperty);
        },
        set: function (value) {
            this._setValue(DatePicker.yearProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatePicker.prototype, "month", {
        get: function () {
            return this._getValue(DatePicker.monthProperty);
        },
        set: function (value) {
            this._setValue(DatePicker.monthProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatePicker.prototype, "day", {
        get: function () {
            return this._getValue(DatePicker.dayProperty);
        },
        set: function (value) {
            this._setValue(DatePicker.dayProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    DatePicker.yearProperty = new dependencyObservable.Property("year", "DatePicker", new proxy.PropertyMetadata(0));
    DatePicker.monthProperty = new dependencyObservable.Property("month", "DatePicker", new proxy.PropertyMetadata(0));
    DatePicker.dayProperty = new dependencyObservable.Property("day", "DatePicker", new proxy.PropertyMetadata(0));
    return DatePicker;
})(view.View);
exports.DatePicker = DatePicker;
