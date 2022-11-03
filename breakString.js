
function breakString (word, step = 1) {
    let array = []
    let newWord  = ''

    if (step !== 1) {

        for (i = 0; i < word.length; i++) {

            newWord += word[i]
            // console.log(newWord)
    
            if (newWord.length == step) {
                array.push(newWord)
            // console.log('work')
            newWord = ''
    
            } else if (newWord.length < step && i == word.length - 1) {
                array.push(newWord)
            }
    
        }
    } else {
        return word 
    }

    // array.push(newWord) 

   
    return array
}


breakString 

