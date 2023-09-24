import React, { useState, useEffect } from 'react'

import tabuleiro from '../Tabuleiro';


// importar o css aqui
/*Importar ícones aqui: um ícone de onda, um ícone de navio, um ícone de interrogação e um ícone de setinha */

export default function PaginaInicial() {

    /*- Declara um estado chamado playerState usando o hook useState 
    - Inicialmente, playerState é um array vazio*/
    const [playerState, setPlayerState] = useState([]);

    /*- Um novo estado chamado newPlayerState é declarado
    inicializado com o valor retornado por tabuleiro() */
    const [newPlayerState, setNewPlayerState] = useState(tabuleiro());

    /*- Cria um estado chamado playerScore com um valor inicial 
    de 0 e a função setPlayerScore para atualizar esse valor */
    const [playerScore, setPlayerScore] = useState(0);

    /*- Cria um estado chamado enemyState com um array vazio inicial 
    e uma função setEnemyState para atualizar esse estado */
    const [enemyState, setEnemyState] = useState([]);

    /*- Cria um estado chamado newEnemyState inicializado com o resultado 
    da função tabuleiro(). 
    - Isso está criando um novo estado para representar o estado do 
    inimigo no jogo. */
    const [newEnemyState, setNewEnemyState] = useState(tabuleiro());

    /*- Cria um estado chamado enemyScore com um valor inicial de 0 e 
    a função setEnemyScore para atualizar o valor. */
    const [enemyScore, setEnemyScore] = useState(0);

    /*- Cria um estado chamado turn com o valor inicial "player", 
    o que indica que é a vez do jogador no jogo.*/
    const [turn, setTurn] = useState("player");

    /*- Cria um estado chamado trigger com um valor inicial de 0. 
    - Esse estado é usado para acionar ações ou renderizações 
    na interface do usuário quando o valor de trigger muda. */
    const [trigger, setTrigger] = useState(0);

    /*- Um useEffect que será acionado sempre que o estado 
    trigger for modificado. */
    useEffect(() => {
        /*- Se o estado turn for igual a "enemy", isto significa 
        que é a vez do inimigo realizar alguma ação no jogo. */
        if (turn === "enemy") {
            /**- Cria um temporizador usando setTimeout. Ele chama a 
             * função temporizador após um atraso de 900 milissegundos (ou 0,9 segundos). Isso provavelmente está simulando uma pausa antes de o inimigo tomar uma ação no jogo.  */
            var myTimeout = setTimeout(temporizador, 900);
        }
        /*- Verifica se o estado playerState é diferente do estado 
        newPlayerState. Se forem diferentes, atualiza playerState para 
        que ele seja igual a newPlayerState. 
        - Usado para atualizar o estado do jogador quando alguma mudança 
        ocorre em newPlayerState. */
        if (playerState !== newPlayerState)
            setPlayerState(newPlayerState);
        /*- Da mesma forma que o item anterior, só que para enemy */
        if (enemyState !== newEnemyState)
            setEnemyState(newEnemyState);
        // Função de limpeza.  
        return () => {

        }
    }, [trigger])


    /*- Chama outra função chamada tentativa(). */
    function temporizador() {
        tentativa()
    }

    const [tentados,setTentativa] = useState([]);

    function tentativa() {

        /*- Geram números aleatórios inteiros entre 0 e 9 para 
        as variáveis y e x. 
        - Representam coordenadas em um tabuleiro 10x10. */
        var y = Math.floor(Math.random() * 10);
        var x = Math.floor(Math.random() * 10);

        // Verifica se x ou y é igual a 10
        if (x === 10 || y === 10) {
            temporizador();
            return;
        }

        /*- Função verifica se a combinação de y e x já foi tentada antes. 
        - Ela faz isso convertendo y e x em uma string e, em seguida, verifica 
        se essa string existe no array tentados. 
        - Se essa combinação já foi tentada, a função imprime uma mensagem no 
        console e chama a função temporizador. Caso contrário, o código continua. */
        if (tentados.indexOf(y + '' + x) !== -1) {
            console.log({ ah: "Já foi tentado", y, x })

            temporizador();
            return;
        }

        /*- Se a combinação y + '' + x não foi tentada anteriormente, ela é 
        adicionada ao array tentados usando o setTentativa. 
        - Rastreando as tentativas do jogador. */
        console.log(tentados.indexOf(y + '' + x))
        setTentativa([...tentados, y + '' + x])

        /*- Chama os valores de y, x e a string "player". 
       - Verifica se a tentativa do jogador acertou algo. */
        console.log({ tentados })
        verifica(y, x, "player")

        // Alternando o turno do jogador para o próximo jogador.
        setTurn("player");

        //Retorna um objeto com as coordenadas x e y que o jogador tentou.
        return { x, y };
    }

    function verifica(y_index, x_index, dono) {
        /*- Mantem uma cópia do estado atual do tabuleiro do jogador ou do inimigo*/
        var auxTabuleiro;

        /*- Verifica o valor da variável dono, que parece indicar se o jogador 
        atual é o jogador ou o inimigo.  */
        if (dono === "player") {
            // Inicializada com o estado atual do tabuleiro correspondente
            auxTabuleiro = newPlayerState;

            // Verifica o valor da célula no tabuleiro nas coordenadas y_index e x_index.
            switch (auxTabuleiro[y_index][x_index]) {
                /*- Se a célula estiver vazia (valor 0), ela é marcada como 
                atingida (-1) para indicar que a jogada foi realizada nessa 
                posição. */ 
                case 0:
                    auxTabuleiro[y_index][x_index] = -1;
                    break;

                /*- Se a célula contiver um elemento (valor 1), ela é marcada 
                como atingida (valor 2) e a pontuação do jogador ou inimigo 
                (dependendo de dono) é incrementada em 1. */
                case 1: auxTabuleiro[y_index][x_index] = 2;
                    setPlayerScore(playerScore + 1);
                    break;

                default:
                    break;
            }

            //Reflete as mudanças feitas durante a verificação no tabuleiro.
            setNewPlayerState(auxTabuleiro);
        } else {
            // Alterna o turno entre jogador e inimigo,
            setTurn("enemy")

            auxTabuleiro = newEnemyState;

            switch (auxTabuleiro[y_index][x_index]) {
                case 0:
                    auxTabuleiro[y_index][x_index] = -1;
                    break;
                case 1: auxTabuleiro[y_index][x_index] = 2;
                    setEnemyScore(enemyScore + 1);
                    break;
                default:
                    break;
            }
            setNewEnemyState(auxTabuleiro);
        }

        setTrigger(trigger + 2)
    }


    function imagem({ valor, dono }) {

        if (dono === "player") {
            if (valor == 0)
                return <img className='btnImage' src={ICONEDEONDA} />
            if (valor == 1)
                return <img className='btnImage' src={ICONEDENAVIO} />
        }
        if (valor == -1)
            return <img className='btnImage' src={ICONEDEONDA} />
        if (valor == 2)
            return <img className='btnImage' src={ICONEDENAVIO} />

        return <img className='btnImage' src={ICONEDEINTERROGACAO} />
    }


      function apresentarTabuleiro({ tabuleiro, dono }) {
          // Retorna o resultado da expressão
          return (

              // map está sendo usado para percorrer cada linha (line) e seu índice (y_index) no tabuleiro
              tabuleiro.map((line, y_index) => (
                  <div className='line' key={y_index}>

                      {line.map((item, x_index) => {
                          return <button
                              key={y_index + "" + x_index}
                              className={"ship-" + item}
                              disabled={dono == turn}
                              onClick={() => verifica(y_index, x_index, dono)}>

                              <imagem owner={dono} value={item} />
                          </button>;
                      })}
                  </div>
              ))
          )
      }


    if (enemyScore >= 15) {
        return <h1 className='endTitle'> Parabéns! Você Ganhou!</h1>
    }

    if (playerScore >= 15) {
        return <h1 className='endTitle'> Que pensa! Você Perdeu!</h1>
    }

    return (
        <>
            <div className="leaderboard">
                <h2 > Pontuação </h2>

                <h1 className='score'>
                    {enemyScore} - {playerScore}
                </h1>
            </div>

            <div className='boards'>
                <div className='singleBoard'>
                    <img className={turn === "player" ? "arrowImage" : "hiddenArrowImage"} src={arrowIcon} />
                    <h1 className='playerHeader'>Jogador</h1>

                    <apresentarTabuleiro board={playerState} owner="player" />

                </div>
                <div className='singleBoard'>
                    <img className={turn === "enemy" ? "arrowImage" : "hiddenArrowImage"} src={arrowIcon} />
                    <h1 className='playerHeader' >Inimigo</h1>

                    <apresentarTabuleiro board={enemyState} owner="enemy" />

                </div>
            </div>
        </>
    )
}
