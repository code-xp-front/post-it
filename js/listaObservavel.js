// export default class ListaObservavel extends Array { 
//     constructor(observador) {
//         super();
//         this.observador = observador;
//     }

//     push(item){
//         super.push(item);
//         this.observador();
//     }

//     splice(posicao, quantidade){
//         super.splice(posicao, quantidade);
//         this.observador();
//     }
// }

const atualizarSecao = (secao) => {
    let conteudoSecao = "";

    for (let posicao = 0; posicao < listaNotas.contaTotal(); posicao++) {
        // Refatoração: guardar numa variável a nota pega
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

const secaoNotas = document.getElementsByClassName("notes")[0];

function observaListaNotas() {
    atualizarSecao(secaoNotas);
}

const listaNotas = {
    listaInterna: [],
    // Refatoração: desacoplamento da lista com a tela
    observador: observaListaNotas,
    adiciona(item) {
        this.listaInterna.push(item);
        this.observador();
    },
    remove(posicao) {
        this.listaInterna.splice(posicao, 1);
        this.observador();
    },
    edita(posicao, item) {
        // Refatoração: usar internamente nossa função pega
        let itemAtual = this.pega(posicao);
        itemAtual = item; 
        this.observador();
    },
    temItem(posicao) {
        return posicao in this.listaInterna;
    },
    pega(posicao) {
        return this.listaInterna[posicao];
    },
    contaTotal() {
        return this.listaInterna.length;
    }
};

export default listaNotas;