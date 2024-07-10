function tratarErroLancar(erro){
    throw new Error('...')
    throw{
        nome: erro.name,
        
    }
}


function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + "!!!")
    } catch (e){
        tratarErroLancar(e)
    }  finally{
        console.log('final')
    }
}

const obj = {nome : 'Vinicius'}
imprimirNomeGritado(obj)
        