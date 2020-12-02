//Write a regular expression to replace every occurence of Emily with Kelian in the following constant.

const text = `Emily is probably the best coach I've ever had. I'm an absolute fan of Emily's exercices on regular expressions. 
I wouldn't be as fluent in JavaScript if I had not crossed Emily's path`

const pattern = /Emily/ig

const newText = text.replace(pattern, 'Kellian')
console.log(newText);