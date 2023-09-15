function menu(nome) {
    if (nome == "livros") {
        document.getElementById("livros").innerHTML = "<a>Campanhas</a>" 
    } else if (nome == "classes") {
        document.getElementById("classes").innerHTML = "<a>Bardos</a>" 
    } else if (nome == "racas") {
        document.getElementById("racas").innerHTML = "<a>Elfos</a> <br> <a>Humanos</a>" 
    } else {
        document.getElementById("equip").innerHTML = "<a>Armas</a>" 
    }
    
}

function sai(nome) {
    if (nome == "livros") {
        document.getElementById("livros").innerHTML = "" 
    } else if (nome == "classes") {
        document.getElementById("classes").innerHTML = "" 
    } else if (nome == "racas") {
        document.getElementById("racas").innerHTML = "" 
    } else {
        document.getElementById("equip").innerHTML = "" 
    }
}