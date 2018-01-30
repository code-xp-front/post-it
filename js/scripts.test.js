import listaNotas from './scripts'

test('testa se está adicionado item', () => {
    listaNotas.adiciona("Titulo", "Texto");
    expect(listaNotas.contaTotal()).toBe(1);
});