 'use strict'

 const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

 const getAverageValue = () => {
  let sum = 0;

  for (let i = 0; i < allCashbox.length; i++) {
    sum = sum + allCashbox[i];
  }
  return Math.round(sum / allCashbox.length);
 }

 console.log(getAverageValue(allCashbox));