let qualquerCoisa = "";

const listaNotas = {
    secao: document.getElementsByClassName("notes")[0],
    listaInterna: [],
    adiciona(novoTitulo, novoTexto) {
        let nota = {
            titulo: novoTitulo,
            texto: novoTexto,
            editando: false
        };
        this.listaInterna.push(nota);
        atualizarSecao(this.secao);
    },
    remove(posicao) {
        this.listaInterna.splice(posicao, 1);
        atualizarSecao(this.secao);
    },
    edita(posicao) {
        this.listaInterna[posicao].editando = true;
        atualizarSecao(this.secao);
    },
    salva(posicao, novoTitulo, novoTexto) {
        this.listaInterna[posicao].titulo = novoTitulo;
        this.listaInterna[posicao].texto = novoTexto;
        this.listaInterna[posicao].editando = false;
        atualizarSecao(this.secao);
    },
    pega(posicao) {
        return this.listaInterna[posicao] // não esquecer do return
    },
    contaTotal() {
        return this.listaInterna.length; // não esquecer do return
    }
};

const atualizarSecao = secao => {
    let conteudoSecao = "";

    for (let posicao = 0; posicao < listaNotas.contaTotal(); posicao++) {
        let notaAtual = listaNotas.pega(posicao);
        if (notaAtual.editando) {
            conteudoSecao += `<form class="note">
                                <input class="note__title" type="text" name="titulo" value="${notaAtual.titulo}" placeholder="Título">
                                <textarea class="note__body" name="texto" rows="5" placeholder="Criar uma nota...">${notaAtual.texto}</textarea>
                                <button class="note__control" type="button" onclick="adicionarNota(this.form.titulo, this.form.texto, this.form, ${posicao})">
                                    Concluído
                                </button>
                              </form>`;
        } else {
            conteudoSecao += `<form class="note" onclick="editaFormulario(${posicao})">
                                <button class="note__control" type="button" onclick="removerNota(event, ${posicao})">
                                    <i class="fa fa-times" aria-hidden="true"></i>
                                </button>
                                <h1 class="note__title">${notaAtual.titulo}</h1>
                                <p class="note__body">${notaAtual.texto}</p>
                              </form>`;
        }
    }

    secao.innerHTML = conteudoSecao;
}

const editaFormulario = posicao => listaNotas.edita(posicao);

const adicionarNota = (inputTitulo, textareaTexto, formulario, posicao) => {
    if (listaNotas.pega(posicao)) {
        listaNotas.salva(posicao, inputTitulo.value, textareaTexto.value);
    } else {
        listaNotas.adiciona(inputTitulo.value, textareaTexto.value);
        formulario.reset();
    }
}

const removerNota = (evento, posicao) => {
    evento.stopPropagation();
    listaNotas.remove(posicao);
}