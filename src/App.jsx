import { useSelector } from 'react-redux'

import { PlayerBoard } from './components/PlayerBoard/playerBoard'
import { BotBoard } from './components/BotBoard/botBoard'
import { ScoreBoard } from './components/ScoreBoard/scoreBoard'
import { winnerModal } from './components/WinnerModal/winnerModal'

import tabuleiro from './Tabuleiro'
import './App.css'
import { useEffect } from 'react'

function App() {

  const isGameOver = useSelector((state) => state.game.isGameOver)
  
  if(isGameOver === 1){
    winnerModal(true)
  } else if(isGameOver === -1){
    winnerModal(false)
  }

  return (
    <div className='app'>
      <ScoreBoard />
      
      <div className="boards-container">
        <PlayerBoard tabuleiro={tabuleiro()}/>

        <BotBoard tabuleiro={tabuleiro()}/>
      </div>

    </div>
  )
}

export default App
