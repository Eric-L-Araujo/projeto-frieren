//query selector all, busca varios elementos do html pelo atributo class

//Busque todos os elementos que possuem a classe botao
const botoes = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll('.personagem');
//passo 2 - adidionar a classe "selecionado" no botão qu o usuário clicou
//não funciona assim porque o addeventlistener não funciona com varios elementos, por isso, use o forEach
// botoes.addEventListener('click', () => {
// })

botoes.forEach((botao, indice )=> {
  botao.addEventListener('click', () => {
    console.log('clicou no botão',botao);

    //O queryselector busca a classe apenas de um elemento
    const botaoSelecionado = document.querySelector('.botao.selecionado');
    botaoSelecionado.classList.remove("selecionado");


    // Adiciona a classe "selecionado" quando clicar no botão
    botao.classList.add('selecionado');

    const personagemSelecionado = document.querySelector('.personagem.selecionado');
    personagemSelecionado.classList.remove('selecionado');
    personagens[indice].classList.add('selecionado');
  });
});


