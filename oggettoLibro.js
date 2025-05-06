let libro = {
    titolo: "Harry Potter",
    autore: "J.K Rowling",
    anno: 2012
}

function descrizione(libro){
    return "Titolo: " + libro.titolo + "; Autore: " + libro.autore + "; Anno: " + libro.anno + "."
}

console.log(descrizione(libro))