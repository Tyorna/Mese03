var balanceInit: number = 0;

abstract class Conto {
    oneDeposit2: number;
    oneWithDraw2: number;
    twoDeposit2: number;
    twoWithDraw2: number;
    constructor(_oneDeposit2: number, _oneWithDraw2: number, _twoDeposit2: number, _twoWithDraw2: number) {
        this.oneDeposit2 = _oneDeposit2;
        this.oneWithDraw2 = _oneWithDraw2;
        this.twoDeposit2 = _twoDeposit2;
        this.twoWithDraw2 = _twoWithDraw2;
    }

    abstract SonAccount2(): any;
}

class SonAccount3 extends Conto {
    balanceInit: number;
    constructor (_oneDeposit2: number, _oneWithDraw2: number, _twoDeposit2: number, _twoWithDraw2: number) {
        super(_oneDeposit2, _oneWithDraw2, _twoDeposit2, _twoWithDraw2);
        this.balanceInit = (this.oneDeposit2 -  this.oneWithDraw2  + this.twoDeposit2 - this.twoWithDraw2);
    }

    SonAccount2(): string {
        return `Son Account: \n Deposito: ${this.oneDeposit2} \n Ritiro: ${this.oneWithDraw2} \n Deposito ${this.twoDeposit2} \n Ritiro ${this.twoWithDraw2} \n Totale: ${this.balanceInit}`;
    }
}

let nuovoAccount2 = new SonAccount3(1000, 500, 400, 300);

console.log(nuovoAccount2.SonAccount2());

class TotaleMadre extends Conto {
    balanceInit: number;
    constructor (_oneDeposit2: number, _oneWithDraw2: number, _twoDeposit2: number, _twoWithDraw2: number) {
        super(_oneDeposit2, _oneWithDraw2, _twoDeposit2, _twoWithDraw2);
        this.balanceInit = ((this.oneDeposit2 -  this.oneWithDraw2  + this.twoDeposit2 - this.twoWithDraw2)-(((this.oneDeposit2 -  this.oneWithDraw2  + this.twoDeposit2 - this.twoWithDraw2) * 10)/ 100));
    }

    MotherAccount(): string {
        return `Mother Account: \n Deposito: ${this.oneDeposit2} \n Ritiro: ${this.oneWithDraw2} \n Deposito ${this.twoDeposit2} \n Ritiro ${this.twoWithDraw2} \n Totale: ${this.balanceInit}`;
    }

}

let newConto = new TotaleMadre(1000, 500, 400, 300);
console.log(newConto.MotherAccount());