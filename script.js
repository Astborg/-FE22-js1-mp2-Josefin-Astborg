const datorValDisplay = document.getElementById('datorn')
const mittValDisplay = document.getElementById('mitt')
const resultatDisplay = document.getElementById('resultat')
const friaVal = document.querySelectorAll('button')

let mittVal
let datorVal
let result

friaVal.forEach(frittVal => frittVal.addEventListener('click',
(e) => {
    mittVal = e.target.id
    mittValDisplay.innerHTML = mittVal
    körDatorVal()
    resultat()
}))

function körDatorVal() {
    const randomNumber = Math.floor(Math.random() * 3) +1
    if(randomNumber === 1){
        datorVal = 'sten'
    }
    if(randomNumber === 2){
        datorVal = 'sax'
    }
    if(randomNumber === 3){
        datorVal = 'påse'
    }
    datorValDisplay.innerHTML = datorVal 
}

function resultat() {
    if(datorVal === mittVal) {
        result = 'Det är jämt!'
    }
    if(datorVal === 'sten' && mittVal === 'påse') {
        result = 'Du vann!'
    }
    if(datorVal === 'sten' && mittVal === 'sax') {
        result = 'Du förlora!'
    }
    if(datorVal === 'påse' && mittVal === 'sax') {
        result = 'Du vann!'
    }
    if(datorVal === 'påse' && mittVal === 'sten') {
        result = 'Du förlora!'
    }
    if(datorVal === 'sax' && mittVal === 'sten') {
        result = 'Du vann!'
    }
    if(datorVal === 'sax' && mittVal === 'påse') {
        result = 'Du förlora!'
    }
    resultatDisplay.innerHTML = result 
}