const edad = 13;
const promise = new Promise((resolve, reject)=>{
    if (edad >=18){
        resolve('Eres mayor de 18');
    } else {
        reject('Eres menor de edad');
    }
    resolve('Resuelta')
})
promise
.then(value => {
    return value + ' asi que puedes entrar';
})
.then(value=>{
    console.log(value);
})
.catch(error =>{
    console.error(error);
})
.finally(()=>{
    console.log('Siempre entra');
})