class Account {
    constructor(name) {
        this.name = name;
        console.log(`Account is created for ${this.name}.`);
    }
    _balance = 0;
    deposit(balance) {
        this._balance = balance;
        console.log(`Deposited $${balance}. Total balance now is $${this._balance}`);
    }
    withdraw(balance) {
        if(balance === 0) {
            console.log(`Invalid input.`);
        } else if (balance > this._balance) {
            console.log(`Insuffient fund.`);
        } else {
            this._balance -= balance;
            console.log(`Withdrawn $${balance}. Total balance now is $${this._balance}`);
        }
    }
}

const a1 = new Account("Anil");
a1.deposit(400);
a1.withdraw(200);