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
var btnVerifica = document.getElementById('verifica');
var deposito = document.getElementById('Deposito');
var prelievo = document.getElementById('Prelievo');
var valore1;
var valore2;
var messaggio = document.getElementById('Contototale');
btnVerifica === null || btnVerifica === void 0 ? void 0 : btnVerifica.addEventListener('click', ContoFinale2);
function ContoFinale2() {
    valore1 = Number(deposito === null || deposito === void 0 ? void 0 : deposito.value);
    valore2 = Number(prelievo === null || prelievo === void 0 ? void 0 : prelievo.value);
    var newSAccount = new SonAccount10(valore1, valore2);
    var newMAccount = new MotherAccount10(valore1, valore2);
    return messaggio.innerHTML = "Il totale del conto del figlio \u00E8 <br>".concat(newSAccount.getSonAccount10(), " <br><br> Il totale del conto della madre \u00E8 <br>").concat(newMAccount.getMotherAccount10());
}
var SonAccount10 = /** @class */ (function () {
    function SonAccount10(valore1, valore2) {
        this.oneDeposit = valore1;
        this.oneWithDraw = valore2;
    }
    SonAccount10.prototype.totalBalance = function () {
        return balanceInit += this.oneDeposit - this.oneWithDraw;
    };
    SonAccount10.prototype.getSonAccount10 = function () {
        return "Son Account <br> Deposit: ".concat(this.oneDeposit, " <br> Withdraw: ").concat(this.oneWithDraw, " <br> Total Balance: ").concat(this.totalBalance());
    };
    return SonAccount10;
}());
var MotherAccount10 = /** @class */ (function (_super) {
    __extends(MotherAccount10, _super);
    function MotherAccount10(valore1, valore2) {
        return _super.call(this, valore1, valore2) || this;
    }
    MotherAccount10.prototype.totalBalance = function () {
        return balanceInit2 += ((this.oneDeposit - this.oneWithDraw) * 90) / 100;
    };
    MotherAccount10.prototype.getMotherAccount10 = function () {
        return "Mother Account <br> Deposit: ".concat(this.oneDeposit, " <br> Withdraw: ").concat(this.oneWithDraw, " <br> Total Balance: ").concat(this.totalBalance());
    };
    return MotherAccount10;
}(SonAccount10));
console.log(ContoFinale2());
