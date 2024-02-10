import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    currentUser : null,
    error:null,
    loading:false,
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        singinStart:(state)=>{
            state.loading = true;
        },
        singinSuccess:(state,action)=>{
            state.currentUser= action.payload;
            state.loading = false;
            state.error = null;
        },
        singinFailure:(state, action)=>{
            action.error = action.payload;
            state.loading = false;
        },
        logout:(state) =>{
            state.currentUser = null;
            state.loading = false;

        }


    }

})

export const {singinFailure, singinStart, singinSuccess, logout} = userSlice.actions
export default userSlice.reducer