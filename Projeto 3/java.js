confirmacaoPedido()

function selecionarPrato(post) {
    //identificando os elementos com classe bordaselect
    const elemento = document.querySelector(".prato .bordaselect");
    //se o retorno em elemento for diferente de nulo (tem a classe) remove a classe bordaselect
    if (elemento !== null) {
      elemento.classList.toggle("bordaselect");
    }
    //pegando o parâmetro post e add/remove a classe bordaselect e escrevendo em tela de confirmação
    post.classList.toggle("bordaselect");
    document.querySelector(".valorPrato").innerHTML = document.querySelector(".prato .bordaselect .valor").innerHTML;
    document.querySelector(".nomePrato").innerHTML = document.querySelector(".prato .bordaselect .nomeitem").innerHTML;
  }
    //Seleciona bebida e escreve em confirmação
  function selecionarBebida(post) {
    const elemento = document.querySelector(".bebida .bordaselect");
    if (elemento !== null) {
      elemento.classList.toggle("bordaselect");
    }
    post.classList.toggle("bordaselect");
    document.querySelector(".valorBebida").innerHTML = document.querySelector(".bebida .bordaselect .valor").innerHTML;
    document.querySelector(".nomeBebida").innerHTML = document.querySelector(".bebida .bordaselect .nomeitem").innerHTML;
  }
    //Seleciona sobremesa e escreve em confirmação
  function selecionarSobremesa(post) {
    const elemento = document.querySelector(".sobremesa .bordaselect");
    if (elemento !== null) {
      elemento.classList.toggle("bordaselect");
    }
    post.classList.toggle("bordaselect");
    document.querySelector(".valorSobremesa").innerHTML = document.querySelector(".sobremesa .bordaselect .valor").innerHTML;
    document.querySelector(".nomeSobremesa").innerHTML = document.querySelector(".sobremesa .bordaselect .nomeitem").innerHTML;
  }

  //Muda a cor do botão para verde quando cada função não retorna vazio
  function finalizarpedido() {
    const elementoP = document.querySelector(".prato .bordaselect");
    const elementoB = document.querySelector(".bebida .bordaselect");
    const elementoS = document.querySelector(".sobremesa .bordaselect");
    const elemento = document.querySelector(".botao");
    const link = document.querySelector(".desabilitado");
  
    if (elementoP !== null && elementoB !== null && elementoS !== null) {
        elemento.classList.add("fundoVerde");
        elemento.innerHTML = "Fechar Pedido";
      }
  }
  //configura a tela de confirmação
  function confirmacaoPedido(){
    const elementoP = document.querySelector(".prato .bordaselect");
    const elementoB = document.querySelector(".bebida .bordaselect");
    const elementoS = document.querySelector(".sobremesa .bordaselect");

    if (elementoP !== null && elementoB !== null && elementoS !== null){
        let valorPrato = document.querySelector(".prato .bordaselect .valor").innerHTML.replace(",", ".");
        let valorBebida = document.querySelector(".bebida .bordaselect .valor").innerHTML.replace(",", ".");
        let valorSobremesa = document.querySelector(".sobremesa .bordaselect .valor").innerHTML.replace(",", ".");
        valorPrato = parseFloat(valorPrato);
        valorBebida = parseFloat(valorBebida);
        valorSobremesa = parseFloat(valorSobremesa);
        const total = (valorPrato + valorBebida + valorSobremesa).toFixed(2);
        document.querySelector(".valor2").innerHTML = total.replace(".", ",");

           document.querySelector('.confirmacaoPedido').style.display="flex";
           //const disp = document.getElementsByClassName('confirmacaoPedido')[0].style.display="flex";
        }else{
           document.querySelector('.confirmacaoPedido').style.display="none";
        }
  }
  //configura a mensagem
  function mensagem (){
    let valorPrato = document.querySelector(".prato .bordaselect .valor").innerHTML.replace(",", ".");
    const nomePrato = document.querySelector(".prato .bordaselect .nomeitem").innerHTML;
    let valorBebida = document.querySelector(".bebida .bordaselect .valor").innerHTML.replace(",", ".");
    const nomeBebida = document.querySelector(".bebida .bordaselect .nomeitem").innerHTML;
    let valorSobremesa = document.querySelector(".sobremesa .bordaselect .valor").innerHTML.replace(",", ".");
    const nomeSobremesa = document.querySelector(".sobremesa .bordaselect .nomeitem").innerHTML;

    valorPrato = parseFloat(valorPrato);
    valorBebida = parseFloat(valorBebida);
    valorSobremesa = parseFloat(valorSobremesa);
    const total = (valorPrato + valorBebida + valorSobremesa).toFixed(2);
    document.querySelector(".valor2").innerHTML = total.replace(".", ",");

    const mensagem = "Olá gostaria de fazer o pedido: \n-Prato: " + nomePrato + "\n-Bebida: " + nomeBebida + "\n-Sobremesa: " + nomeSobremesa + "\nTotal: R$ " +  total
    return mensagem
  }

  function enviarMensagem(){
    const nome = prompt("Informe seu nome:")
    const endereco = prompt("Informe seu endereço de entrega:")
    const mensagemFinal = mensagem() + "\n\n Nome: " + nome + "\n Endereço: " + endereco;

    const elementoP = document.querySelector(".prato .bordaselect");
    const elementoB = document.querySelector(".bebida .bordaselect");
    const elementoS = document.querySelector(".sobremesa .bordaselect");
    if (elementoP !== null && elementoB !== null && elementoS !== null) {
        window.location = "https://wa.me/555195909864?text=" + encodeURIComponent(mensagemFinal);
      }
  }
  function cancelar(){
    document.querySelector('.confirmacaoPedido').style.display="none";
  }

