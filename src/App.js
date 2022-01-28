import './App.css';

import {BrowserRouter, Switch, Route} from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import AuthFireBaseContext from './Components/Context/AuthContext';
import AddTeacher from './Components/AddTeacher/AddTeacher';
import AddStudent from './Components/AddStudent/AddStudent';



function App() {



  return (
    <AuthFireBaseContext>
    <BrowserRouter>
    <div className="App">

    <Switch>


      <Route path="/dashboard">

        <Dashboard>

        </Dashboard>

      </Route>


      {/* <Route exact path="/login">

      <Login>

      </Login>

      </Route> */}
      <Route exact path="/">

      <Login>

      </Login>

      </Route>

      <Route exact path="/add-teacher">

      <AddTeacher></AddTeacher>

      </Route>

      <Route exact path="/add-student">

      <AddStudent></AddStudent>

      </Route>









    </Switch>





    </div>
    </BrowserRouter>
    </AuthFireBaseContext>
  );
}

export default App;
