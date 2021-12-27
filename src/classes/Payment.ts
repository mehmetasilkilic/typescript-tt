import { HasFormatter } from "../interfaces/HasFormatter.js"

export class Payment implements HasFormatter {
    constructor(
        readonly recipient: string, // read value outside and inside of class no change
        private details: string, // change value inside of class 
        public amount: number, // change value outside and inside of class
    ) { }

    format() {
        return `${this.recipient} owed £${this.amount} for ${this.details}`;
    }
}