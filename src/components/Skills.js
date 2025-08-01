// import { createSlice } from "@reduxjs/toolkit";
// const initialState = {
// Skills : "", 
// // #add_skill, #delete_skill /*this is button */ 
// 	// Add and remove skills. /*this is the button */
// }
// const skillslice = createSlice({
//     name: "skills",
//     initialState: {
//         Skills: [],
//     },
//     reducers: {
//         addSkill: (state, action) => {
//             state.Skills.push(action.payload);
//         },
//         deleteSkill : (state, action) => {
//             state.Skills = state.Skills.filter(skill => skill !== action.payload);
//         },
//     },
// });

// export const { addSkill, deleteSkill } = skillslice.actions;
// export default skillslice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const skillSlice = createSlice({
    name: "skills",
    initialState: {
        skills: [],  // Changed from Skills to skills (convention is lowercase)
    },
    reducers: {
        addSkill: (state, action) => {
            // Only add if not empty and not already exists
            if (action.payload.trim() && !state.skills.includes(action.payload)) {
                state.skills.push(action.payload);
            }
        },
        deleteSkill: (state, action) => {
            // Filter by index (more reliable than by value)
            state.skills = state.skills.filter((_, index) => index !== action.payload);
        },
    },
});

export const { addSkill, deleteSkill } = skillSlice.actions;
export default skillSlice.reducer;