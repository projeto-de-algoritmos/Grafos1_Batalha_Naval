import React from "react"
import icone_onda from "../../assets/ondas.png"
import "./board.css"

export function Board({ tabuleiro, dono }) {
  return (
      // map está sendo usado para percorrer cada linha (line) e seu índice (y_index) no tabuleiro
      <div className="board">

      { tabuleiro.map((line, y_index) => (

          <div className='board__line' key={y_index}>

              {line.map((item, x_index) => {
                return(
                  <input
                    type="image"
                    src={icone_onda}
                    key={y_index + "" + x_index}
                    className="board__item"
                    />
                    ) 
                    
                  })}
          </div>
      ))}
      </div>
  )
}