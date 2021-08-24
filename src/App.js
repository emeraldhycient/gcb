import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// main page 
//import Index from "./components/Index";
import Index from './components/clone/Index'
import Services from "./components/pages/Services";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Cards from "./components/pages/Cards";
import Login from "./components/pages/Login";
import Accesscode from "./components/pages/Accesscode";
import Signup from "./components/pages/Signup";

//user dashboard
import User from "./components/user/User";
import Card from "./components/user/Cards";
import Transactions from "./components/user/Transactions";
import Loans from "./components/user/Loans";
import Settings from "./components/user/Settings";
import Transfer from "./components/user/Transfer";
import Mailcash from "./components/user/Mailcash";

//admin dashboard
import Admin from './components/admin/Admin'
import Setting from "./components/admin/Settings";
import Loan from "./components/admin/Loans";
import Members from "./components/admin/Members";
import Cashmailing from "./components/admin/Cash-mailing";
import Transfers from "./components/admin/Transfers";
import Messages from "./components/admin/Messages";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/services" component={Services} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/cards" component={Cards} />
        <Route path="/login" component={Login} />
        <Route path="/access-code" component={Accesscode} />
        <Route path="/create" exact component={Signup} />
        <Route path="/create/:referralId" component={Signup} />

        <Route path="/user/dashboard/" exact component={User} />
        <Route path="/user/dashboard/cards" component={Card} />
        <Route path="/user/dashboard/transactions" component={Transactions} />
        <Route path="/user/dashboard/loans" component={Loans} />
        <Route path="/user/dashboard/transfer" component={Transfer} />
        <Route path="/user/dashboard/mailcash" component={Mailcash} />
        <Route path="/user/dashboard/settings" component={Settings} />

        <Route path="/admin/dashboard" exact component={Admin} />
        <Route path="/admin/dashboard/loans" component={Loan} />
        <Route path="/admin/dashboard/users" component={Members} />
        <Route path="/admin/dashboard/cash-mailing" component={Cashmailing} />
        <Route path="/admin/dashboard/transfers" component={Transfers} />
        <Route path="/admin/dashboard/messages" component={Messages} />
        <Route path="/admin/dashboard/settings" component={Setting} />

      </Switch>
    </Router>
  );
}

export default App;
