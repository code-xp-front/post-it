// converter o objeto notas em uma instância de uma classe lista
var notas = {
    lista: [],
    adiciona: function(titulo, texto, secao) {
        // converter o objeto nota em uma instancia de uma classe nota
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
    atualiza: function(titulo, texto, posicao, secao) {
        this.lista[posicao].titulo = titulo;
        this.lista[posicao].texto = texto;
        this.lista[posicao].editando = false;
        atualizarSecao(secao);
    }
};


function atualizarSecao(secao) {
    var conteudoSecao = "";

''
    for (var posicao = 0; posicao < notas.lista.length; posicao++) {
        if (notas.lista[posicao].editando) {
            conteudoSecao += '<form class="note">'+
                                '<input class="note__title" type="text" name="titulo" value="' + notas.lista[posicao].titulo + '" placeholder="Título">'+
                                '<textarea class="note__body" name="texto" rows="5" placeholder="Criar uma nota...">' + notas.lista[posicao].texto +'</textarea>'+
                                '<button class="note__control" type="button" onclick="atualizaNota(this.form.titulo, this.form.texto, this.form, this.form.parentElement, ' + posicao +')">'+
                                    'Concluído'+
                                '</button>'+
                             '</form>';
        } else {
            conteudoSecao += '<form class="note" onclick="editaFormulario(' + posicao + ', this.parentElement)">'+
                                '<button class="note__control" type="button" onclick="removerNota(event, ' + posicao + ', this.form.parentElement)">'+
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

function atualizaNota(inputTitulo, textareaTexto, formulario, secao, posicao) {
    var titulo = inputTitulo.value;
    var texto = textareaTexto.value;

    notas.atualiza(titulo, texto, posicao, secao);
}

function removerNota(evento, posicao, secao) {
    evento.stopPropagation();
    notas.remove(posicao, secao);
}

function editaFormulario(posicao, secao) {
    notas.edita(posicao, secao);
    return false;
}
