const datorValDisplay = document.getElementById('datorn')
const mittValDisplay = document.getElementById('mitt')
const resultatDisplay = document.getElementById('resultat')
const friaVal = document.querySelectorAll('button')
const output = document.getElementById('output')

let dScore = 0
let mScore = 0
let mittVal
let datorVal
let result



        
function helaSpelet(){
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
        mScore += 1
        dScore += 1
    }
    if(datorVal === 'sten' && mittVal === 'påse') {
        result = 'Du vann!'
        mScore += 1
    }
    if(datorVal === 'sten' && mittVal === 'sax') {
        result = 'Du förlora!'
        dScore += 1
    }
    if(datorVal === 'påse' && mittVal === 'sax') {
        result = 'Du vann!'
        mScore += 1
    }
    if(datorVal === 'påse' && mittVal === 'sten') {
        result = 'Du förlora!'
        dScore += 1
    }
    if(datorVal === 'sax' && mittVal === 'sten') {
        result = 'Du vann!'
        mScore += 1
    }
    if(datorVal === 'sax' && mittVal === 'påse') {
        result = 'Du förlora!'
        dScore += 1
    }
    resultatDisplay.innerHTML = result 
    document.getElementById('d-poäng').innerText =dScore
    document.getElementById('m-poäng').innerText =mScore

    
}
if(dScore === 3 || mScore === 3 ){
    document.createElement('p')
    package.innerText = 'Vi har en vinnare'
    document.createElement('button')
    button.innerText = 'Starta om'
    button.addEventListener('click', ()=>{
        helaSpelet()
    })
    
}
}

helaSpelet()
