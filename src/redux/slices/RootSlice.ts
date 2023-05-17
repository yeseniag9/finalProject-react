import { createSlice } from "@reduxjs/toolkit"

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: "Name",
        nickname: "Nickname",
        date: "Date",
        size: "Size"
    },
    reducers: { 
        chooseName: (state, action) => { state.name = action.payload }, 
        chooseNickname: (state, action) => { state.nickname = action.payload }, 
        chooseDate: (state, action) => { state.date = action.payload }, 
        chooseSize: (state, action) => { state.size = action.payload }
    }
})

export const reducer = rootSlice.reducer; 
export const { chooseName, chooseNickname, chooseDate, chooseSize } = rootSlice.actions