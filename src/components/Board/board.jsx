import React, { useEffect, useState } from "react"
import icone_onda from "../../assets/ondas.png"
import icone_navio from "../../assets/navio.png"
import "./board.css"

export function Board({ tabuleiro, dono }) {

  const [toggleRender, setToggleRender] = useState(false);

  function verificaItem(x_index, y_index) {
    switch (tabuleiro[y_index][x_index]) {
      case 0:
        tabuleiro[y_index][x_index] = -1
        setToggleRender(!toggleRender)
        break
      case 1:
        tabuleiro[y_index][x_index] = 2
        setToggleRender(!toggleRender)
        break
      default:
        console.log(tabuleiro[y_index][x_index])
        break
    }
  }

  return (
      // map está sendo usado para percorrer cada linha (line) e seu índice (y_index) no tabuleiro
      <div className="board">

      { tabuleiro.map((line, y_index) => (

          <div className='board__line' key={y_index}>

              {line.map((item, x_index) => {
                return(
                  <input
                    type="image"
                    src={item == 2? icone_navio : icone_onda}

                    key={y_index + "" + x_index}
                    alt="item"
                    // o segundo class depende do valor do item
                    // 0 ou 1 = ainda não foi visitado
                    // 2 = visitado e é um navio
                    // -1 = visitado e não é um navio
                    className={`board__item board__item--${item}`}
                    
                    onClick={() => verificaItem(x_index, y_index)}
                    />
                    ) 
                  })}
          </div>
      ))}
      </div>
  )
}