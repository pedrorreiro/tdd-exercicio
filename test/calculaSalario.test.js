describe('Calcular Salário', () => {
    test('Desenvolvedor', () => {

        const funcionario = {
            nome: "João",
            email: "joao@gmail.com",
            salarioBase: 2000,
            cargo: "Desenvolvedor"
        }

        result = calculo(funcionario);

        expect((result.desconto).toEqual(0.1));

        expect((result.liquido).toEqual(1800));
    });
});