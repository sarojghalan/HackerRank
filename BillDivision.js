function splitBill(bill,k,b){
    let totalAmount = 0;
    for (let i = 0; i < bill.length; i++) {
        if (bill[i] === bill[k]) {
            totalAmount = totalAmount;
        } else {
            totalAmount += bill[i]
        }
    }
    if ((totalAmount / 2 - b) === 0) {
        return console.log("Bon Appetit")
    } else {
        return b - totalAmount / 2
    }
}
let result = splitBill([3,10,2,9],1,12);
