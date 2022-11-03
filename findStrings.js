
// find out if a String start with a value 
function findString (firstString, secondString) {

    return firstString.startsWith(secondString)
   
}


// find out if a String start with a value using substring


function findStringV2(firstString, secondString) {
    
    let newstring = firstString.substring(0, secondString.length + 1)

    return newstring == secondString
  
}
        
// find out if a String start with a value using slice


function findStringV3(firstString, secondString) {
    let count = 0
    let newstring = firstString.slice(0, secondString.length + 1)

    for (i = 0; i < secondString.length; i++) {
        if (newstring[i] == secondString[i]) {
            count ++
        } else {
            return false
        }
    }

    if (count == secondString.length) {
        return true
    } 
}


// find out if a String start with a value using loop


function findStringV4(firstString, secondString) {

    for (i = 0; i < secondString.length; i++) {
        if (newstring[i] !== secondString[i]) {
            
            return false
        }
    }


    return true

}
      