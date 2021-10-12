function verificaCargo(funcionario){
    switch(funcionario.cargo){
        case 'Desenvolvedor':

            if(funcionario.salarioBase >= 3000){
                taxa = 0.2,
                desconto = funcionario.salarioBase * taxa        
            }

            else{
                taxa = 0.1 
                desconto = funcionario.salarioBase * taxa;
            }

            return({
                desconto: desconto,
                taxa: taxa
            }) 
    }
}

module.exports = verificaCargo;