import { createSlice } from "@reduxjs/toolkit";
import { addElementToString, removeElementFromString } from "./Helpers";

export const initialState = {
    villagers: [],
    dreamies: '', 
    onisland: ''
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
            
            state.dreamies = addElementToString(action.payload, state.dreamies)
        },
        removeDreamie: (state, action) => {
            var villagerIndex = state.villagers.findIndex(vil => vil.id === action.payload)
            state.villagers[villagerIndex] = {...state.villagers[villagerIndex], isDreamie: false}

            state.dreamies = removeElementFromString(action.payload, state.dreamies)
        },
        setOnIsland: (state, action) => {
            var villagerIndex = state.villagers.findIndex(vil => vil.id === action.payload)
            state.villagers[villagerIndex] = {...state.villagers[villagerIndex], isOnIsland: true, isDreamie: false}

            state.onisland = addElementToString(action.payload, state.onisland)
        },
        removeOnIsland: (state, action) => {
            var villagerIndex = state.villagers.findIndex(vil => vil.id === action.payload)
            state.villagers[villagerIndex] = {...state.villagers[villagerIndex], isOnIsland: false}

            state.onisland = removeElementFromString(action.payload, state.onisland)
        }
    }
})

export const {setVillagers, setDreamie, removeDreamie, setOnIsland, removeOnIsland} = villagerSlice.actions
export default villagerSlice.reducer