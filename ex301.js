/*Create a regular expression that validates if the sentence is a question. A question starts with :

What
Why
How
When
Who
*/
const pattern  = /^(Wh(at|y|en|o)|How)( [a-zA-Z]+){2,} ?\?$/img
const text = "Why am I ugly ?"

if (text.match(pattern)){
    console.log("Valid");
} else{
    console.log("Error");
}