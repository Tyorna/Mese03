var capi = [
    {
        "id": 1,
        "codprod": 2121,
        "collezione": "primavera",
        "capo": "cardigan",
        "modello": 1231,
        "quantita": 5,
        "colore": "nero",
        "prezzoivaesclusa": 18.50,
        "prezzoivainclusa": 22.57,
        "disponibile": "negozio",
        "saldo": 45
    },
    {
        "id": 2,
        "codprod": 4111,
        "collezione": "estate",
        "capo": "t-shirt",
        "modello": 1251,
        "quantita": 6,
        "colore": "rosso",
        "prezzoivaesclusa": 5.50,
        "prezzoivainclusa": 6.71,
        "disponibile": "magazzino",
        "saldo": 30
    },
    {
        "id": 3,
        "codprod": 1181,
        "collezione": "inverno",
        "capo": "felpa",
        "modello": 1229,
        "quantita": 8,
        "colore": "beige",
        "prezzoivaesclusa": 17.50,
        "prezzoivainclusa": 21.35,
        "disponibile": "negozio",
        "saldo": 50
    },
    {
        "id": 4,
        "codprod": 1111,
        "collezione": "estate",
        "capo": "maglione",
        "modello": 1221,
        "quantita": 4,
        "colore": "verde",
        "prezzoivaesclusa": 20,
        "prezzoivainclusa": 24.40,
        "disponibile": "negozio",
        "saldo": 50
    },
    {
        "id": 5,
        "codprod": 6111,
        "collezione": "primavera",
        "capo": "maglia",
        "modello": 1021,
        "quantita": 5,
        "colore": "blu",
        "prezzoivaesclusa": 11,
        "prezzoivainclusa": 13.42,
        "disponibile": "magazzino",
        "saldo": 60
    }
];
var Abbigliamento = /** @class */ (function () {
    function Abbigliamento(_id, _codprod, _collezione, _capo, _modello, _quantita, _colore, _prezzoivaesclusa, _prezzoivainclusa, _disponibile, _saldo) {
        this.id = _id;
        this.codprod = _codprod;
        this.collezione = _collezione;
        this.capo = _capo;
        this.modello = _modello;
        this.quantita = _quantita;
        this.colore = _colore;
        this.prezzoivaesclusa = _prezzoivaesclusa;
        this.prezzoivainclusa = _prezzoivainclusa;
        this.disponibile = _disponibile;
        this.saldo = _saldo;
    }
    Abbigliamento.prototype.getsaldocapo = function () {
        return (this.prezzoivainclusa * this.saldo) / 100;
    };
    Abbigliamento.prototype.getacquistocapo = function () {
        return this.prezzoivainclusa - this.getsaldocapo();
    };
    return Abbigliamento;
}());
var newabbigliamento = new Abbigliamento(1, 2121, "primavera", "cardigan", 1231, 5, "nero", 18.50, 22.57, "negozio", 45);
console.log("Abbigliamento \n ".concat(newabbigliamento.getacquistocapo()));
console.log(capi);
fetch('./assets/Abbigliamento.json')
    .then(function (response) {
    return response.json();
})
    .then(function (data) {
    console.log(data);
    data.forEach(function (dato) {
        compilaCard(dato);
    });
})
    .catch(function (err) {
    console.log('error: ' + err);
});
function compilaCard(val) {
    var item = new Abbigliamento(val.id, val.codprod, val.collezione, val.capo, val.modello, val.quantita, val.colore, val.prezzoivaesclusa, val.prezzoivainclusa, val.disponibile, val.saldo);
    console.log(item.getacquistocapo());
    cart.push(item);
}
function totali() {
    for (var i = 0; i < capi.length; i++) {
        var negozio = new Abbigliamento(capi[i].id, capi[i].codprod, capi[i].collezione, capi[i].capo, capi[i].modello, capi[i].quantita, capi[i].colore, capi[i].prezzoivaesclusa, capi[i].prezzoivainclusa, capi[i].disponibile, capi[i].saldo);
        console.log("Id: ".concat(capi[i].id, ", \n Cod. prod: ").concat(capi[i].codprod, ", \n Collezione: ").concat(capi[i].collezione, ", \n Capo: ").concat(capi[i].capo, ", \n Modello: ").concat(capi[i].modello, ", \n Quantit\u00E0: ").concat(capi[i].quantita, ",\n Capi: ").concat(capi[i].colore, ", \n Prezzo no iva: ").concat(capi[i].prezzoivaesclusa, ", \n Prezzo iva: ").concat(capi[i].prezzoivainclusa, ", Disponibile: ").concat(capi[i].disponibile, ", \n Saldo: ").concat(capi[i].saldo, " \n ------- \n Totale: ").concat(negozio.getacquistocapo()));
    }
}
var cart = [];
totali();
console.log(cart);
