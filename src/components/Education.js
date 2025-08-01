// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   educationList: [],
//   current: {
//     name: "",
//     completionYear: "", 
//     college: "",
//     percentage: "",
//   },
// };

// const educationslice = createSlice({
//   name: "education",
//   initialState,
//   reducers: {
//     setName: (state, action) => {
//       state.current.name = action.payload;
//     },
//     setCompletionYear: (state, action) => {
//       state.current.completionYear = action.payload;
//     },
//     setCollege: (state, action) => {
//       state.current.college = action.payload;
//     },
//     setPercentage: (state, action) => {
//       state.current.percentage = action.payload;
//     },
//     addEducation: (state) => {
//       state.educationList.push({ ...state.current });
//       state.current = { name: "", completionYear: "", college: "", percentage: "" }; // Reset form
//     },
//     deleteLastEducation: (state) => {
//       state.educationList.pop(); // or filter specific one if needed
//     },
//   },
// });

// export const { setName, setCompletionYear, setCollege, setPercentage, addEducation, deleteLastEducation } = educationslice.actions;
// export default educationslice.reducer;
// educationSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  current: {
    name: '',
    completionYear: '',
    college: '',
    percentage: ''
  },
  entries: []
};

const educationSlice = createSlice({
  name: 'education',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.current.name = action.payload;
    },
    setCompletionYear: (state, action) => {
      state.current.completionYear = action.payload;
    },
    setCollege: (state, action) => {
      state.current.college = action.payload;
    },
    setPercentage: (state, action) => {
      state.current.percentage = action.payload;
    },
    addEducation: (state) => {
      state.entries.push({...state.current});
      state.current = initialState.current; // Reset form
    },
    deleteEducation: (state, action) => {
      state.entries.splice(action.payload, 1);
    }
  }
});

// Make sure ALL actions are exported
export const { 
  setName,
  setCompletionYear,
  setCollege,
  setPercentage,
  addEducation,
  deleteEducation
} = educationSlice.actions;

export default educationSlice.reducer;