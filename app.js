


let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let dominios =  [".com", ".net" , ".us", ".io"]

for (let i = 0; i < pronoun.length; i++) {
    for (let n = 0; n < adj.length; n++) {
        for (let q = 0; q < noun.length; q++) {
            for(let m = 0; m < dominios.length; m++){
            let frase = `${pronoun[i]}${adj[n]}${noun[q]}${dominios[m]}`
            console.log(frase)




        }
    }
}
}