import axios from "axios";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Admin from "./Components/Admins/Admin/Admin";
import Dashboad from "./Components/Dashboad/Dashboad";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login";
import Signup from "./Components/Login/Signup";
import NotFound from "./Components/NotFound/NotFound";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import AmbulanceService from "./Components/Services/AmbulanceService";
import BloodBankService from "./Components/Services/BloodBankService";
import {
  checkUserLoginAction,
  loginUserData,
  loginUserFailed,
} from "./redux/Authentication/actions/Action";
import { baseUrl } from "./utils/baseUrl/baseurl";

function App({ loginInfo, loadUserSuccess, loadUserFailed }) {
  useEffect(() => {
    return (async () => {
      const { isLoggedIn, headers } = loginInfo;

      if (isLoggedIn) {
        const data = await axios.get(
          `${baseUrl}/user/get/own/profile`,
          headers
        );
        if (data.status == 202) {
          loadUserSuccess(data.data);
        } else {
          loadUserFailed();
        }
      }
    })();
  }, []);
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboad />
          </PrivateRoute>
          <Route exact path="/signup">
            <Signup></Signup>
          </Route>
          <PrivateRoute exact path="/bloodBank">
            <BloodBankService></BloodBankService>
          </PrivateRoute>
          <PrivateRoute exact path="/ambulanceService">
            <AmbulanceService></AmbulanceService>
          </PrivateRoute>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loginInfo: state.login,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkLogin: () => dispatch(checkUserLoginAction()),
    loadUserSuccess: (data) => dispatch(loginUserData(data)),
    loadUserFailed: () => dispatch(loginUserFailed()),
  };
};

// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);
