import { useState } from 'react'
import './App.css'
import { Board } from './components/Board/board'
import tabuleiro from './Tabuleiro'

function App() {

  return (
    <div className='app'>
      <Board tabuleiro={tabuleiro()}/>

      <Board tabuleiro={tabuleiro()}/>
    </div>
  )
}

export default App
