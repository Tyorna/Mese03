var btnVerifica = document.getElementById('verifica') as HTMLElement;
var codredd = document.getElementById('codredd') as HTMLInputElement | null;
var redditoannuolordo = document.getElementById('redditoannuolordo') as HTMLInputElement | null;
var valore1: number;
var valore2: number;
var messaggio = document.getElementById('risultato') as HTMLElement | null;

btnVerifica?.addEventListener('click', ContoFinale2);

function ContoFinale2(): string {
    valore1 = Number(codredd?.value);
	valore2 = Number(redditoannuolordo?.value);
     let newTotalIncome = new Lavoratori3 (valore1, valore2);
     return messaggio!.innerHTML = `Conto finale <br>${newTotalIncome.getTotale()} <br>`;
}

class Lavoratori3 {
	codredd: number;
	redditoannuolordo: number; 
    tasseinps: number = 26;
    tasseirpef: number = 15;
	constructor(_codredd: number, _redditoannuolordo: number) {
		this.codredd = _codredd;
        this.redditoannuolordo = _redditoannuolordo;
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
        return `Il reddito annuo lordo è:${this.redditoannuolordo} <br> Tasse Inps: ${this.getTasseInps()} <br>Tasse Inps: ${this.getTasseIrpef()} <br> Reddito Annuo Netto ${this.getRedditoAnnuoNetto()}`;
    }
}
