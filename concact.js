

// Funtion takes 2 parameters, a string and a number. And returns the word repeated for the given number of times, concatenated
function concact(word, times = 1) {
    wordLength = ''
   

    for (i=1; i <= times; i++) {
        wordLength += word
    }

    return wordLength
}


// Funtion takes 2 parameters, a string and a number. And returns the word repeated for the given number of times, concatenated
// function concact(word, times = 1) {
//     wordLength = ''
   

//     for (i=1; i <= times; i++) {
//         wordLength += word
//     }

//     return wordLength
// }


// Function looks for symbols in string and replace it or remove it
function findChar(word) {
    simbols = ['&', '<', '>', '"', "'"]

    for (i = 0; i < simbols.length; i++) {
        
    return word.replace(simbols[i], '')
    
    }

}

