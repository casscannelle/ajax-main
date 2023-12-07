export default function isCEP (campo) {
    const cep = campo.value.replace(/\d{5}\-?\d{3}/);
    validaNumerosRepetidos(cep);

    console.log(validaNumerosRepetidos(cep));
}

function validaNumerosRepetidos(cep) {
    const numerosRepetidos = [
    '00000000',
    '11111111',
    '22222222',
    '33333333',
    '44444444',
    '55555555',
    '66666666',
    '77777777',
    '88888888',
    '99999999'
    ]

    return numerosRepetidos.includes(cep)
}