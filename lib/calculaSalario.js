const verificaCargo = require('../lib/verificaCargo');

function calculo(funcionario){

    const {salarioBase} = funcionario;
    const {taxa, desconto} = verificaCargo(funcionario);

    liquido =  salarioBase - desconto;

    return{liquido, desconto, taxa}
    
}

module.exports = calculo;
