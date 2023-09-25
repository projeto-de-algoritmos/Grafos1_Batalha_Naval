import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addBotScore, changeTurn } from "../../redux/gameSlice"

import icone_onda from "../../assets/ondas.png"
import icone_navio from "../../assets/navio.png"
import "./bot-board.css"

export function BotBoard({ tabuleiro }) {

  const isPlayerTurn = useSelector((state) => state.game.isPlayerTurn);
  const [toggleRender, setToggleRender] = useState(false);

  const dispatch = useDispatch();

  function verificaItem(x_index, y_index) {
    switch (tabuleiro[y_index][x_index]) {
      case 0:
        tabuleiro[y_index][x_index] = -1
        setToggleRender(!toggleRender)
        break
      case 1:
        tabuleiro[y_index][x_index] = 2
        dispatch(addBotScore())
        setToggleRender(!toggleRender)
        break
      default:
        break
    }
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

                    key={y_index + "" + x_index}
                    alt="item"
                    // o segundo class depende do valor do item
                    // 0 ou 1 = ainda não foi visitado
                    // 2 = visitado e é um navio
                    // -1 = visitado e não é um navio
                    className={`bot-board__item bot-board__item--${item}`}
                    
                    onClick={() => 
                      {
                        verificaItem(x_index, y_index)
                        dispatch(changeTurn())
                      }}
                    />
                    ) 
                  })}
          </div>
        ))}
      </div>
  )
}