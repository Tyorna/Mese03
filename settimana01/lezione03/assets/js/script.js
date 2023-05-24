var btnVerifica = document.getElementById('verifica');
var codredd = document.getElementById('codredd');
var redditoannuolordo = document.getElementById('redditoannuolordo');
var valore1;
var valore2;
var messaggio = document.getElementById('risultato');
btnVerifica === null || btnVerifica === void 0 ? void 0 : btnVerifica.addEventListener('click', ContoFinale2);
function ContoFinale2() {
    valore1 = Number(codredd === null || codredd === void 0 ? void 0 : codredd.value);
    valore2 = Number(redditoannuolordo === null || redditoannuolordo === void 0 ? void 0 : redditoannuolordo.value);
    var newTotalIncome = new Lavoratori3(valore1, valore2);
    return messaggio.innerHTML += "Conto finale <br>".concat(newTotalIncome.getTotale(), " <br>");
}
var Lavoratori3 = /** @class */ (function () {
    function Lavoratori3(_codredd, _redditoannuolordo) {
        this.tasseinps = 26;
        this.tasseirpef = 15;
        this.codredd = _codredd;
        this.redditoannuolordo = _redditoannuolordo;
    }
    Lavoratori3.prototype.getUtileTasse = function () {
        return (this.redditoannuolordo * this.codredd / 100);
    };
    Lavoratori3.prototype.getTasseInps = function () {
        return (this.getUtileTasse() * this.tasseinps / 100);
    };
    Lavoratori3.prototype.getTasseIrpef = function () {
        return (this.getUtileTasse() * this.tasseirpef / 100);
    };
    Lavoratori3.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoannuolordo - (this.getTasseInps() + this.getTasseIrpef());
    };
    Lavoratori3.prototype.getTotale = function () {
        return "Il reddito annuo lordo \u00E8:".concat(this.redditoannuolordo, " <br> Tasse Inps: ").concat(this.getTasseInps(), " <br>Tasse Inps: ").concat(this.getTasseIrpef(), " <br> Reddito Annuo Netto ").concat(this.getRedditoAnnuoNetto());
    };
    return Lavoratori3;
}());
