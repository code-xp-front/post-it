'use strict';

var items = [];

function adicionarItens() {

    event.preventDefault();

    var item = {
        titulo: document.getElementById('titulo').value
    };

    items.push(item);

    var div = document.createElement('div');

    div.id = "item";

    var template = "";

    template += '<div class = "form__item"> Item </div>';
    template += '<div class="form__item-num">  ' + items.length + ' </div>';
    template += ' <div> <input type="text" class="form__item-add"></div>';
    template += '<div class="form__button-itemremove" onclick="removerItem()">-</div>';

    div.innerHTML = template;

    document.getElementById("lista-itens").appendChild(div);
}

function removerItem() {

    var itens = document.getElementById("item");

    if (itens.parentNode) {
        itens.parentNode.removeChild(itens);
    }
}

// function validarForm(){

//     var template = "";

//      template += '<button type = "submit" class="form__button"> Cadastrar c/ DOM </button>';
//      template += '<button type = "submit" class="form__button"> Cadastrar s/ DOM </button>';
//      template += '<button type = "submit" class="form__button"> Limpar </button>';

//      document.getElementById("form__buttons").innerHTML=template;

// }