import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initState={
    name:'pallab',
    age:12,
    city:'kolkata',
    data:[]
}

export const getData=createAsyncThunk('getData',async()=>{
    const res=await fetch('https://fakestoreapi.com/products');
    const result=await res.json();
    return result;
})

const userSlice=createSlice({
    name:'user',
    initialState:initState,
    reducers:{
        changeName(state){
            state.name='niladri'
        },
        changeAge(state,{payload}){
            state.age=payload;
        }
    },
    extraReducers:{
        ['CHANGE-CITY']:(state,{payload})=>{
            state.city=payload
        },
        [getData.fulfilled]:(state,{payload})=>{
            state.data=payload
        }
    }
})

export const {changeName,changeAge}=userSlice.actions;
export const userReducer=userSlice.reducer;