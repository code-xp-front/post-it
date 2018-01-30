// var pessoa = {
//     nome: "Camila",
//     idade: 18,
//     descobrirAnoNascimento: function() {

//     }
// }

// pessoa.descobrirAnoNascimento()

var novaLista = {
    listaNotas: [],
    secao: document.getElementsByClassName("notes")[0],

    adicionar: function (novoTitulo, novoTexto, secao) {

        var nota = {
            titulo: novoTitulo,
            texto: novoTexto,
            editando: false
        };

        this.listaNotas.push(nota);

        atualizarSecao(this.secao);

    },

    editar: function (index) {

        this.listaNotas[index].editando = true;

        atualizarSecao(this.secao);

    },

    remover: function (index) {

        this.listaNotas.splice(index, 1);

        atualizarSecao(this.secao);

    },

    salvar: function (index, novoTitulo, novoTexto) {

        this.listaNotas[index].titulo = novoTitulo;
        this.listaNotas[index].texto = novoTexto;

        this.listaNotas[index].editando = false;

        atualizarSecao(this.secao);

    },
    pegaNota: function(index) {
        return this.listaNotas[index];
    }
};


function atualizarSecao(secao) {

    var inserirHTML = "";

    for (var index = 0; index < novaLista.listaNotas.length; index++) {

        if (novaLista.listaNotas[index].editando == true) {

            inserirHTML += '<form class="note note--editing">' +
                '<input class="note__title note__title--editing" type="text" name="title" placeholder="Título" value="' + novaLista.listaNotas[index].titulo + '" autofocus />' +
                '<textarea class="note__body note__body--editing" name="body" rows="5" placeholder="Criar uma nota...">' + novaLista.listaNotas[index].texto + '</textarea>' +
                '<button class="note__control" type="button" onclick="adicionarNota(this.form.title, this.form.body, this.form,' + index + ')"> Salvar </button>' +
                '</form>'

        } else {

            inserirHTML += '<form class="note" onclick="editarNota(' + index + '")>' +
                '<button class="note__excluir" onclick="excluirNota(event,' + index + ')">' +
                '<i class="fa fa-times" aria-hidden="true"></i>' +
                '</button>' +
                '<h1 class="note__title">' + novaLista.listaNotas[index].titulo + '</h1>' +
                '<p class="note__body">' + novaLista.listaNotas[index].texto + '</p>' +
                '</form>'
        }
    }

    secao.innerHTML = inserirHTML;

};


function editarNota(index) {

    novaLista.editar(index);

}


function adicionarNota(inputTitulo, inputTexto, formulario, index) {

    console.log(inputTexto);

    if (novaLista.listaNotas[index]) {

        novaLista.salvar(index, inputTitulo.value, inputTexto.value);

    } else {

        novaLista.adicionar(inputTitulo.value, inputTexto.value);
        formulario.reset();

    }
}


function excluirNota(evento, index) {

    evento.stopPropagation();

    novaLista.listaNotas.splice(index, 1);

}
