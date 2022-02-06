function calcularMedia() {
    // cria referência aos elementos da página: TIME 1
    // pesos de defesa
    var tecnico__time1 = document.getElementById("pesoTecnico__time1");
    var jogador1__defesa__time1 = document.getElementById("inDefesaJogador1__time1");
    var jogador2__defesa__time1 = document.getElementById("inDefesaJogador2__time1");
    var jogador3__defesa__time1 = document.getElementById("inDefesaJogador3__time1");
    var jogador4__defesa__time1 = document.getElementById("inDefesaJogador4__time1");
    var jogador5__defesa__time1 = document.getElementById("inDefesaJogador5__time1");
    var jogador6__defesa__time1 = document.getElementById("inDefesaJogador6__time1");
    var jogador7__defesa__time1 = document.getElementById("inDefesaJogador7__time1");
    var jogador8__defesa__time1 = document.getElementById("inDefesaJogador8__time1");
    var jogador9__defesa__time1 = document.getElementById("inDefesaJogador9__time1");
    var jogador10__defesa__time1 = document.getElementById("inDefesaJogador10__time1");
    var jogador11__defesa__time1 = document.getElementById("inDefesaJogador11__time1");
    // pesos de ataque
    var jogador1__ataque__time1 = document.getElementById("inAtaqueJogador1__time1");
    var jogador2__ataque__time1 = document.getElementById("inAtaqueJogador2__time1");
    var jogador3__ataque__time1 = document.getElementById("inAtaqueJogador3__time1");
    var jogador4__ataque__time1 = document.getElementById("inAtaqueJogador4__time1");
    var jogador5__ataque__time1 = document.getElementById("inAtaqueJogador5__time1");
    var jogador6__ataque__time1 = document.getElementById("inAtaqueJogador6__time1");
    var jogador7__ataque__time1 = document.getElementById("inAtaqueJogador7__time1");
    var jogador8__ataque__time1 = document.getElementById("inAtaqueJogador8__time1");
    var jogador9__ataque__time1 = document.getElementById("inAtaqueJogador9__time1");
    var jogador10__ataque__time1 = document.getElementById("inAtaqueJogador10__time1");
    var jogador11__ataque__time1 = document.getElementById("inAtaqueJogador11__time1");
     
   // cria referência aos elementos da página: TIME 2
   // pesos de defesa
    var tecnico__time2 = document.getElementById("pesoTecnico__time2");
    var jogador1__defesa__time2 = document.getElementById("inDefesaJogador1__time2");
    var jogador2__defesa__time2 = document.getElementById("inDefesaJogador2__time2");
    var jogador3__defesa__time2 = document.getElementById("inDefesaJogador3__time2");
    var jogador4__defesa__time2 = document.getElementById("inDefesaJogador4__time2");
    var jogador5__defesa__time2 = document.getElementById("inDefesaJogador5__time2");
    var jogador6__defesa__time2 = document.getElementById("inDefesaJogador6__time2");
    var jogador7__defesa__time2 = document.getElementById("inDefesaJogador7__time2");
    var jogador8__defesa__time2 = document.getElementById("inDefesaJogador8__time2");
    var jogador9__defesa__time2 = document.getElementById("inDefesaJogador9__time2");
    var jogador10__defesa__time2 = document.getElementById("inDefesaJogador10__time2");
    var jogador11__defesa__time2 = document.getElementById("inDefesaJogador11__time2");
    // pesos de ataque
    var jogador1__ataque__time2 = document.getElementById("inAtaqueJogador1__time2");
    var jogador2__ataque__time2 = document.getElementById("inAtaqueJogador2__time2");
    var jogador3__ataque__time2 = document.getElementById("inAtaqueJogador3__time2");
    var jogador4__ataque__time2 = document.getElementById("inAtaqueJogador4__time2");
    var jogador5__ataque__time2 = document.getElementById("inAtaqueJogador5__time2");
    var jogador6__ataque__time2 = document.getElementById("inAtaqueJogador6__time2");
    var jogador7__ataque__time2 = document.getElementById("inAtaqueJogador7__time2");
    var jogador8__ataque__time2 = document.getElementById("inAtaqueJogador8__time2");
    var jogador9__ataque__time2 = document.getElementById("inAtaqueJogador9__time2");
    var jogador10__ataque__time2 = document.getElementById("inAtaqueJogador10__time2");
    var jogador11__ataque__time2 = document.getElementById("inAtaqueJogador11__time2");


     // cria referência aos elementos da página: RESULTADO (PLACAR)
    var outGols__Time1 = document.getElementById("outGols__Time1");
    var outGols__Time2 = document.getElementById("outGols__Time2");

    var outTotalDefesa__time1 = document.getElementById("outTotalDefesa__time1"); 
    var outTotalAtaque__time1 = document.getElementById("outTotalAtaque__time1");
    var outTotalDefesa__time2 = document.getElementById("outTotalDefesa__time2");
    var outTotalAtaque__time2 = document.getElementById("outTotalAtaque__time2");

    // obtém os conteúdos dos campos de edição da página: TIME 1
    // defesa
    var tecnico__time1 = Number(pesoTecnico__time1.value);
    var jogador1__defesa__time1 = Number(inDefesaJogador1__time1.value);
    var jogador2__defesa__time1 = Number(inDefesaJogador2__time1.value);
    var jogador3__defesa__time1 = Number(inDefesaJogador3__time1.value);
    var jogador4__defesa__time1 = Number(inDefesaJogador4__time1.value);
    var jogador5__defesa__time1 = Number(inDefesaJogador5__time1.value);
    var jogador6__defesa__time1 = Number(inDefesaJogador6__time1.value);
    var jogador7__defesa__time1 = Number(inDefesaJogador7__time1.value);
    var jogador8__defesa__time1 = Number(inDefesaJogador8__time1.value);
    var jogador9__defesa__time1 = Number(inDefesaJogador9__time1.value);
    var jogador10__defesa__time1 = Number(inDefesaJogador10__time1.value);
    var jogador11__defesa__time1 = Number(inDefesaJogador11__time1.value);
    // ataque
    var jogador1__ataque__time1 = Number(inAtaqueJogador1__time1.value);
    var jogador2__ataque__time1 = Number(inAtaqueJogador2__time1.value);
    var jogador3__ataque__time1 = Number(inAtaqueJogador3__time1.value);
    var jogador4__ataque__time1 = Number(inAtaqueJogador4__time1.value);
    var jogador5__ataque__time1 = Number(inAtaqueJogador5__time1.value);
    var jogador6__ataque__time1 = Number(inAtaqueJogador6__time1.value);
    var jogador7__ataque__time1 = Number(inAtaqueJogador7__time1.value);
    var jogador8__ataque__time1 = Number(inAtaqueJogador8__time1.value);
    var jogador9__ataque__time1 = Number(inAtaqueJogador9__time1.value);
    var jogador10__ataque__time1 = Number(inAtaqueJogador10__time1.value);
    var jogador11__ataque__time1 = Number(inAtaqueJogador11__time1.value);

    // obtém os conteúdos dos campos de edição da página: TIME 2
    // defesa
    var tecnico__time2 = Number(pesoTecnico__time2.value);
    var jogador1__defesa__time2 = Number(inDefesaJogador1__time2.value);
    var jogador2__defesa__time2 = Number(inDefesaJogador2__time2.value);
    var jogador3__defesa__time2 = Number(inDefesaJogador3__time2.value);
    var jogador4__defesa__time2 = Number(inDefesaJogador4__time2.value);
    var jogador5__defesa__time2 = Number(inDefesaJogador5__time2.value);
    var jogador6__defesa__time2 = Number(inDefesaJogador6__time2.value);
    var jogador7__defesa__time2 = Number(inDefesaJogador7__time2.value);
    var jogador8__defesa__time2 = Number(inDefesaJogador8__time2.value);
    var jogador9__defesa__time2 = Number(inDefesaJogador9__time2.value);
    var jogador10__defesa__time2 = Number(inDefesaJogador10__time2.value);
    var jogador11__defesa__time2 = Number(inDefesaJogador11__time2.value);  
    // ataque
    var jogador1__ataque__time2 = Number(inAtaqueJogador1__time2.value);
    var jogador2__ataque__time2 = Number(inAtaqueJogador2__time2.value);
    var jogador3__ataque__time2 = Number(inAtaqueJogador3__time2.value);
    var jogador4__ataque__time2 = Number(inAtaqueJogador4__time2.value);
    var jogador5__ataque__time2 = Number(inAtaqueJogador5__time2.value);
    var jogador6__ataque__time2 = Number(inAtaqueJogador6__time2.value);
    var jogador7__ataque__time2 = Number(inAtaqueJogador7__time2.value);
    var jogador8__ataque__time2 = Number(inAtaqueJogador8__time2.value);
    var jogador9__ataque__time2 = Number(inAtaqueJogador9__time2.value);
    var jogador10__ataque__time2 = Number(inAtaqueJogador10__time2.value);
    var jogador11__ataque__time2 = Number(inAtaqueJogador11__time2.value);  

    // calcula a média dos times
    // var mediaTime1 = (jogador1__time1 + jogador2__time1) / 2;
    // var mediaTime2 = (jogador1__time2 + jogador2__time2) / 2;

    // calcula a soma dos pesos dos jogadores por time e por SETOR
    // Setor ATAQUE
    var somaTime1__ataque = (tecnico__time1 + jogador1__ataque__time1 + jogador2__ataque__time1 + jogador3__ataque__time1 + jogador4__ataque__time1 + jogador5__ataque__time1 + jogador6__ataque__time1 + jogador7__ataque__time1 + jogador8__ataque__time1 + jogador9__ataque__time1 + jogador10__ataque__time1 + jogador11__ataque__time1);

    var somaTime2__ataque = (tecnico__time2 + jogador1__ataque__time2 + jogador2__ataque__time2 + jogador3__ataque__time2 + jogador4__ataque__time2 + jogador5__ataque__time2 + jogador6__ataque__time2 + jogador7__ataque__time2 + jogador8__ataque__time2 + jogador9__ataque__time2 + jogador10__ataque__time2 + jogador11__ataque__time2);
    
    // Setor DEFESA
    var somaTime1__defesa = (tecnico__time1 + jogador1__defesa__time1 + jogador2__defesa__time1 + jogador3__defesa__time1 + jogador4__defesa__time1 + jogador5__defesa__time1 + jogador6__defesa__time1 + jogador7__defesa__time1 + jogador8__defesa__time1 + jogador9__defesa__time1 + jogador10__defesa__time1 + jogador11__defesa__time1);

    var somaTime2__defesa = (tecnico__time2 + jogador1__defesa__time2 + jogador2__defesa__time2 + jogador3__defesa__time2 + jogador4__defesa__time2 + jogador5__defesa__time2 + jogador6__defesa__time2 + jogador7__defesa__time2 + jogador8__defesa__time2 + jogador9__defesa__time2 + jogador10__defesa__time2 + jogador11__defesa__time2);
    
    // calcula a diferença de GOLS entre o total de um time em relação ao outro
    var diferencaTime1__ataquexdefesa = (somaTime1__ataque - somaTime2__defesa);
    var diferencaTime2__ataquexdefesa = (somaTime2__ataque - somaTime1__defesa);

    //Isso aqui é temporário, só para aparecer os totais embaixo dos campos;
    // ATENÇÃO: Quanto comentar no HTML tem que comentar aqui tmb;  
    // outTotalDefesa__time1.textContent = somaTime1__defesa.toFixed(1); 
    // outTotalAtaque__time1.textContent = somaTime1__ataque.toFixed(1);
    // outTotalDefesa__time2.textContent = somaTime2__defesa.toFixed(1);
    // outTotalAtaque__time2.textContent = somaTime2__ataque.toFixed(1);

    // // cria a condição de vitória do TIME 1
    if (diferencaTime1__ataquexdefesa >= 3 && diferencaTime1__ataquexdefesa < 5) {
    //     // altera o texto e estilo da cor do elemento outSituacao
    outSituacao.textContent = " ";
    //     // outSituacao.style.color = "blue";
    outGols__Time1.textContent = "1";

    // } else if (diferencaTime1__ataquexdefesa < 5) {
    // outSituacao.textContent = " ";
    // //     // outSituacao.style.color = "green";
    // outGols__Time2.textContent = "0";

    } else if (diferencaTime1__ataquexdefesa >= 5 && diferencaTime1__ataquexdefesa < 8) {
    outSituacao.textContent = " ";
    //   // outSituacao.style.color = "green";
    outGols__Time1.textContent = "2";

    } else if (diferencaTime1__ataquexdefesa >= 8 && diferencaTime1__ataquexdefesa < 11) {
    outSituacao.textContent = " ";
    //   // outSituacao.style.color = "green";
    outGols__Time1.textContent = "3";  

    } else if (diferencaTime1__ataquexdefesa >= 11 && diferencaTime1__ataquexdefesa < 15) {
    outSituacao.textContent = " ";
    //   // outSituacao.style.color = "green";
    outGols__Time1.textContent = "4";

    } else if (diferencaTime1__ataquexdefesa >= 15 && diferencaTime1__ataquexdefesa < 20) {
    outSituacao.textContent = " ";
    //   // outSituacao.style.color = "green";
    outGols__Time1.textContent = "5";

    // // cria a condição de vitória do TIME 2

    } else if (diferencaTime2__ataquexdefesa >= 3 && diferencaTime2__ataquexdefesa < 5) {
    outSituacao.textContent = " ";
    //     // outSituacao.style.color = "green";
    outGols__Time2.textContent = "1";

    // } else if (diferencaTime2__ataquexdefesa < 5) {
    // outSituacao.textContent = " ";
    // //     // outSituacao.style.color = "green";
    // outGols__Time2.textContent = "0";

    } else if (diferencaTime2__ataquexdefesa >= 5 && diferencaTime2__ataquexdefesa < 8) {
    outSituacao.textContent = " ";
    //     // outSituacao.style.color = "green";
     outGols__Time2.textContent = "2";

    } else if (diferencaTime2__ataquexdefesa >= 8 && diferencaTime2__ataquexdefesa < 11) {
    outSituacao.textContent = " ";
    //   // outSituacao.style.color = "green";
    outGols__Time2.textContent = "3";

    } else if (diferencaTime2__ataquexdefesa >= 11 && diferencaTime2__ataquexdefesa < 15) {
    outSituacao.textContent = " ";
    //   // outSituacao.style.color = "green";
    outGols__Time2.textContent = "4";  

    } else if (diferencaTime2__ataquexdefesa >= 15 && diferencaTime2__ataquexdefesa < 20) {
    outSituacao.textContent = " ";
    //   // outSituacao.style.color = "green";
    outGols__Time2.textContent = "5";

    // // cria a condição de EMPATE

    // } else if (diferencaTime1__ataquexdefesa < 5 && diferencaTime2__ataquexdefesa < 5) {
    //   outSituacao.textContent = "Diferença de pontuação entre pesos:" + diferencaTime2__ataquexdefesa.toFixed(1);
    //   // outSituacao.style.color = "green";
    //   outGols__Time2.textContent = "NENHUM time fez gols...";


        //CONDIÇÃO DE EMPATE
    } else if (diferencaTime1__ataquexdefesa <5 && diferencaTime2__ataquexdefesa <5) {
    outSituacao.textContent = "EMPATE";;
    //   // outSituacao.style.color = "green";
    outGols__Time1.textContent = "0";
    outGols__Time2.textContent = "0";

    } else {
    //     // outSituacao.textContent = diferencaTime2.toFixed(1);
    //     // outSituacao.style.color = "red";
    outSituacao.textContent = " ";
    }

}   
// cria uma referência ao elemento btResultado (botão)
var btResultado = document.getElementById("btResultado");
// registra um evento associado ao botão, para carregar uma função
btResultado.addEventListener("click", calcularMedia);