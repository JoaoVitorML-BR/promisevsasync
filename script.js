// As promises são usadas basicamente quando você não sabe o momento exato em que o cogio será executado, fazendo com que ele seja executado na ordem do array


function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAI(msg, tempo){
    return new Promise((resolve, reject) => {
       if (typeof msg !== 'string') reject('BAD VALUE')
       
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaAI('Conexão com a BD', rand(1, 5)).then(resposta => {
    console.log(resposta);
    return esperaAI('Buscando dados da BASE', rand(1, 3));
}).then(resposta => {
    console.log(resposta);
    return esperaAI(1234, rand(1, 3));
}).then(resposta => {
    console.log(resposta);
}).then(() => {
    console.log('Eu serei o ultimo a ser exibido.');
}).catch(e => {
    console.log('ERRO', e)
});