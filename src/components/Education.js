import { createSlice } from "@reduxjs/toolkit";


const initialState = {

name: "",
completionYear: "", 
college: "",
percentage: "",
// add_education: "add_education",   /******this is the button *********/
// delete: "delete"  /******this is the button *********/
}


const educationslice = createSlice({
name:"education",
initialState,
reducers:{
setName:(state ,action)=>{
    state.name = action.payload;
},
setCompletionYear:(state ,action)=>{
    state.completionYear = action.payload;
},
setCollege:(state ,action)=>{
    state.college = action.payload;
},
setPercentage:(state ,action)=>{
    state.percentage = action.payload;
}
}
});

export const { setName, setCompletionYear, setCollege, setPercentage } = educationslice.actions;
export default educationslice.reducer;