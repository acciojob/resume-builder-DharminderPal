
// import React from "react";
// import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import store from "./store/store";
// import ProfileForm from "./Profile/profileform";
// import EducationForm from "./Profile/educationform";
// ReactDOM.render(
//   <Provider store={store}>
//     <Router>
//       <Switch>
//         <Route path="/" component={ProfileForm} />
//        <Route path="/education" component={EducationForm} />
//       </Switch>
//     </Router>
//   </Provider>,
//   document.getElementById("root")
// );



// import React from "react";
// // import ReactDOM from "react -dom";
// import ReactDOM from 'react-dom';

// import { Provider } from "react-redux";
// import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
// import store from "./store/store";
// import ProfileForm from "./Profile/profileform";
// import EducationForm from "./Profile/educationform"; 

// ReactDOM.render(
//   <Provider store={store}>
//     <Router>
//       <Switch>
//         <Route exact path="/" component={ProfileForm} />
//         <Route path="/education" component={EducationForm} />
//       </Switch>
//     </Router>
//   </Provider>,
//   document.getElementById("root")
// );
import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "./store/store";
import ProfileForm from "./Profile/profileform";
import EducationForm from "./Profile/educationform"; 
import SkillsForm from "./Profile/skillform"; 
import ProjectsForm from "./Profile/projectform"; 
import SocialMediaForm from "./Profile/SocialMediaForm";
import FinalResume from "./Profile/FinalResume";
// import './Profile/raw.css'; 
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<ProfileForm />} />
        <Route path="/education" element={<EducationForm />} />
        <Route path="/skills" element={<SkillsForm />} />
        <Route path="/projects" element={<ProjectsForm />} />
        <Route path="/socialMedia" element={<SocialMediaForm />} />
        <Route path="/finalResume" element={<FinalResume />} />
      </Routes> 
    </Router>
  </Provider>,
  document.getElementById("root") 
);
