/*
    O que são Promises?
    Uma maneira de lidar com assicronismo em javascript.
    
    O metodo assicrono ao inves de retornar imediatamente o valor como metodos sicronos,
    ele retornara uma promise que servira um valor em algum momento no futuro.
    
    Uma promise tem três estados:
        pending: estado inicial => nem completada e nem rejeitada.
        fulfilled: operação completada com sucesso. (promessa cumprida)
        rejected: operação falhou.

    O que é Async and Await?
        São os manipuladores(handles) de promises
        Uma maneira elegante de lidar com promises

*/ 
const square = async function(n) {
    return n * n;
}

// a palavra async antes da função, indica que ela retornara uma promisse
const handle = async function() {
    
    try {
        const value = await square(2); // com o await pegamos o valor da promise
        console.log(value);
    }
    catch(err) {
        console.error(err);
    } 
    finally {
        console.log('We do cleanup here'); 
    }
    
}
console.log('===== async and await');
handle();

