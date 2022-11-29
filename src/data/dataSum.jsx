import { useDebugValue } from "react";
import data from "./data.json"

export const { Salesperson: salesperson, Orders: orders, Products: products } = data;

export let dataSum = []

for (let i = 0; i < orders.length; i++) {
    for (let j = 0; j < salesperson.length; j++) {
      for (let z = 0; z < products.length; z++) {
        if (orders[i]["Salesperson ID"] === salesperson[j]["Id"]) {
          if (products[z]["Product Id"] === orders[i]["Product Id"]) {
            dataSum.push({
              orderNumber: i + 1,
              salespersonName: salesperson[j]["Name"],
              salespersonId: orders[i]["Salesperson ID"],
              productId: orders[i]["Product Id"],
              quantitySold: orders[i]["Number of product sold"],
              orderStatus: orders[i]["Order status"],
              account: orders[i]["Account"],
              date: orders[i]["Order date"],
              productName: products[z]["Product Name"],
              unitPrice: products[z]["Unit price"],
              currency: products[z]["Currency"],
              orderValue: products[z]["Unit price"] * orders[i]["Number of product sold"],
              accountType: orders[i]["Account type"],
              dateYear: +orders[i]["Order date"].split("/")[2],
              dateMonth: +orders[i]["Order date"].split("/")[0],
              dateDay: +orders[i]["Order date"].split("/")[1]
            });
          }
        }
      }
    }
  }

// const newArray = orders.reduce((acc, val, arr) => {
//   products.forEach( (product, idx) => {
//     // console.log(product["Product Id"], idx
//     // console.log(typeof product["Product Id"])
//     // console.log(typeof acc["Product Id"])
//     if(acc["Product Id"] == product["Product Id"]) {
//       val["Product Id"] = {...product}
//       console.log("fasz")
//     }
//   })
// })

// let newArray = orders.map((order, idx, arr) => {
//   products.map(element => {
//     if(element["Product Id"] === order["Product Id"]) {
//      dataSum.push({...element, ...order})
//     }
//   });
//   salesperson.map(salesPerson => {
//     if(salesPerson["Id"] === order["Salesperson ID"]) {
//       dataSum.push({...order, ...salesPerson})
//     }
//   })
// })




