var capi = [
    {
      "id": 1,
      "codprod":2121,
      "collezione":"primavera",
      "capo":"cardigan",
      "modello":1231,
      "quantita":5,
      "colore":"nero",
      "prezzoivaesclusa":18.50,
      "prezzoivainclusa":22.57,
      "disponibile":"negozio",
      "saldo":45
     
    },

    {
        "id": 2,
        "codprod":4111,
        "collezione":"estate",
        "capo":"t-shirt",
        "modello":1251,
        "quantita":6,
        "colore":"rosso",
        "prezzoivaesclusa":5.50,
        "prezzoivainclusa":6.71,
        "disponibile":"magazzino",
        "saldo":30
       
      },

      {
        "id": 3,
        "codprod":1181,
        "collezione":"inverno",
        "capo":"felpa",
        "modello":1229,
        "quantita":8,
        "colore":"beige",
        "prezzoivaesclusa":17.50,
        "prezzoivainclusa":21.35,
        "disponibile":"negozio",
        "saldo":50
       
      },

      {
        "id": 4,
        "codprod":1111,
        "collezione":"estate",
        "capo":"maglione",
        "modello":1221,
        "quantita":4,
        "colore":"verde",
        "prezzoivaesclusa":20,
        "prezzoivainclusa":24.40,
        "disponibile":"negozio",
        "saldo":50
       
      },

      {
        "id": 5,
        "codprod":6111,
        "collezione":"primavera",
        "capo":"maglia",
        "modello":1021,
        "quantita":5,
        "colore":"blu",
        "prezzoivaesclusa":11,
        "prezzoivainclusa":13.42,
        "disponibile":"magazzino",
        "saldo":60
       
      }
    
  ]

class Abbigliamento {
	id: number;
	codprod: number; 
    collezione: string;
    capo: string;
    modello: number;
    quantita: number;
    colore: string;
    prezzoivaesclusa: number;
    prezzoivainclusa: number;
    disponibile: string;
    saldo: number;
	constructor(_id: number, _codprod: number, _collezione: string, _capo: string, _modello: number, _quantita: number, _colore: string, _prezzoivaesclusa: number, _prezzoivainclusa: number, _disponibile: string, _saldo: number) {
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

	getsaldocapo():number {
		return (this.prezzoivainclusa * this.saldo)/ 100 ;
	}

	getacquistocapo(): number {
		return this.prezzoivainclusa - this.getsaldocapo() ;
	}
}

let newabbigliamento = new Abbigliamento(1, 2121, "primavera", "cardigan", 1231, 5, "nero", 18.50, 22.57, "negozio", 45);

console.log(`Abbigliamento \n ${newabbigliamento.getacquistocapo()}`);

console.log(capi);

fetch('./assets/Abbigliamento.json')
        .then(function (response): any {
            return response.json();
        })
        .then(data => {
            console.log(data);
            data.forEach(dato => {
                compilaCard(dato);
           }) })
        .catch(function (err: any):void {
            console.log('error: ' + err);
        });

        function compilaCard(val:any): void{
            let item = new Abbigliamento (val.id, val.codprod, val.collezione, val.capo, val.modello, val.quantita, val.colore, val.prezzoivaesclusa, val.prezzoivainclusa, val.disponibile, val.saldo);
            console.log(item.getacquistocapo());
            cart.push(item);
        }
       
        

function totali (): void{
    for ( let i:number = 0; i<capi.length; i++) {
        let negozio:any = new Abbigliamento (capi[i].id, capi[i].codprod, capi[i].collezione, capi[i].capo, capi[i].modello, capi[i].quantita, capi[i].colore, capi[i].prezzoivaesclusa, capi[i].prezzoivainclusa, capi[i].disponibile, capi[i].saldo);
        console.log(`Id: ${capi[i].id}, \n Cod. prod: ${capi[i].codprod}, \n Collezione: ${capi[i].collezione}, \n Capo: ${capi[i].capo}, \n Modello: ${capi[i].modello}, \n Quantità: ${capi[i].quantita},\n Capi: ${capi[i].colore}, \n Prezzo no iva: ${capi[i].prezzoivaesclusa}, \n Prezzo iva: ${capi[i].prezzoivainclusa}, Disponibile: ${capi[i].disponibile}, \n Saldo: ${capi[i].saldo} \n ------- \n Totale: ${negozio.getacquistocapo()}`);
    }
}

var cart: any[] = [];

totali();
console.log(cart);

