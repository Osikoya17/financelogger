import{Invoice} from "./classes/invoice.js"
import { ListTemplate } from "./classes/ListTemplate.js"
import {Payment} from "./classes/payment.js"
import { HasFormatter } from "./interfaces/HasFormatter.js"
// const invOne = new Invoice("maria","working",230) 
// const invTwo = new Invoice("yoshi","walking",500) 

// let docOne:HasFormatter
// let docTwo:HasFormatter

// docOne = new Invoice('yoshi','web work' ,250)
// docTwo = new Payment('mario','plumbing work',200)

// let docs:HasFormatter[] =[]
// docs.push(docOne)
// docs.push(docTwo)
// console.log(docs);


// let invoices:Invoice[]=[];
// invoices.push(invOne)
// invoices.push(invTwo)

// invoices.forEach(inv =>{ 
//     console.log(inv.client,inv.amount,inv.format());
// })

const ul = document.querySelector('ul')!
const list = new ListTemplate(ul)
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
    let doc:HasFormatter
if (type.value === 'Invoice'){
    doc = new Invoice(tofrom.value,details.value,Number(amount.value))
    console.log(doc);
}
else{
    doc  = new Payment(tofrom.value,details.value,Number(amount.value))
    console.log(doc);
    
}
list.render(doc,type.value,'end')
    
})