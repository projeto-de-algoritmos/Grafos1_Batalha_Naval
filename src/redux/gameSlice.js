import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  playerScore: 0,
  botScore: 0
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
  }
})

export const { addPlayerScore, addBotScore } = gameSlice.actions;

export default gameSlice.reducer;