var notas = [];

function atualizarSecao(secao) {
    // criar uma variavel que vai guardar o html de todas as notas que devem aparecer na tela
    var conteudoSecao = "";

    // percorrer cada item da lista de notas, criar o html de cada nota e colocar na variavel acima
    for (var posicao = 0; posicao < notas.length; posicao++) {
        if (notas[posicao].editando) {
            conteudoSecao += '<form class="note">'+
                                '<input class="note__title" type="text" name="titulo" value="' + notas[posicao].titulo + '" placeholder="Título">'+
                                '<textarea class="note__body" name="texto" rows="5" placeholder="Criar uma nota...">' + notas[posicao].texto +'</textarea>'+
                                '<button class="note__control" type="button" onclick="adicionarNota(this.form.titulo, this.form.texto, this.form, this.form.parentElement, ' + posicao +')">'+
                                    'Concluído'+
                                '</button>'+
                             '</form>';
        } else {
            conteudoSecao += '<form class="note" onclick="editaFormulario(' + posicao + ', this.parentElement)">'+
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

    // chamar o atualiza tela
    atualizarSecao(secao);
}

function adicionarNota(inputTitulo, textareaTexto, formulario, secao, posicao) {
    if (notas[posicao]) {
        // pegar nota e trocar o titulo, texto e atributo editando dela
        notas[posicao].titulo = inputTitulo.value;
        notas[posicao].texto = textareaTexto.value;
        notas[posicao].editando = false;
        
        // chamar o atualiza secao
        atualizarSecao(secao);
    } else {
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
}

function removerNota(posicao, secao) {
    // remover nota da lista de notas
    notas.splice(posicao, 1);

    // atualizar tela
    atualizarSecao(secao);
}