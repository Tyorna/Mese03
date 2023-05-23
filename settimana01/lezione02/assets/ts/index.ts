var balanceInit: number = 0;
var btnVerifica = document.getElementById('verifica') as HTMLElement;
var deposito = document.getElementById('Deposito') as HTMLInputElement | null;
var prelievo = document.getElementById('Prelievo') as HTMLInputElement | null;
var valore1: number;
var valore2: number;
var messaggio = document.getElementById('Contototale') as HTMLElement | null;

btnVerifica?.addEventListener('click', ContoFinale2);

function ContoFinale2(): string {
    valore1 = Number(deposito?.value);
	valore2 = Number(prelievo?.value);
     let newSAccount = new SonAccount10 (valore1, valore2);
    let newMAccount = new MotherAccount10 (valore1, valore2);
     return messaggio!.innerHTML = `Il totale del conto del figlio è <br>${newSAccount.getSonAccount10()} <br><br> Il totale del conto della madre è <br>${newMAccount.getMotherAccount10()}`;
}

class SonAccount10 {
    oneDeposit: number;
    oneWithDraw: number;
    constructor(valore1: number, valore2: number) {
        this.oneDeposit = valore1;
        this.oneWithDraw = valore2;
    }

    totalBalance():number {
        return balanceInit += this.oneDeposit -  this.oneWithDraw;
    }

    getSonAccount10(): string {
        return `Son Account <br> Deposit: ${this.oneDeposit} <br> Withdraw: ${this.oneWithDraw} <br> Total Balance: ${this.totalBalance()}`;
    }
}

class MotherAccount10 extends SonAccount10 {
    constructor (valore1: number, valore2: number) {
        super (valore1, valore2);
    }
    totalBalance():number {
        return balanceInit = (balanceInit -((balanceInit * 10)/ 100));
    }
    getMotherAccount10(): string {
        return `Mother Account <br> Deposit: ${this.oneDeposit} <br> Withdraw: ${this.oneWithDraw} <br> Total Balance: ${this.totalBalance()}`;
    }
    }

console.log(ContoFinale2());