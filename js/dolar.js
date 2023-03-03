const resultado = document.querySelector("[data-total]")
const real = document.querySelector('[data-real]')
    
function total(){
    fetch (`http://economia.awesomeapi.com.br/json/last/USD-BRL`).then(resposta => {
        return resposta.json()
    }).then(economia => {
        console.log(economia);
        var dolar = document.getElementById('valordolar').value = economia.USDBRL.bid;
        let moedareal = Number(real.value);
        let resto = moedareal/dolar;
        resultado.value = resto.toFixed(2);    
    })    
}

    fetch (`http://economia.awesomeapi.com.br/json/last/USD-BRL`).then(resposta => {
        return resposta.json()
    }).then(economia => {
        console.log(economia);
        var dolar = document.getElementById('valordolar').value = "R$" + economia.USDBRL.bid;
        document.getElementById('valordolar').innerHTML = "R$" + economia.USDBRL.bid;
    });

// fetch (`http://economia.awesomeapi.com.br/json/last/USD-BRL`).then (resposta => {
//     return resposta.json()
// }).then(economia => {
//     console.log(economia);
//     document.getElementById("dolar").innerHTML = economia.USDBRL.bid;
//     document.getElementById("hora").innerHTML = economia.USDBRL.create_date;
//     document.getElementById("codigo").innerHTML = economia.USDBRL.code;
//     document.getElementById("nome").innerHTML = economia.USDBRL.name;
// })