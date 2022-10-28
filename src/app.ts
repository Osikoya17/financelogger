import{Invoice} from "./classes/invoice.js"
const invOne = new Invoice("maria","working",230) 
const invTwo = new Invoice("yoshi","walking",500) 

let invoices:Invoice[]=[];
invoices.push(invOne)
invoices.push(invTwo)

invoices.forEach(inv =>{ 
    console.log(inv.client,inv.amount,inv.format());
})

const anchor = document.querySelector("a")!
console.log(anchor.href);
// Type Casting
const from = document.querySelector(".new-item-form") as HTMLFormElement 

//inputs
const type =document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount= document.querySelector('#amount') as HTMLInputElement

from.addEventListener("submit",(e:Event)=>{
    e.preventDefault()
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    );
    
})