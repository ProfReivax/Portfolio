function hoverTitre(args) {
    var separateur = document.getElementById('separateur');
    if (separateur.classList.contains('retrecir'))
        separateur.classList.remove('retrecir');
    separateur.classList.add('elargir');
    separateur.style.width = '12%';
}

function leaveTitre(args) {
    var separateur = document.getElementById('separateur');
    if (separateur.classList.contains('elargir'))
        separateur.classList.remove('elargir');
    separateur.classList.add('retrecir');
    separateur.style.width = '10%';
}

function hoverTitreLien(args) {
    var separateur = document.getElementById('separateur-liens');
    if (separateur.classList.contains('retrecir'))
        separateur.classList.remove('retrecir');
    separateur.classList.add('elargir');
    separateur.style.width = '12%';
}

function leaveTitreLien(args) {
    var separateur = document.getElementById('separateur-liens');
    if (separateur.classList.contains('elargir'))
        separateur.classList.remove('elargir');
    separateur.classList.add('retrecir');
    separateur.style.width = '10%';
}