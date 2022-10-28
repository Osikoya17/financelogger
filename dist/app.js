import { Invoice } from "./classes/invoice.js";
const invOne = new Invoice("maria", "working", 230);
const invTwo = new Invoice("yoshi", "walking", 500);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
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
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
