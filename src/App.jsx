import './App.css'
import { PlayerBoard } from './components/PlayerBoard/playerBoard'
import { BotBoard } from './components/BotBoard/botBoard'
import { ScoreBoard } from './components/ScoreBoard/scoreBoard'

import tabuleiro from './Tabuleiro'
import { useState } from 'react'

function App() {

  return (
    <div className='app'>
      <ScoreBoard />
      
      <div className="boards-container">
        <PlayerBoard 
          tabuleiro={tabuleiro()} 
        />


        <BotBoard tabuleiro={tabuleiro()}/>
      </div>

    </div>
  )
}

export default App
