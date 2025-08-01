import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: "",
  lname:"",
  email: "",
  phone: "",
  address: "",
  imageUrl: "",

};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },

    setLname: (state, action) => {
  state.lname = action.payload;
}
,
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    updateProfileImage: (state, action) => {
      state.imageUrl = action.payload;
    },
    resetProfile: () => initialState,
    updateProfile: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const {
  setName,
  setEmail,
  setPhone,
  setAddress,
  updateProfileImage,
  resetProfile,
  updateProfile
} = profileSlice.actions;

export default profileSlice.reducer;
  