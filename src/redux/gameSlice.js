import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  playerScore: 0,
  botScore: 0,
  isPlayerTurn: true,
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
    }
  }
})

export const { addPlayerScore, addBotScore, changeTurn } = gameSlice.actions;

export default gameSlice.reducer;