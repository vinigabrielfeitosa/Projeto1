// Metodo Fetch() para buscar o arquivo dados.json ou qualquer API Externa, transformando o resultado em um objeto usando o método response.json.

fetch('/json/dados.json')
    .then(response => response.json())
    .then(corpo => {


        //Acessando os dados do objeto JSON e adicionando ao HTML dentro do elemento DIV usando a propriedade innerHTML
        document.getElementById('imagem').innerHTML = corpo.linkpark.imagem;
        document.getElementById('nome').innerHTML = corpo.linkpark.name;
        document.getElementById('disco').innerHTML = corpo.linkpark.album;
        document.getElementById('estilo').innerHTML = corpo.linkpark.style;
        document.getElementById('preco').innerHTML = corpo.linkpark.price;

        document.getElementById('imagem2').innerHTML = corpo.imaginedragons.imagem;
        document.getElementById('nome2').innerHTML = corpo.imaginedragons.name;
        document.getElementById('disco2').innerHTML = corpo.imaginedragons.album;
        document.getElementById('estilo2').innerHTML = corpo.imaginedragons.style;
        document.getElementById('preco2').innerHTML = corpo.imaginedragons.price;

        document.getElementById('imagem3').innerHTML = corpo.eminem.imagem;
        document.getElementById('nome3').innerHTML = corpo.eminem.name;
        document.getElementById('disco3').innerHTML = corpo.eminem.album;
        document.getElementById('estilo3').innerHTML = corpo.eminem.style;
        document.getElementById('preco3').innerHTML = corpo.eminem.price;

        document.getElementById('imagem4').innerHTML = corpo.michaeljackson.imagem;
        document.getElementById('nome4').innerHTML = corpo.michaeljackson.name;
        document.getElementById('disco4').innerHTML = corpo.michaeljackson.album;
        document.getElementById('estilo4').innerHTML = corpo.michaeljackson.style;
        document.getElementById('preco4').innerHTML = corpo.michaeljackson.price;
    });