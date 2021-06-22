import React,{Fragment} from "react";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import ForgotPassWord from "./components/auth/ForgotPassword";
import Checkout from "./components/auth/Checkout";
const App=()=> {
  return (
    <Fragment>
      <div >
        <Router>

         
          <Switch>
            <Route exact path="/" component={Layout}/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
            <Route path="/forgotpassword" component={ForgotPassWord}/>
            <Route path="/checkout" component={Checkout}/>
          </Switch>
        </Router>
      </div>
    </Fragment>
  );
}

export default App;
