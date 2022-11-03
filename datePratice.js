
function dataDeHoje (separator) {

    months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    const data = new Date()
    let day = data.getDate()
    let month = data.getMonth()
    let year = data.getFullYear()


    return `${day}${separator}${months[month]}${separator}${year}`
}




function higherDate (date_1, date_2) {
    if (date_1 > date_2) {
        return `${date_1} > ${date_2}`
    } else if (date_1 < date_2) {
        return `${date_1} < ${date_2}`
    } else if (date_1 == date_2){
        return equal

    }
}



function addMinutes(data, hora) {

    let novaData = new Date(data.setUTCHours(data.getHours()+1+hora))
    return novaData
}