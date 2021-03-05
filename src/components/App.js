import logo from '../logo.svg';
import React, {useState, useEffect} from "react"
import '../App.css';
import { Redirect, Switch, Route} from "react-router-dom";
import Home from "./Home"
import CharacterList from "./CharacterList"
import GuideList from "./GuideList"
import Profile from "./Profile"
import NavBar from "./NavBar"
import CharacterDetail from "./CharacterDetail"
import GuideDetail from "./GuideDetail"


function App() {
  const [characters, setCharacters] = useState([])
  const [characterId, setCharacterID] = useState(null)
  const [guides, setGuides] = useState([])
  const [guideId, setGuideID] = useState(null)
  // filter out all other characters so we only send the character with this id  down to character detail
  const characterShow = characters.filter((c) => c.id == characterId )
  
  const guideShow = guides.filter((g) => g.id == guideId )

console.log(guideId)
  useEffect(() => {
    fetch(`http://localhost:3006/toys`)
    .then((r)=>r.json())
    .then(setCharacters)
    fetch(`http://localhost:3006/guides`)
    .then((r)=>r.json())
    .then(setGuides)
  }, [])
  

  


   
  


   // receive the id passed up from the character component, and setting the id state to the character id 
  function onHandleClick(id){
    setCharacterID(id)   
   }

   function onHandleGuideClick(id){
    setGuideID(id)   
   }

   function addGuideToArray(newGuide){
     const addGuide = [...guides, newGuide]
     setGuides(addGuide)
   }
   

  return (
  <div class="App">
    <header class="header">
      <NavBar />
    </header>
      <Switch>
     <Route exact path="/profile">
        <Profile />
       </Route>   
       <Route exact path= "/characters/:id">
        <CharacterDetail  handleGuides={addGuideToArray} characterShow={characterShow} />
       </Route>
        <Route exact path="/">
        <Home />
        </Route>
        <Route exact path="/characters">
          <CharacterList   onHandleClick={onHandleClick}  characters={characters} />
        </Route>
        <Route exact path="/guides">
          <GuideList onHandleGuideClick={onHandleGuideClick} guides={guides}/>
        </Route>
        <Route exact path= "/guides/:id">
        <GuideDetail  guideShow={guideShow} />
       </Route>
      </Switch>
    
  </div>
  );

}

export default App;
