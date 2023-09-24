function tabuleiro() {

    //declaração de variáveis
    const size = 10;
    const tamanho = new Array(7);
    var campoBatalha = new Array(size);
    var coordenada = [];
    var coordenadaLinha, coordenadaColuna;
    var orientacaoNavio = [];
    var aux;
    var k, i, j;

    /*Configurando o tamanho dos navios que serão posicionados
    no tabuleiro
    - 2 navios com 1 unidade
    - 2 navios com 2 unidades 
    - 3 navios com 3 unidades*/ 
    tamanho[0] = 1;
    tamanho[1] = 1;
    tamanho[2] = 2;
    tamanho[3] = 2;
    tamanho[4] = 3;
    tamanho[5] = 3;
    tamanho[6] = 3;

    /*- Inicializar o tabuleiro de batalha 
    - Tabuleiro 10x10
    - Para cada linha do tabuleiro, está criando uma nova linha 
    (um novo array) com 10 colunas preenchidas com zeros.*/
    for (i = 0; i < campoBatalha.length; i++) {
        campoBatalha[i] = new Array(10).fill(0);
        /*Preenche todos esses elementos com o valor 0*/
    }

    /*- Gera coordenadas para 6 navios diferentes*/
    for (i = 0; i < 6; i++) {
        /*- Loop que continua até que k = 10. 
        - k é uma variável usada para garantir que a coordenada gerada 
        seja correta para posicionar um navio.*/
        while (k !== 10) {
            /*- Gera um número aleatório entre 0 e 99 (100 não incluso) e 
            armazena na variável aux. 
            - Essa é a coordenada*/
            aux = Math.floor(Math.random() * 100);

            k = 0;

            /*- Verifica se a coordenada gerada aux ou qualquer coordenada 
            já foi usada para posicionar um navio anterior.*/
            for (j = 0; j <= i; j++) {
                //Cria um espaço seguro entre os barcos
                if (aux === coordenada[j] || aux + 20 === coordenada[j] || aux + 10 === coordenada[j] || aux - 20 === coordenada[j] || aux - 10 === coordenada[j] || aux + 1 === coordenada[j] || aux + 2 === coordenada[j] || aux - 1 === coordenada[j] || aux - 2 === coordenada[j]) {
                    k = 1;
                }
                /*- Se após verificar todas as coordenadas anteriores, 
                k ainda for igual a 0, isso significa que a coordenada 
                é segura. 
                - Então, k é definido como 10 para sair do loop */
                else if (k === 0) {
                    k = 10;
                }
            }

            //Distância importa
            if (k === 10) {
                /*- Garante que a coordenada está a pelo menos duas posições de 
                distância das bordas do tabuleiro em todas as direções 
                (acima, abaixo, esquerda e direita).*/
                /*- Verifica se a coordenada está pelo menos duas linhas de 
                distância da borda inferior do tabuleiro, se aux + 20 não 
                ultrapassa o limite superior (99) do tabuleiro.*/
                if (((aux + 2) % 10 !== 0) && ((aux + 1) % 10 !== 0) && ((aux - 1) % 10 !== 0) && ((aux - 2) % 10 !== 0) && aux + 20 <= 99) {
                    k = 10;
                    /*- Se todas essas condições de verificação forem atendidas, 
                    k é mantido como 10, indicando que a coordenada é segura */
                }
                else {
                    k = 0;
                    /*- Se a coordenada não atender a esses critérios de segurança, 
                    k é definido como 0, o loop while continuará a gerar novas coordenadas 
                    aleatórias até encontrar uma que seja segura */
                }
            }
        }
        /*- Armazena a coordenada segura na matriz coordenada[] na posição i, 
        representando o local onde um navio será posicionado. */
        coordenada[i] = aux;
        k = 0;
    }

    /*- Loop vai de 0 a 5 (6 iterações), que corresponde ao número de navios 
    que o jogador deseja posicionar no tabuleiro.*/
    for (i = 0; i < 6; i++) {
        /*- Gerar um número aleatório entre 0 e 99 (números inteiros)  */
        aux = Math.floor(Math.random() * 100);
        /*- O número gerado aleatoriamente em aux é usado para determinar
        a orientação do navio.*/
        orientacaoNavio[i] = aux % 2;
        /*- O operador % é usado para calcular o resto da divisão de aux por 2. 
        OrientacaoNavio[i] receberá 0 se o número gerado for par e 1 se o número 
        gerado for ímpar.*/
    }

    //Posiciona os navios
    k = 0;
    /*- Loop que vai de 0 a 5, que percorre cada um dos 6 navios que 
    devem ser posicionados no tabuleiro */
    for (i = 0; i < 6; i++) {
        /*- Calcula a coordenada da linha onde o navio será posicionado 
        dividindo a coordenada atual (coordenada[i]) por 10 e arredondando 
        para baixo com Math.floor(). 
        - Isso é feito porque dividir a coordenada por 10, se tem a parte 
        inteira, que representa a linha no tabuleiro. */
        coordenadaLinha = Math.floor(coordenada[i] / 10);
        /*- Calcula a coordenada da coluna onde o navio será posicionado 
        obtendo o resto da divisão de coordenada[i] por 10. 
        - Isso retorna na parte decimal da coordenada, que representa a 
        coluna no tabuleiro. */
        coordenadaColuna = coordenada[i] % 10;

        /*- Percorre o tamanho do navio atual */
        for (j = 0; j < tamanho[i]; j++) {
            //Verifica se a orientação do navio é horizontal 
            if (orientacaoNavio[i] === 1) {
                /*- Se o navio for horizontal, isso define o valor 1 nas 
                células do tabuleiro de batalha. O navio se estende ao longo 
                das colunas, começando na coordenada coordenadaLinha e 
                coordenadaColuna, e avançando pelas colunas usando a variável j. */
                campoBatalha[coordenadaLinha + j][coordenadaColuna] = 1;
            }
            // Se a orientação do navio for vertical 
            else if (orientacaoNavio[i] === 0) {
                /*- Define o valor 1 nas células correspondentes do tabuleiro de batalha. 
                - O navio se extenderá da mesma forma que no hotizontal*/
                campoBatalha[coordenadaLinha][coordenadaColuna + j] = 1;
            }
        }
    }
    /*- Depois de posicionar todos os navios no tabuleiro de acordo com as coordenadas, orientações e tamanhos, 
    a função retorna o tabuleiro de batalha completo, com os navios posicionados. */
    return campoBatalha;
}

export default tabuleiro;