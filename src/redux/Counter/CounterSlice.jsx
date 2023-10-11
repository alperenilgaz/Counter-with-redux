import {createSlice}  from '@reduxjs/toolkit';


export const CounterSlice = createSlice({
    name:'counter',
    initialState: {    
        value:0
    },
    reducers:{
        increament :(state) => {
            state.value +=1
        },
        decreament: (state) => {
            state.value -=1
        },
        byincreament:(state,action) => {
            state.value += Number(action.payload)
            
        }
    },
})
export const {increament} = CounterSlice.actions
export const {decreament} = CounterSlice.actions
export const {byincreament} = CounterSlice.actions

export default CounterSlice.reducer