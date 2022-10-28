import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/payment.js";
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
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
const anchor = document.querySelector("a");
console.log(anchor.href);
// Type Casting
const from = document.querySelector(".new-item-form");
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
from.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'Invoice') {
        doc = new Invoice(tofrom.value, details.value, Number(amount.value));
        console.log(doc);
    }
    else {
        doc = new Payment(tofrom.value, details.value, Number(amount.value));
        console.log(doc);
    }
    list.render(doc, type.value, 'end');
});
