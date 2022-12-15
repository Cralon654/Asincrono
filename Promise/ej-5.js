const promise = new Promise ((resolve, reject)=> {
    return resolve('PROMISE VALUE')
})
    .then(console.log)
    console.log('MAIN PROGRAM')
    