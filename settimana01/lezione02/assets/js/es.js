var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var balanceInit = 0;
var balanceInit2 = 0;
var SonAccount = /** @class */ (function () {
    function SonAccount(_oneDeposit, _oneWithDraw, _twoDeposit, _twoWithDraw) {
        this.oneDeposit = _oneDeposit;
        this.oneWithDraw = _oneWithDraw;
        this.twoDeposit = _twoDeposit;
        this.twoWithDraw = _twoWithDraw;
    }
    SonAccount.prototype.totalBalance = function () {
        return balanceInit += this.oneDeposit - this.oneWithDraw + this.twoDeposit - this.twoWithDraw;
    };
    SonAccount.prototype.getSonAccount = function () {
        return "Son Account \n Deposit: ".concat(this.oneDeposit, " \n Withdraw: ").concat(this.oneWithDraw, " \n Deposit:").concat(this.twoDeposit, " \n Withdraw:").concat(this.twoWithDraw, " \n Total Balance: ").concat(this.totalBalance());
    };
    return SonAccount;
}());
var newSonAccount = new SonAccount(1000, 500, 400, 300);
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount(_oneDeposit, _oneWithDraw, _twoDeposit, _twoWithDraw) {
        return _super.call(this, _oneDeposit, _oneWithDraw, _twoDeposit, _twoWithDraw) || this;
    }
    MotherAccount.prototype.totalBalance = function () {
        balanceInit2 += (this.oneDeposit - this.oneWithDraw + this.twoDeposit - this.twoWithDraw);
        return balanceInit2 = (balanceInit2 - ((balanceInit2 * 10) / 100));
    };
    MotherAccount.prototype.getMotherAccount = function () {
        return "Mother Account \n Deposit: ".concat(this.oneDeposit, " \n Withdraw: ").concat(this.oneWithDraw, " \n Deposit:").concat(this.twoDeposit, " \n Withdraw:").concat(this.twoWithDraw, " \n Total Balance: ").concat(this.totalBalance());
    };
    return MotherAccount;
}(SonAccount));
var newMotherAccount = new MotherAccount(1000, 500, 400, 300);
console.log("".concat(newSonAccount.getSonAccount(), " \n \n ").concat(newMotherAccount.getMotherAccount()));
