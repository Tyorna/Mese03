var balanceInit: number = 0;
var balanceInit2: number = 0;

class SonAccount {
    oneDeposit: number;
    oneWithDraw: number;
    twoDeposit: number;
    twoWithDraw: number;
    constructor(_oneDeposit: number, _oneWithDraw: number, _twoDeposit: number , _twoWithDraw: number) {
        this.oneDeposit = _oneDeposit;
        this.oneWithDraw = _oneWithDraw;
        this.twoDeposit = _twoDeposit;
        this.twoWithDraw = _twoWithDraw;
    }

    totalBalance():number {
        return balanceInit += this.oneDeposit -  this.oneWithDraw  + this.twoDeposit - this.twoWithDraw;
    }

    getSonAccount(): string {
        return `Son Account \n Deposit: ${this.oneDeposit} \n Withdraw: ${this.oneWithDraw} \n Deposit:${this.twoDeposit} \n Withdraw:${this.twoWithDraw} \n Total Balance: ${this.totalBalance()}`;
    }
}


let newSonAccount = new SonAccount(1000, 500, 400, 300);

class MotherAccount extends SonAccount {
    constructor (_oneDeposit: number, _oneWithDraw: number, _twoDeposit: number , _twoWithDraw: number) {
        super (_oneDeposit, _oneWithDraw, _twoDeposit , _twoWithDraw);
    }
    totalBalance():number {
        balanceInit2 += (this.oneDeposit -  this.oneWithDraw  + this.twoDeposit - this.twoWithDraw)
        return balanceInit2 = (balanceInit2 -((balanceInit2 * 10)/ 100));
    }
    getMotherAccount(): string {
        return `Mother Account \n Deposit: ${this.oneDeposit} \n Withdraw: ${this.oneWithDraw} \n Deposit:${this.twoDeposit} \n Withdraw:${this.twoWithDraw} \n Total Balance: ${this.totalBalance()}`;
    }
    }

    let newMotherAccount = new MotherAccount(1000, 500, 400, 300);

console.log(`${newSonAccount.getSonAccount()} \n \n ${newMotherAccount.getMotherAccount()}`);