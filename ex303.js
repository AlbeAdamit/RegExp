/*Create a function (multiple patterns) to validate a password. The password should:

Contain at least 1 lowercase letter
Contain at least 1 uppercase letter
Contain at least 1 number
Contain a special character (+, ?, $, ^)
Be between 8 and 18 characters long*/

const pattern1 = /[a-z]+/
const pattern2 = /[A-Z]+/
const pattern3 = /[0-9]+/
const pattern4 = /[\W_]+/
const pattern5 = /^\S{8,18}$/

const text = "ZFtjdjjdjdjd23++"
if(text.match(pattern1 && pattern2 && pattern3 && pattern4 && pattern5)){
    console.log("Good Password")
}else{
    console.log("Password invalid")
}