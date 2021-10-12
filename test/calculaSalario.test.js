const calculo = require('../lib/calculaSalario');

describe('Calcular Salário', () => {
    test('Desenvolvedor', () => {

        const funcionario = {
            nome: "João",
            email: "joao@gmail.com",
            salarioBase: 2000,
            cargo: "Desenvolvedor"
        }

        result = calculo(funcionario);

        expect(result.desconto).toBe(200);

        expect(result.taxa).toBe(0.1);

        expect(result.liquido).toBe(1800);
    });
});