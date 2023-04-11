import { createSlice } from '@reduxjs/toolkit'

export const gastosSlice = createSlice({
  name: 'gastos',
  initialState: [],
  reducers: {
    agregarGasto: (state, action) => {
      state.push(action.payload)
    }
  }
})

export const { agregarGasto } = gastosSlice.actions

export default gastosSlice.reducer
