import { dataSum } from "./dataSum";

//Data for the stats page to feed the cards with
export let cardsInfo = dataSum.reduce(
  (obj, order) => {
    const { salespersonName, unitPrice, productName, quantitySold } = order;
    obj.orders += 1;
    obj.ordersValue += unitPrice * quantitySold;
    if (!obj.staff[salespersonName]) {
      obj.staff[salespersonName] = quantitySold;
    } else {
      obj.staff[salespersonName] += quantitySold;
    }
    if (!obj.bestSeller[productName])
      obj.bestSeller[productName] = quantitySold;
    else {
      obj.bestSeller[productName] += quantitySold;
    }
    return obj;
  },
  {
    staff: [],
    orders: 0,
    ordersValue: 0,
    bestSeller: [],
  }
);

//Months array for the diagram component to feed the labels with
export const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dez",
];



export function stockGenerator(num) {
  return Array.from(
    { length: num },
    () => Math.floor(Math.random() * 101) + 30
  );
}

export function stockGenerator2() {
    let arr = Array.from({length: 10}, () => Math.floor(Math.random() * 101) + 30)
    setInterval(() => {
        let randomNum = Math.floor(Math.random() * 101) + 30
        arr.push(randomNum)
        arr.shift()
    
    }, 1000);
    return arr
}

// console.log(stockGenerator2());
