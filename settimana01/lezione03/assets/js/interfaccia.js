var Lavoratori = /** @class */ (function () {
    function Lavoratori(_codredd, _redditoannuolordo, _tasseinps, _tasseirpef) {
        this.codredd = _codredd;
        this.redditoannuolordo = _redditoannuolordo;
        this.tasseinps = _tasseinps;
        this.tasseirpef = _tasseirpef;
    }
    Lavoratori.prototype.getUtileTasse = function () {
        return (this.redditoannuolordo * this.codredd / 100);
    };
    Lavoratori.prototype.getTasseInps = function () {
        return (this.getUtileTasse() * this.tasseinps / 100);
    };
    Lavoratori.prototype.getTasseIrpef = function () {
        return (this.getUtileTasse() * this.tasseirpef / 100);
    };
    Lavoratori.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoannuolordo - (this.getTasseInps() + this.getTasseIrpef());
    };
    Lavoratori.prototype.getTotale = function () {
        return "Il reddito annuo lordo \u00E8:".concat(this.redditoannuolordo, " \n Tasse Inps: ").concat(this.getTasseInps(), " \n Tasse Inps: ").concat(this.getTasseIrpef(), " \n Reddito Annuo Netto ").concat(this.getRedditoAnnuoNetto());
    };
    return Lavoratori;
}());
var newProfessionista = new Lavoratori(40, 3000, 26, 15);
var newProfessionista2 = new Lavoratori(54, 2000, 26, 15);
var newProfessionista3 = new Lavoratori(62, 7000, 26, 15);
console.log("Primo lavoratore \n ".concat(newProfessionista.getTotale(), " \n \n Secondo lavoratore \n ").concat(newProfessionista2.getTotale(), " \n \n Terzo lavoratore \n ").concat(newProfessionista3.getTotale()));
