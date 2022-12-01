import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import Navbar from "../../Home/Navber/Navber";
import NotFound from "../../NotFound/NotFound";
import AddAdmin from "../AddAdmin/AddAdmin";
import AddAmbulance from "../AddAmbulance/AddAmbulance";
import AddBlood from "../AddBlood/AddBlood";
import AdminNav from "../AdminNav/AdminNav";
import "./Admin.css";

const Admin = () => {
  const { path, url } = useRouteMatch();
  console.log(path);
  return (
    <div className="Admin-Dashboard">
      <Navbar />
      <Router>
        <div className="d-flex">
          <div className="col-md-2 bg p-2">
            <Route path={`${path}`}>
              <AdminNav pathUrl={url}></AdminNav>
            </Route>
          </div>
          <div className="col-md-10">
            <Switch>
              <Route exact path={`${path}`}>
                <AddAdmin></AddAdmin>
              </Route>
              <Route exact path={`${path}/addAdmin`}>
                <AddAdmin></AddAdmin>
              </Route>
              <Route path={`${path}/addAmbulance`}>
                <AddAmbulance></AddAmbulance>
              </Route>
              <Route exact path={`${path}/addBlood`}>
                <AddBlood></AddBlood>
              </Route>
              <Route exact path="*" component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default Admin;
