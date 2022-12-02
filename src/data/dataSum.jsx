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
              unitPrice: (products[z]["Unit price"]),
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

