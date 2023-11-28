var shopper = /** @class */ (function () {
    function shopper(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    shopper.prototype.showName = function () {
        alert("".concat(this.firstName, " ").concat(this.lastName));
    };
    return shopper;
}());
//# sourceMappingURL=shopper.js.map