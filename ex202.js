//Write a regex pattern to validate that credit card number are well encrypted in the database. It can be encrypted with X or Y or Z and must be exactly 4 blocks of 4 chars.
const pattern = /^((((X|Y|Z){4})\s){3}(X|Y|Z){4})$/gi;

const text = "XXXX XYYY XXXX YYYY"
if(text.match(pattern)){
    console.log('Valid');
}
else {
    console.log('Error');
}