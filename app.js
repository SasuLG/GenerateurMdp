var minuscules = "abcdefghijklmnopqrstuvwxyz"
var majuscules = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var nombres = "0123456789"
var CaracteresSpéciaux = "&~#([-|`_^@)]°>¨$£¤%ù?!§/,;:*µ{}²"  

var min = document.querySelector('#Minuscules')
var maj = document.querySelector('#Majuscules')
var nb = document.querySelector('#Nombres')
var char = document.querySelector('#Caracteres')

var nbChar = document.querySelector('#NombresDeCaractères')
var nbMdp = document.querySelector('#NombresDeMotDePasses')
var button = document.querySelector('#gen')

var texte = document.querySelector('#nbM')

min.checked = true;
button.onclick = ()=> genMdp()

function genTab(){
    var chaine = []
    if (min.checked){     
        chaine += minuscules
    }
    if (maj.checked){
        chaine += majuscules
    }
    if (nb.checked){
        chaine += nombres
    }
    if (char.checked){
        chaine += CaracteresSpéciaux
    }
    return chaine
}
function genMdp(){
    reset()
    var mdps = [];
    for (var i = 0; i < nbMdp.options[nbMdp.selectedIndex].value; i++){
        var mdp = ""
        var chaine = genTab()
            for (var j = 0; j < nbChar.options[nbChar.selectedIndex].value; j++){
                var random = Math.floor(Math.random()* (chaine.length - 0)) + 0
                mdp += chaine[random]
            }
            var p = document.createElement('li')
            p.innerHTML = mdp
            p.classList.add("classe")
            //p.style.color = 'red'
            texte.appendChild(p)
        mdps.push(mdp)
    }
}
var h = document.querySelector('h1')
setInterval(() =>{
    h.classList.toggle('red')
}, 1000)

function reset(){
    var li = document.querySelectorAll('li')
    li.forEach(element => {
        element.remove()
    });
}
