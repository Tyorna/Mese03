var Lavoratori2 = /** @class */ (function () {
    function Lavoratori2(_codredd, _redditoannuolordo, _tasseinps, _tasseirpef) {
        this.codredd = _codredd;
        this.redditoannuolordo = _redditoannuolordo;
        this.tasseinps = _tasseinps;
        this.tasseirpef = _tasseirpef;
    }
    Lavoratori2.prototype.getUtileTasse = function () {
        return (this.redditoannuolordo * this.codredd / 100);
    };
    Lavoratori2.prototype.getTasseInps = function () {
        return (this.getUtileTasse() * this.tasseinps / 100);
    };
    Lavoratori2.prototype.getTasseIrpef = function () {
        return (this.getUtileTasse() * this.tasseirpef / 100);
    };
    Lavoratori2.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoannuolordo - (this.getTasseInps() + this.getTasseIrpef());
    };
    Lavoratori2.prototype.getTotale = function () {
        return "Il reddito annuo lordo \u00E8:".concat(this.redditoannuolordo, " \n Tasse Inps: ").concat(this.getTasseInps(), " \n Tasse Inps: ").concat(this.getTasseIrpef(), " \n Reddito Annuo Netto ").concat(this.getRedditoAnnuoNetto());
    };
    return Lavoratori2;
}());
var newArtigiano = new Lavoratori2(40, 3000, 26, 15);
var newArtigiano2 = new Lavoratori2(54, 2000, 26, 15);
var newArtigiano3 = new Lavoratori2(62, 7000, 26, 15);
console.log("Primo lavoratore \n ".concat(newArtigiano.getTotale(), " \n \n Secondo lavoratore \n ").concat(newArtigiano2.getTotale(), " \n \n Terzo lavoratore \n ").concat(newArtigiano3.getTotale()));
