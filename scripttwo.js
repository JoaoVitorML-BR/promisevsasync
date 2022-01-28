function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAI(msg, tempo){
    return new Promise((resolve, reject) => {
       if (typeof msg !== 'string'){
            reject('BAD VALUE') 
            return;
        } 
       
        setTimeout(() => {
            resolve(msg.toUpperCase() + '- Passei na promise');
        }, tempo);
    });
}

// promise.all promice.race promise.resolve pormise.reject

const promises = [
    'primeiro valor',
    esperaAI('Promise 1', 3000),
    esperaAI('Promise 2', 500),
    esperaAI('Promise 3', 1000),
   // esperaAI(1000, 1000),
    'Outro valor'
];

Promise.all(promises).then(function(valor){
    console.log(valor);
}).catch(function(erro){
    console.log(erro);
})