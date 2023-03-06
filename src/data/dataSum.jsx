import { useDebugValue } from "react";
import data from "./data.json"

export const { Salesperson: salesperson, Orders: orders, Products: products } = data;

export let dataSum = orders.map((order, i) => {
  const salespersonId = order["Salesperson ID"];
  const salespersonData = salesperson.find(s => s["Id"] === salespersonId);
  const productId = order["Product Id"];
  const productData = products.find(p => p["Product Id"] === productId);

  return {
    orderNumber: i + 1,
    salespersonName: salespersonData["Name"],
    salespersonId,
    productId,
    quantitySold: order["Number of product sold"],
    orderStatus: order["Order status"],
    account: order["Account"],
    date: order["Order date"],
    productName: productData["Product Name"],
    unitPrice: productData["Unit price"],
    currency: productData["Currency"],
    orderValue: productData["Unit price"] * order["Number of product sold"],
    accountType: order["Account type"],
    dateYear: +order["Order date"].split("/")[2],
    dateMonth: +order["Order date"].split("/")[0],
    dateDay: +order["Order date"].split("/")[1]
  };
});
