var notas = {
    lista: [],
    adiciona: function(titulo, texto, secao) {
        var nota = {
            titulo: titulo,
            texto: texto,
            editando: false
        };

        this.lista.push(nota);
        atualizarSecao(secao);
    },
    remove: function(posicao, secao) {
        this.lista.splice(posicao, 1);
        atualizarSecao(secao);
    },
    edita: function(posicao, secao) {
        this.lista[posicao].editando = true;
        atualizarSecao(secao);
    },
    salva: function(posicao, titulo, texto, secao) {
        this.lista[posicao].titulo = titulo;
        this.lista[posicao].texto = texto;
        this.lista[posicao].editando = false;
        atualizarSecao(secao);
    }
};


function atualizarSecao(secao) {
    var conteudoSecao = "";

    for (var posicao=0; posicao < notas.lista.length; posicao++) {
        if (notas.lista[posicao].editando) {
            // template input + textarea
        } else {
            conteudoSecao += '<form class="note" onclick="editaFormulario(' + posicao + ', this.parentElement)">'+
                                '<button class="note__control" type="button" onclick="removerNota(' + posicao + ', this.form.parentElement)">'+
                                    '<i class="fa fa-times" aria-hidden="true"></i>'+
                                '</button>'+
                                '<h1 class="note__title">' + notas.lista[posicao].titulo + '</h1>'+
                                '<p class="note__body">' + notas.lista[posicao].texto + '</p>'+
                            '</form>';
        }
    }

    secao.innerHTML = conteudoSecao;
}

function adicionarNota(inputTitulo, textareaTexto, formulario, secao) {
    var titulo = inputTitulo.value;
    var texto = textareaTexto.value;

    notas.adiciona(titulo, texto, secao);

    formulario.reset();
}

function removerNota(posicao, secao) {
    notas.remove(posicao, secao);
}

function editaFormulario(posicao, secao) {
    notas.edita(posicao, secao);
}
