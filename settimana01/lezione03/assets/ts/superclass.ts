class Lavoratori2 {
	codredd: number;
	redditoannuolordo: number; 
    tasseinps: number;
    tasseirpef: number;
	constructor(_codredd: number, _redditoannuolordo: number, _tasseinps: number, _tasseirpef: number ) {
		this.codredd = _codredd;
        this.redditoannuolordo = _redditoannuolordo;
		this.tasseinps = _tasseinps;
		this.tasseirpef = _tasseirpef;
	}

	getUtileTasse():number {
		return (this.redditoannuolordo * this.codredd / 100) ;
	}

	getTasseInps(): number {
		return (this.getUtileTasse() * this.tasseinps / 100) ;
	}

    getTasseIrpef(): number {
        return (this.getUtileTasse() * this.tasseirpef / 100);
    }
    getRedditoAnnuoNetto(): number {
        return this.redditoannuolordo -(this.getTasseInps() + this.getTasseIrpef());
    }
    getTotale(): string {
        return `Il reddito annuo lordo è:${this.redditoannuolordo} \n Tasse Inps: ${this.getTasseInps()} \n Tasse Inps: ${this.getTasseIrpef()} \n Reddito Annuo Netto ${this.getRedditoAnnuoNetto()}`;
    }
}

let newArtigiano = new Lavoratori2(40, 3000, 26, 15);
let newArtigiano2 = new Lavoratori2(54, 2000, 26, 15);
let newArtigiano3 = new Lavoratori2(62, 7000, 26, 15);

console.log(`Primo lavoratore \n ${newArtigiano.getTotale()} \n \n Secondo lavoratore \n ${newArtigiano2.getTotale()} \n \n Terzo lavoratore \n ${newArtigiano3.getTotale()}`);