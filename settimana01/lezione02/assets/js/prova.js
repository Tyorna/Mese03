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
var Conto = /** @class */ (function () {
    function Conto(_oneDeposit2, _oneWithDraw2, _twoDeposit2, _twoWithDraw2) {
        this.oneDeposit2 = _oneDeposit2;
        this.oneWithDraw2 = _oneWithDraw2;
        this.twoDeposit2 = _twoDeposit2;
        this.twoWithDraw2 = _twoWithDraw2;
    }
    return Conto;
}());
var SonAccount3 = /** @class */ (function (_super) {
    __extends(SonAccount3, _super);
    function SonAccount3(_oneDeposit2, _oneWithDraw2, _twoDeposit2, _twoWithDraw2) {
        var _this = _super.call(this, _oneDeposit2, _oneWithDraw2, _twoDeposit2, _twoWithDraw2) || this;
        _this.balanceInit = (_this.oneDeposit2 - _this.oneWithDraw2 + _this.twoDeposit2 - _this.twoWithDraw2);
        return _this;
    }
    SonAccount3.prototype.SonAccount2 = function () {
        return "Son Account: \n Deposito: ".concat(this.oneDeposit2, " \n Ritiro: ").concat(this.oneWithDraw2, " \n Deposito ").concat(this.twoDeposit2, " \n Ritiro ").concat(this.twoWithDraw2, " \n Totale: ").concat(this.balanceInit);
    };
    return SonAccount3;
}(Conto));
var nuovoAccount2 = new SonAccount3(1000, 500, 400, 300);
console.log(nuovoAccount2.SonAccount2());
var TotaleMadre = /** @class */ (function (_super) {
    __extends(TotaleMadre, _super);
    function TotaleMadre(_oneDeposit2, _oneWithDraw2, _twoDeposit2, _twoWithDraw2) {
        var _this = _super.call(this, _oneDeposit2, _oneWithDraw2, _twoDeposit2, _twoWithDraw2) || this;
        _this.balanceInit = ((_this.oneDeposit2 - _this.oneWithDraw2 + _this.twoDeposit2 - _this.twoWithDraw2) - (((_this.oneDeposit2 - _this.oneWithDraw2 + _this.twoDeposit2 - _this.twoWithDraw2) * 10) / 100));
        return _this;
    }
    TotaleMadre.prototype.MotherAccount = function () {
        return "Mother Account: \n Deposito: ".concat(this.oneDeposit2, " \n Ritiro: ").concat(this.oneWithDraw2, " \n Deposito ").concat(this.twoDeposit2, " \n Ritiro ").concat(this.twoWithDraw2, " \n Totale: ").concat(this.balanceInit);
    };
    return TotaleMadre;
}(Conto));
var newConto = new TotaleMadre(1000, 500, 400, 300);
console.log(newConto.MotherAccount());
