import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import ProtectedUsersRoutes from "./components/Auth/ProtectedUsersRoutes"
import ProtectedAdminRoutes from "./components/Auth/ProtectedAdminRoutes"

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
import Tracking from "./components/pages/Tracking";

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
import CreateUser from "./components/admin/CreateUser";

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
        <Route path="/tracking" component={Tracking} />


        <ProtectedUsersRoutes path="/user/dashboard/" exact component={User} />
        <ProtectedUsersRoutes path="/user/dashboard/cards" component={Card} />
        <ProtectedUsersRoutes path="/user/dashboard/transactions" component={Transactions} />
        <ProtectedUsersRoutes path="/user/dashboard/loans" component={Loans} />
        <ProtectedUsersRoutes path="/user/dashboard/transfer/:transfertype" component={Transfer} />
        <ProtectedUsersRoutes path="/user/dashboard/mailcash" component={Mailcash} />
        <ProtectedUsersRoutes path="/user/dashboard/settings" component={Settings} />

        <ProtectedAdminRoutes path="/admin/dashboard" exact component={Admin} />
        <ProtectedAdminRoutes path="/admin/dashboard/loans" component={Loan} />
        <ProtectedAdminRoutes path="/admin/dashboard/users" exact component={Members} />
        <ProtectedAdminRoutes path="/admin/dashboard/users/:userid" exact component={Members} />
        <ProtectedAdminRoutes path="/admin/dashboard/create-account" component={CreateUser} />
        <ProtectedAdminRoutes path="/admin/dashboard/cash-mailing" exact component={Cashmailing} />
        <ProtectedAdminRoutes path="/admin/dashboard/cash-mailing/:tracking" component={Cashmailing} />
        <ProtectedAdminRoutes path="/admin/dashboard/transfers" component={Transfers} />
        <ProtectedAdminRoutes path="/admin/dashboard/messages" component={Messages} />
        <ProtectedAdminRoutes path="/admin/dashboard/settings" component={Setting} />

      </Switch>
    </Router>
  );
}

export default App;
