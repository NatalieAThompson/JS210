function invoiceTotal(...amounts) {
  console.log(amounts.reduce((total, num) => total + num, 0));
}

invoiceTotal(20, 30, 40, 50);          // works as expected
invoiceTotal(20, 30, 40, 50, 40, 40);  // does not work; how can you make it work?