const aInput = document.getElementById('a');
const bInput = document.getElementById('b');

const sumar = (a, b, cb) => {
    const result = a + b;
    cb(result);
}

const restar = (a, b, cb) => {
    const result = a - b;
    cb(result);
}

document.querySelector('.sumarBtn')
    .addEventListener('click', () => {
        const a = +aInput.value;
        const b = +bInput.value;
        sumar(a, b, (r) => {
            document.querySelector('.result').innerText = r;
        })
    });