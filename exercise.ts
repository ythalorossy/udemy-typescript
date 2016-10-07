/**
 * Created by yross on 29/09/16.
 */

type BankAccount = { money:number, deposit: (value: number) => void }

let bankAccount : BankAccount = {
    money: 2000,
    deposit(value: number) {
        this.money += value;
    }
};

let myself : { name: string, bankAccount: BankAccount, hobbies: string[] } = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);
