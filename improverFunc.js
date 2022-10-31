// Return number based on given name
function returnNumberFromName(name, argPhoneBook) {

    return `The number ${argPhoneBook[name]} belongs to ${name}`
}

// ADDING ITEM TO OBJECT

function addphoneNumber (argPhoneBook, name, number) {
   
    argPhoneBook[name] = number
    
    return argPhoneBook

}


// DELETE ITEM FROM OBJECT

function deletePhoneNumber (name, argPhoneBook) {
    
    delete argPhoneBook[name]

    return argPhoneBook
}

let phoneBook = {
    Abel: 5822943,
    Laura: 9201011,
    Lisa: 5456789,
    Stefan: 9567880,
}


function mainFunctionV2 (name, operation, phoneBook, number) {
   
    if (phoneBook[name] == undefined) {
        return "ERROR!!! The name or operation doesn`t exist."

    } else if (operation == 'add') {
        phoneBook = addphoneNumber(phoneBook, name, number)

    } else if (operation == 'delete') {
        phoneBook = deletePhoneNumber(name, phoneBook)

    } else if (operation == 'search') {
        phoneBook = returnNumberFromName(name, phoneBook)

    } 


}

