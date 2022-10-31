


function findVogals(name) {

    let newArray = []

    for (i of name.toLowerCase()) {
        if ( i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u') {
            newArray += i
        }
    }
        
    return `These are the vogals: ${newArray.length} and they are: ${newArray}.`
   
}

