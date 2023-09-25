import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addBotScore, changeTurn } from "../../redux/gameSlice"

import icone_onda from "../../assets/ondas.png"
import icone_navio from "../../assets/navio.png"
import "./bot-board.css"
import { botChutaItem } from "../../BotManager"

export function BotBoard({ tabuleiro }) {

  const chute = botChutaItem(tabuleiro);

  const isPlayerTurn = useSelector((state) => state.game.isPlayerTurn);
  const dispatch = useDispatch();


  function verificaItem(x_index, y_index) {
    switch (tabuleiro[y_index][x_index]) {
      case 0:
        tabuleiro[y_index][x_index] = -1
       
        break
      case 1:
        tabuleiro[y_index][x_index] = 2
        dispatch(addBotScore())
        
        break
      default:
        break
    }
  }

  useEffect(() => {
    if (!isPlayerTurn) {
      setTimeout(() => {
        verificaItem(chute[0], chute[1]); 
        dispatch(changeTurn())
      }, 3000)
    }
  }, [isPlayerTurn])

  function focusInput(x_index, y_index){
    if(!isPlayerTurn && y_index == chute[1] && x_index == chute[0]) return true;

    return false;
  }

  return (
      // map está sendo usado para percorrer cada linha (line) e seu índice (y_index) no tabuleiro
      <div className={`bot-board ${isPlayerTurn && "bot-board--small"}`}>
        <h1 className={`bot-board__title ${isPlayerTurn ? "bot-board__title--thinner": ""}`}>Oponente</h1>
        { tabuleiro.map((line, y_index) => (

          <div className='bot-board__line' key={y_index}>

              {line.map((item, x_index) => {
                return(
                  <input
                    type="image"
                    src={item == 1 || item == 2 ? icone_navio : icone_onda}
                    disabled
                    key={y_index + "" + x_index}
                    alt="item"
                    // o segundo class depende do valor do item
                    // 0 ou 1 = ainda não foi visitado
                    // 2 = visitado e é um navio
                    // -1 = visitado e não é um navio
                    className={`bot-board__item bot-board__item--${item}`}

                    id={focusInput(x_index, y_index) ? "focus-input" : ""}
                  />
                ) 
              })}
          </div>
        ))}
      </div>
  )
}