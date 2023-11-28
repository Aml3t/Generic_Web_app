var Shopper = /** @class */ (function () {
    function Shopper(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Shopper.prototype.showName = function () {
        alert("".concat(this.firstName, " ").concat(this.lastName));
    };
    return Shopper;
}());
//# sourceMappingURL=shopper.js.map