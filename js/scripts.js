var listaNotas = [];

//////////////////////////////////////////////////

function atualizarSecao(secao) {

    //criar var pra guardar html de todas as notas pra aparecer na tela

    var inserirHTML = "";

    //percorrer lista de notas e criar template html de cada nota, e colocar na var de guardar html

    for (var index = 0; index < listaNotas.length; index++) {

        if (listaNotas[index].editando == true) {
            
            inserirHTML += '<form class="note" onclick="editarNota(' + index + ', this.parentElement)">' +
            '<button class="note__excluir" onclick="excluirNota(this.form.parentElement,' + index + ')">' +
            '<i class="fa fa-times" aria-hidden="true"></i>' +
            '</button>' +
            '<input class="note__title" type="text" name="title" placeholder="Título" value="' + listaNotas[index].titulo + '" autofocus />' +
            '<textarea class="note__body" name="body" rows="5" placeholder="Criar uma nota...">' + listaNotas[index].texto + '</textarea>' +
            '<button class="note__control" type="button" onclick="adicionarNota(this.form.title, this.form.body, this.form, this.form.nextElementSibling)"> Concluído </button>'
            '</form>'

        } else {
            
        inserirHTML += '<form class="note" onclick="editarNota(' + index + ', this.parentElement)">' +
            '<button class="note__excluir" onclick="excluirNota(this.form.parentElement,' + index + ')">' +
            '<i class="fa fa-times" aria-hidden="true"></i>' +
            '</button>' +
            '<h1 class="note__title">' + listaNotas[index].titulo + '</h1>' +
            '<p class="note__body">' + listaNotas[index].texto + '</p>' +
            '</form>'
        }
    }

    //colocar html de todos (inner) da secao

    secao.innerHTML = inserirHTML;

}

//////////////////////////////////////////////////

function adicionarNota(inputTitulo, inputTexto, formulario, secao) {
    //criar uma variável pra armazenar dados do form (nota)

    var nota = {
        titulo: inputTitulo.value,
        texto: inputTexto.value,
        editando: false
    };

    //add nota dentro de uma lista de notas

    listaNotas.push(nota);

    //atualizar a seção de notas para aparecer na tela

    atualizarSecao(secao);

    //limpar o form preenchido

    formulario.reset();


    // console.log(listaNotas);
}

//////////////////////////////////////////////////

function excluirNota(secao, index) {

    //excluir a nota da lista de notas
    listaNotas.splice(index, 1);

    //atualizar a página
    atualizarSecao(secao);

}

//////////////////////////////////////////////////

function editarNota(index, secao) {
    
    //clicando na nota criada para virar editavel
    listaNotas[index].editando = true;

    //atualizar a tela
    atualizarSecao(secao);
}