export class Payment {
    constructor(recipient, // read value outside and inside of class no change
    details, // change value inside of class 
    amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} owed £${this.amount} for ${this.details}`;
    }
}
