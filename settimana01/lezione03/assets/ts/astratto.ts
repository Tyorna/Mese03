abstract class Conto {
    codredd: number;
    redditoannuolordo: number;
    tasseinps: number;
    tasseirpef: number;
    constructor(_codredd: number, _redditoannuolordo: number, _tasseinps: number, _tasseirpef: number) {
        this.codredd = _codredd;
        this.redditoannuolordo = _redditoannuolordo;
        this.tasseinps = _tasseinps;
        this.tasseirpef = _tasseirpef;
    }

    abstract getUtileTasse(): number;
	abstract getTasseInps(): number;
	abstract getTasseIrpef(): number;
	abstract getRedditoAnnuoNetto(): number;
    abstract  getTotale(): string;
}

class TasseLavoratore extends Conto {
    constructor (_codredd: number, _redditoannuolordo: number, _tasseinps: number, _tasseirpef: number) {
        super(_codredd, _redditoannuolordo, _tasseinps, _tasseirpef);
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

let nuovoAccount2 = new TasseLavoratore(56, 3400, 26, 15);

console.log(nuovoAccount2.getTotale());
