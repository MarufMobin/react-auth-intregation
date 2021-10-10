import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router ,  Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
// import SignOut from './components/SignOut/SignOut';


function App() {
  return (
    <div className="App">
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
                <Home></Home>
            </Route>
            <Route exact path="/home">
               <Home></Home>
            </Route>
            <Route exact path="/login">
               <Login></Login>
            </Route>
            <Route exact path="/register">
                <Register></Register>
            </Route>
         
          </Switch>
        </Router>
    </div>
  );
}

export default App;
