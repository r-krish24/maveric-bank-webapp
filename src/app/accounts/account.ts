import { Balance } from "src/app/account-details/balance";
import { Transactions } from "src/app/account-details/transactions";


export class Account {
    _id:String;
    customerId:String;
    type:String;
    createdAt:Date;
    updatedAt:Date;
    balance:Balance;
    transactions:Transactions[];
}
