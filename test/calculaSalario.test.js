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

    test('DBA', () => {

        const funcionario = {
            nome: "Carlos",
            email: "carlos@gmail.com",
            salarioBase: 4000,
            cargo: "DBA"
        }

        result = calculo(funcionario);

        expect(result.desconto).toBe(1000);
        expect(result.taxa).toBe(0.25);
        expect(result.liquido).toBe(3000);
    });

    test('Testador', () => {

        const funcionario = {
            nome: "Ana",
            email: "ana@gmail.com",
            salarioBase: 3000,
            cargo: "Testador"
        }

        result = calculo(funcionario);

        expect(result.desconto).toBe(750);
        expect(result.taxa).toBe(0.25);
        expect(result.liquido).toBe(2250);
    });
});