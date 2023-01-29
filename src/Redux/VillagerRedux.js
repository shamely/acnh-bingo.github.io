import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    villagers: []
}

export const villagerSlice = createSlice({
    name: 'villagerState',
    initialState,
    reducers: {
        setVillagers: (state, action) => {
            state.villagers = action.payload
        },
        setDreamie: (state, action) => {
            var villagerIndex = state.villagers.findIndex(vil => vil.id === action.payload)
            state.villagers[villagerIndex] = {...state.villagers[villagerIndex], isOnIsland: false, isDreamie: true}
        },
        removeDreamie: (state, action) => {
            var villagerIndex = state.villagers.findIndex(vil => vil.id === action.payload)
            state.villagers[villagerIndex] = {...state.villagers[villagerIndex], isDreamie: false}
        },
        setOnIsland: (state, action) => {
            var villagerIndex = state.villagers.findIndex(vil => vil.id === action.payload)
            state.villagers[villagerIndex] = {...state.villagers[villagerIndex], isOnIsland: true, isDreamie: false}
        },
        removeOnIsland: (state, action) => {
            var villagerIndex = state.villagers.findIndex(vil => vil.id === action.payload)
            state.villagers[villagerIndex] = {...state.villagers[villagerIndex], isOnIsland: false}
        }
    }
})

export const {setVillagers, setDreamie, removeDreamie, setOnIsland, removeOnIsland} = villagerSlice.actions
export default villagerSlice.reducer