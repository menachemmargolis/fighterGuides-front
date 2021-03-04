import logo from '../logo.svg';
import '../App.css';
import {Redirect, Switch, Route} from "react-router-dom";
import Home from "./Home"
import CharacterList from "./CharacterList"
import GuideList from "./GuideList"
import Profile from "./Profile"
import NavBar from "./NavBar"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
     <Route exact path="/profile">
        <Profile />
       </Route>   
        <Route exact path="/">
        <Home />
        </Route>
        <Route exact path="/characters">
          <CharacterList />
        </Route>
        <Route exact path="/guides">
          <GuideList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
