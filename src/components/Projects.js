import { createSlice } from "@reduxjs/toolkit";
// import '../Profile/raw.css';


const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    projects: [],
  },
  reducers: {
    addProject: (state, action) => {
      state.projects.push(action.payload);
    },
    deleteProject: (state, action) => {
      state.projects.splice(action.payload, 1);
    },
  },
});

export const { addProject, deleteProject } = projectsSlice.actions;
export default projectsSlice.reducer;