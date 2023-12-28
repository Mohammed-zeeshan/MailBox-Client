import { Redirect, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
import Verify from "./components/Verify";
import Home from "./components/Home";
import { useSelector } from "react-redux";
import Compose from "./components/Compose";
import { useState } from "react";
import Inbox from "./components/Inbox";
import Readmessage from "./components/Readmessage";
import SendMail from "./components/SendMail";


function App() {
  const auth = useSelector(state => state.isAuthenticated);
  const [email, setEmail] = useState('');
  const emailHandler = (mail) => {
    setEmail(mail)
  }
  return (
    <Switch>
      <Route path='/' exact>
        <Redirect to='/Signup' />
      </Route>
      <Route path='/Signup'>
        <Signup email={emailHandler} />
      </Route>
      <Route path="/Verify">
        <Verify />
      </Route>
      {auth && <Route path='/Home'>
        <Home mail={email} />
      </Route>}
      {auth && <Route path='/Compose'>
        <Compose mail={email} />
      </Route>}
      {auth && <Route path='/Inbox'>
        <Inbox mail={email} />
      </Route>}
      {auth && <Route path='/SendMail'>
        <SendMail mail={email} />
      </Route>}
      <Route path='/Read/:id'>
        <Readmessage />
      </Route>
      <Route path='/ForgotPassword'>
        <ForgotPassword />
      </Route>
      <Route path='*' >
        <Redirect to='/' />
      </Route>
    </Switch>
    // <Inbox />
  );
}

export default App;
