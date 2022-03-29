// variavel que recebe a tag de botao do front-end
var botaoQueAdicionaPessoa = document.querySelector('#id-botao-adicionar-pessoa');

// funcao para escutar a acao do usuario na sua interacao com o botao
botaoQueAdicionaPessoa.addEventListener('click', function (Event) {

    // funcao que previne o comportamento padrao do JS
    Event.preventDefault();

    // armazena todos os valores capturados no form HTML
    var formulario = document.querySelector('#id-formulario-adiciona-pessoa');

    // obtem um objeto invocando a funcao
    var pessoa = pegaPessoa(formulario);

    // limpa formulario apos botao ser clicado
    formulario.reset();

    // insere pessoa na tabela invocando funcao
    inserePessoa(pessoa);

});

// funcao para receber dados coletados no formulario de front-end
function pegaPessoa (formulario) {

    // cria o objeto a partir de informacoes do front-end
    var pessoa = {

        // criando os pares key/value do objeto
        nome: formulario.nome.value,
        idade: formulario.idade.value

    };

    // retorno do objeto
    return pessoa;

};

// funcao para inserir uma pessoa na tabela
function inserePessoa (pessoa) {

    // invoca funcao que vai criar tag tr
    var pessoaTr = criarTr(pessoa);

    // seleciona tabela do front-end que recebera a pessoa
    var tabela = document.querySelector('#tabela-pessoa');

    // insere pessoa na tabela
    tabela.appendChild(pessoaTr);

};

// funcao para criar uma linha na tabela
function criarTr (pessoa) {

    // cria uma tag tr e armazena em variavel
    var pessoaTr = document.createElement('tr');

    // insere um dado dentro da tag criada acima
    pessoaTr.appendChild(criarTd(pessoa.nome));
    pessoaTr.appendChild(criarTd(pessoa.idade));

    // retorna tag criada e com valor
    return pessoaTr;

};

// funcao para criar um dado dentro de uma tag
function criarTd (dado) {

    // cria uma tag td e armazena em variavel
    var td = document.createElement('td');

    // pega o dado digitado pelo usuario e o insere na tag
    td.textContent = dado;

    // retorna tag criada e com valor
    return td;

};