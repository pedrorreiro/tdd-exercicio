function verificaCargo(funcionario){
    switch(funcionario.cargo){
        case 'Desenvolvedor':

            taxa = funcionario.salarioBase >= 3000 ? 0.2 : 0.1
            
            desconto = funcionario.salarioBase * taxa;
        
            break;

        case 'DBA':

            if(funcionario.salarioBase >= 2000){
                taxa = 0.25,
                desconto = funcionario.salarioBase * taxa        
            }

            else{
                taxa = 0.15 
                desconto = funcionario.salarioBase * taxa;
            }

            break;
    }

    return({
        desconto: desconto,
        taxa: taxa
    });
}


module.exports = verificaCargo;