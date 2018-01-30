// Quando refatorar, quando seu teste passar pela primeira vez
// Demonstrar o esforço para criar outra lista (repetição de definição)
// OO/ES6: Definir classe Lista e instanciar um objeto ListaNotas
// OO/ES6: Herança com uma classe lista genérica
var listaNotas = {
    // OO/ES6: Setar a seção e lista interna como atributos de classe e definir um valor default para lista esta última
    // OO/ES6: Usar a converção de nomes para atributos privados
    // Refatoração, passar uma função que chama a atualizaSecao com o parâmetros que ela necessita via construtor
    // let secao = document.getElementsByClassName("notes")[0];
    // const observador = () => atualizaSecao(secao);
    // const listaNotas = new Lista(observador);
    // Ser defensivo pensar no caso que não tem observador
    // Refatoração: conceituar desacoplamento da lista com a tela
    secao: document.getElementsByClassName("notes")[0],
    // Explicar que a lista interna é uma composição diferente de herança
    listaInterna: [],
    // OO/ES6: usar method property nas funções
    adiciona: function(novoTitulo, novoTexto) {
        // OO/ES6: diferenciar var, let e const, para usar const
        // OO/ES6: Definir classe Nota e instanciar um objeto nota
        var nota = {
            titulo: novoTitulo,
            texto: novoTexto,
            editando: false
        };
        this.listaInterna.push(nota);
        atualizarSecao(this.secao);
    },
    remove: function(posicao) {
        // pensar em erro e se a posicao nao existe
        this.listaInterna.splice(posicao, 1);
        atualizarSecao(this.secao);
    },
    edita: function(posicao) {
        // Refatoração: usar internamente nossa função pega
        this.listaInterna[posicao].editando = true;
        atualizarSecao(this.secao);
    },
    // OO/ES6: usar rest operator com os novos título e texto para em seguida a desestruturação de objeto
    // salva: ({ posicao, ...resto }) => {
    //      const notaAtual = this.pega(posicao);
    //      const novaNota = { ...notaAtual, ...resto };
    //      this.troca(posicao, novaNota);
    // }
    salva: function(posicao, novoTitulo, novoTexto) {
        // Refatoração: usar internamente nossa função pega
        this.listaInterna[posicao].titulo = novoTitulo;
        this.listaInterna[posicao].texto = novoTexto;
        this.listaInterna[posicao].editando = false;
        atualizarSecao(this.secao);
    },
    pega: function(posicao) {
        return this.listaInterna[posicao];
    },
    contaTotal: function() {
        return this.listaInterna.length;
    }
};


function atualizarSecao(secao) {
    var conteudoSecao = "";

    // OO/ES6: Usar template string
    for (var posicao = 0; posicao < listaNotas.contaTotal(); posicao++) {
        // Refatoração: guardar numa variável a nota pega
        if (listaNotas.pega(posicao).editando) {
            // OO/ES6: Explicar a diferença de paradigma declarativo para o funcional
            conteudoSecao += '<form class="note">'+
                                '<input class="note__title" type="text" name="titulo" value="' + listaNotas.listaInterna[posicao].titulo + '" placeholder="Título">'+
                                '<textarea class="note__body" name="texto" rows="5" placeholder="Criar uma nota...">' + listaNotas.listaInterna[posicao].texto +'</textarea>'+
                                '<button class="note__control" type="button" onclick="adicionarNota(this.form.titulo, this.form.texto, this.form, ' + posicao +')">'+
                                    'Concluído'+
                                '</button>'+
                             '</form>';
        } else {
            conteudoSecao += '<form class="note" onclick="editaFormulario(' + posicao + ')">'+
                                '<button class="note__control" type="button" onclick="removerNota(event,' + posicao + ')">'+
                                    '<i class="fa fa-times" aria-hidden="true"></i>'+
                                '</button>'+
                                '<h1 class="note__title">' + listaNotas.listaInterna[posicao].titulo + '</h1>'+
                                '<p class="note__body">' + listaNotas.listaInterna[posicao].texto + '</p>'+
                             '</form>';
        }
    }

    secao.innerHTML = conteudoSecao;
}

function editaFormulario(posicao) {
    listaNotas.edita(posicao);
}

function adicionarNota(inputTitulo, textareaTexto, formulario, posicao) {
    if (listaNotas.pega(posicao)) {
        // Refatoração: guardar os values em uma variavel
        listaNotas.salva(posicao, inputTitulo.value, textareaTexto.value);
    } else {
        listaNotas.adiciona(inputTitulo.value, textareaTexto.value);
        formulario.reset();
    }
}

function removerNota(evento, posicao) {
    evento.stopPropagation();
    listaNotas.remove(posicao);
}