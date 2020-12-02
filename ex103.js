//Use the text from exercise two and split it into an array of words (using split(' ')). Create a text input, listen for keyup events and return an array of words that matches the value entered in the input using a case insensitive pattern. For example: if I enter eg in the input, the array should contain ['Egypt', 'egyptian']

const text = `In ancient Egypt a god was an entity with the head of an animal and a human body. An egyptian god is not to be mistaken with the God that is worshipped in churches and mosque around the globe these days! God is not a god!`

const body = document.querySelector('body')
let input = document.createElement('input')
input.type = 'text'
body.appendChild(input)
const result = document.createElement('p')
body.appendChild(result)
let array = [];
array.push(text.split(' '))
console.log(array)
input.addEventListener('keyup', (e) => {
    const inputValue = e.target.value
    const pattern = new RegExp(inputValue, 'gi')
    console.log(pattern)
    if(array.some(function (){
        return(pattern);
    })){
        result.textContent = pattern
    }

})