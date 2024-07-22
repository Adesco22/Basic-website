var bankAcc = parseInt(prompt("Enter your acc"))
function makeTrans(priceofsale) {

    if (priceofsale <= bankAcc) {
        bankAcc -= priceofsale;
        alert('$' + bankAcc + ' made the Transcation Successful!!!');
        console.log('Transcation Successful!!!');
    } else {
        alert('$' + bankAcc + ' has Insufficient funds!');
        console.log('Insufficient funds!');
    }
}

let result = makeTrans();

console.log(result)
