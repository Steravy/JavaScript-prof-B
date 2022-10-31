

// Return number based on given name
function returnNumberFromName(name) {
    let phoneBook = {
        Abel: 5822943,
        Laura: 9201011,
        Lisa: 5456789,
        Stefan: 9567880
    }

    return phoneBook[name]
}

// ADDING ITEM TO OBJECT

function addphoneNumber (name, number) {
    let phoneBook = {
        Abel: 5822943,
        Laura: 9201011,
        Lisa: 5456789,
        Stefan: 9567880
    }

    phoneBook[name] = number
    
    return phoneBook

}


// DELETE ITEM FROM OBJECT

function deletePhoneNumber (name) {
    let phoneBook = {
        Abel: 5822943,
        Laura: 9201011,
        Lisa: 5456789,
        Stefan: 9567880
    }

    delete phoneBook[name]

    return phoneBook
}


// single funtion that does all above 

// function multipleFunction (name, input, number) {
//     let phoneBook = {
//         Abel: 5822943,
//         Laura: 9201011,
//         Lisa: 5456789,
//         Stefan: 9567880
        
//     }

//     if (input == 'delete') {
//         delete phoneBook[name]
//         return phoneBook
//     } else if (input == 'addNumber') {
//         phoneBook[name] = number
//         return phoneBook
//     } else if (input == 'aNumber') {
//         return `The number ${phoneBook[name]} belongs to ${name}.`
//     } else {
//         return "ERROR!!! The name or operation doesn`t exist."
//     }

// }


function mainFunction (name, input, number) {
   
    if (input == 'delete') {
        return deletePhoneNumber(name)
    } else if (input == 'addNumber') {
        return addphoneNumber(name, number)
    } else if (input == 'aNumber') {
        return returnNumberFromName(name)

    } else {
        return "ERROR!!! The name or operation doesn`t exist."
    }
}


