const pattern = /^playstation( [2-5])?$/i // matches playstation, playstation 2, playstation 3, playstation 4, playstation 5

const test = "Ceci est une liste non exhaustive de consoles :playstation, playstation 2, playstation 3 , playstation 4, playstation 5 "

if (test.match(pattern)) {
    console.log("Y'a des play!")
} else {
    console.log("Erreur, que des Xbox")
}