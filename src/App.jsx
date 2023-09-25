import './App.css'
import { PlayerBoard } from './components/PlayerBoard/playerBoard'
import { BotBoard } from './components/BotBoard/botBoard'
import tabuleiro from './Tabuleiro'

function App() {

  return (
    <div className='app'>
      <PlayerBoard tabuleiro={tabuleiro()}/>

      <BotBoard tabuleiro={tabuleiro()}/>
    </div>
  )
}

export default App
