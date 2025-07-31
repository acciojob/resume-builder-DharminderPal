// // import React from 'react';
// import rootReducer from './reducers';
// import { configureStore } from '@reduxjs/toolkit';
// import profileReducer from '../components/Profile';

// export const store = configureStore({
//   reducer: rootReducer,
//   Profile : profileReducer,
// });

// // export default store;



import { configureStore } from '@reduxjs/toolkit';
import profileReducer from '../components/Profile'; 
import educationReducer from '../components/Education'; 
const store = configureStore({
  reducer: {
    profile: profileReducer,
    education: educationReducer
  }
});
export default store;