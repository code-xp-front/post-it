var notas = [];

function atualizarSecao(secao) {
    // criar uma variavel que var guardar o html de todas as notas que devem aparecer na tela
    var conteudoSecao = "";

    // percorrer cada item da lista de notas, criar o html de cada nota, e colocar na variavel acima
    for (var posicao=0; posicao < notas.length; posicao++) {
        if (notas[posicao].editando) {
            // template input + textarea
        } else {
            conteudoSecao += '<form class="note" onclick="editaFormulario()">'+
                                '<button class="note__control" type="button" onclick="removerNota(' + posicao + ', this.form.parentElement)">'+
                                    '<i class="fa fa-times" aria-hidden="true"></i>'+
                                '</button>'+
                                '<h1 class="note__title">' + notas[posicao].titulo + '</h1>'+
                                '<p class="note__body">' + notas[posicao].texto + '</p>'+
                            '</form>';
        }
    }

    // colocar o html de todo mundo dentro (inner) da secao
    secao.innerHTML = conteudoSecao;
}

function editaFormulario(posicao, secao) {
    // pegar notar e setar editando = true
    notas[posicao].editando = true;

    // chamo o atualiza tela
    atualizarSecao(secao);
}

function adicionarNota(inputTitulo, textareaTexto, formulario, secao) {
    // criar uma variavel nota
    var nota = {
        titulo: inputTitulo.value,
        texto: textareaTexto.value,
        editando: false
    };

    // adicionar nota dentro da lista
    notas.push(nota);

    // atualizar a secao de notas
    atualizarSecao(secao);

    // limpar o formulario
    formulario.reset();
}

function removerNota(posicao, secao) {
    // remover nota da lista de notas
    notas.splice(posicao, 1);

    // atualizar tela
    atualizarSecao(secao);
}