export class Invoice {
    constructor(client, // read value outside and inside of class no change
    details, // change value inside of class 
    amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
