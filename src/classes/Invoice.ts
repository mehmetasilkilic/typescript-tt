import { HasFormatter } from "../interfaces/HasFormatter.js"

export class Invoice implements HasFormatter {
    constructor(
        readonly client: string, // read value outside and inside of class no change
        private details: string, // change value inside of class 
        public amount: number, // change value outside and inside of class
    ) { }

    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}