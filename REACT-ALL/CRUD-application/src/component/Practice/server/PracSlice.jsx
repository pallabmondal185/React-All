import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../axiosMethods/axiosInstanceEg";

const initialState={
    data:[],
    loading:false,
    error:''
}

export const getData=createAsyncThunk('CRUD/getData',async ()=>{
    //  const res=await fetch('http://127.0.0.1:3004/practice');
    //  const result=await res.json();
    //  return result;

    const res=await axiosInstance.get();
    return res.data;
})

export const deleteData=async(id)=>{
    await axiosInstance.delete('/'+id);
}

export const postData=async(formData)=>{
    await axiosInstance.post('/',formData);
  }


const pracSlice=createSlice({
    name:'practiceCRUD',
    initialState,
    reducers:{},
    extraReducers:{
        [getData.pending]:(state)=>{
            state.loading=true;
        },
        [getData.fulfilled]:(state,{payload})=>{
            state.data=payload;
            state.loading=false
        },
        [getData.rejected]:(state)=>{
            state.error='404 Data not found';
            state.loading=false;
        },

    }
})

export const pracReducer=pracSlice.reducer;