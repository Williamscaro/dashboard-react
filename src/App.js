import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./components/pages/home/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import UserList from "./components/pages/userList/UserList";
import User from "./components/pages/user/User";
import NewUser from "./components/pages/newUser/NewUser";
import AsigmentList from "./components/pages/asigmentList/AsigmentList";

function App() {
  return (
    <Router className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>

          <Route path="/asigment">
            <AsigmentList />
          </Route>
          <Route path="/asigment/:asigmentId">
            <User />
          </Route>
          <Route path="/newAsigment">
            <NewUser />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
