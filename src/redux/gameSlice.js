import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  playerScore: 0,
  botScore: 0,
  isPlayerTurn: true,
  isGameOver: 0
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    addPlayerScore: (state) => {
      state.playerScore += 1
    },
    addBotScore: (state) => {
      state.botScore += 1
    },
    changeTurn: (state) => {
      state.isPlayerTurn = !state.isPlayerTurn
    },
    endGame: (state) => {
      state.playerScore == 12 ? state.isGameOver = 1 : state.isGameOver = -1
    }
  }
})

export const { addPlayerScore, addBotScore, changeTurn, endGame } = gameSlice.actions;

export default gameSlice.reducer;