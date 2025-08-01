import { createSlice} from "@reduxjs/toolkit";
const socialSlice = createSlice({
  name: "social",
  initialState: {
    socialLinks: [],
  },
  reducers: {
    addSocial: (state, action) => {
      state.socialLinks.push(action.payload);
    },
    deleteSocial: (state, action) => {
      state.socialLinks.splice(action.payload, 1);
    },
  },
});

export const { addSocial, deleteSocial } = socialSlice.actions;
export default socialSlice.reducer;