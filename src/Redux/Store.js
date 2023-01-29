import { configureStore } from "@reduxjs/toolkit"
import villagerReducer from './VillagerRedux'

export const store = configureStore({
    reducer: {
        villagerState: villagerReducer
    }
})