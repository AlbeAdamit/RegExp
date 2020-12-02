/*Write 2 regex patterns to verify that blog posts starts with a greetings that could be either:
Hello
Hi
Hey
Hej
Greetings
And ends with at least 2 ending formulas:

Thank you
Thanks
Merci
Cheers
I am grateful*/

const patternBeg = /^(H(ello|ey|ej)|Greetings{1})/ig
const patternEnd = /(( )(Thanks|Thank you|Merci|Cheers|I am grateful)){2}$/gmi
