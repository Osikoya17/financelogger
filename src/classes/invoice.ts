//classes
// Access Modifiers
// 1. readonly: to make a value immutable and accessible outside a class
// 2. private: to make a value immutable and not accessible outside class
// 3. public: to make a value mutable and acessible ouside class 
import{HasFormatter}from "../interfaces/HasFormatter"
export class Invoice implements HasFormatter {
    constructor(
        readonly client:string,
        private details:string,
        public amount:number
    ){}
    format(){
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}