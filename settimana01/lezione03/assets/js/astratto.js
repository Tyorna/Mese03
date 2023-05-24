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
var Conto = /** @class */ (function () {
    function Conto(_codredd, _redditoannuolordo, _tasseinps, _tasseirpef) {
        this.codredd = _codredd;
        this.redditoannuolordo = _redditoannuolordo;
        this.tasseinps = _tasseinps;
        this.tasseirpef = _tasseirpef;
    }
    return Conto;
}());
var TasseLavoratore = /** @class */ (function (_super) {
    __extends(TasseLavoratore, _super);
    function TasseLavoratore(_codredd, _redditoannuolordo, _tasseinps, _tasseirpef) {
        return _super.call(this, _codredd, _redditoannuolordo, _tasseinps, _tasseirpef) || this;
    }
    TasseLavoratore.prototype.getUtileTasse = function () {
        return (this.redditoannuolordo * this.codredd / 100);
    };
    TasseLavoratore.prototype.getTasseInps = function () {
        return (this.getUtileTasse() * this.tasseinps / 100);
    };
    TasseLavoratore.prototype.getTasseIrpef = function () {
        return (this.getUtileTasse() * this.tasseirpef / 100);
    };
    TasseLavoratore.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoannuolordo - (this.getTasseInps() + this.getTasseIrpef());
    };
    TasseLavoratore.prototype.getTotale = function () {
        return "Il reddito annuo lordo \u00E8:".concat(this.redditoannuolordo, " \n Tasse Inps: ").concat(this.getTasseInps(), " \n Tasse Inps: ").concat(this.getTasseIrpef(), " \n Reddito Annuo Netto ").concat(this.getRedditoAnnuoNetto());
    };
    return TasseLavoratore;
}(Conto));
var nuovoAccount2 = new TasseLavoratore(56, 3400, 26, 15);
var nuovoAccount3 = new TasseLavoratore(40, 5400, 26, 15);
console.log(nuovoAccount2.getTotale());
console.log(nuovoAccount3.getTotale());
