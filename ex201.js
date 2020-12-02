//In the following sentence replace every occurence of the word clef/clé (including plurals) by the emoji 🔑 with a single pattern.

const text = `In french the word "key" used to be written "clef", but now it is written with an accent : "clé".
You might find medieval stories, such as the "clefs sanglantes de barbe bleue" and more recents ones "les clés du mystère"`


const pattern = /cl(efs|és|ef|é|)/img
const newText = text.replace(pattern, '🔑')
console.log(newText);