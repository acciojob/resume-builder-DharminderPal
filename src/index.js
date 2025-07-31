// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./components/App";
// import {store} from "./store/store";
// import { Provider } from "react-redux";


// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById("root")
// );


import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import store from "./store/store";
import ProfileForm from "./Profile/profileform";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" component={ProfileForm} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
