const myArray = '[{"Pessoa1":{"Nome": "Messi", "Idade": "35", "Profissao": "Jogador de Futebol"}},{"Pessoa2":{"Nome": "Cristiano Ronaldo", "Idade": "38", "Profissao": "Jogador de Futebol"}},{"Pessoa3":{"Nome": "Neymar JR", "Idade": "31", "Profissao": "Jogador de Futebol"}},{"Pessoa4":{"Nome": "Mbappe", "Idade": "24", "Profissao": "Jogador de Futebol"}},{"Pessoa5":{"Nome": "Vini JR", "Idade": "22", "Profissao": "Jogador de Futebol"}},{"Pessoa6":{"Nome": "Philipe Coutinho", "Idade": "30", "Profissao": "Jogador de Futebol"}}]'

// const myArray = '{"pessoa1": "Messi", ", "pessoa2": "Cristiano Ronaldo"}';



const json = JSON.parse(myArray);

console.log(json);

document.getElementById("btn1").addEventListener("click", function() {
    document.getElementById("info").innerHTML = "Nome: " + json[0].Pessoa1.Nome + "<br>" + "Idade: " + json[0].Pessoa1.Idade + "<br>" + "Profissão: " + json[0].Pessoa1.Profissao;
    document.getElementById("img").src = `imagens/messi.jpg` 
});
document.getElementById("btn2").addEventListener("click", function() {
    document.getElementById("info").innerHTML = "Nome: " + json[1].Pessoa2.Nome + "<br>" + "Idade: " + json[1].Pessoa2.Idade + "<br>" + "Profissão: " + json[1].Pessoa2.Profissao;
    document.getElementById("img").src = `imagens/cr7.jpeg`
});
document.getElementById("btn3").addEventListener("click", function() {
    document.getElementById("info").innerHTML = "Nome: " + json[2].Pessoa3.Nome + "<br>" + "Idade: " + json[2].Pessoa3.Idade + "<br>" + "Profissão: " + json[2].Pessoa3.Profissao;
    document.getElementById("img").src = `imagens/ney.jpg`
});
document.getElementById("btn4").addEventListener("click", function() {
    document.getElementById("info").innerHTML = "Nome: " + json[3].Pessoa4.Nome + "<br>" + "Idade: " + json[3].Pessoa4.Idade + "<br>" + "Profissão: " + json[3].Pessoa4.Profissao;
    document.getElementById("img").src = `imagens/mbappe.jpg`
});
document.getElementById("btn5").addEventListener("click", function() {
    document.getElementById("info").innerHTML = "Nome: " + json[4].Pessoa5.Nome + "<br>" + "Idade: " + json[4].Pessoa5.Idade + "<br>" + "Profissão: " + json[4].Pessoa5.Profissao;
    document.getElementById("img").src = `imagens/vinijr.jpg`
});
document.getElementById("btn6").addEventListener("click", function() {
    document.getElementById("info").innerHTML = "Nome: " + json[5].Pessoa6.Nome + "<br>" + "Idade: " + json[5].Pessoa6.Idade + "<br>" + "Profissão: " + json[5].Pessoa6.Profissao;
    document.getElementById("img").src = `imagens/coutinho.jpg`
});
