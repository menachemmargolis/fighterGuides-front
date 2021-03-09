import React, {useState, useEffect} from "react"
import '../App.css';
import { Switch, Route} from "react-router-dom";
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
  const [currentUser, setCurrentUser] = useState("")

 
  
  // filter out all other characters so we only send the character with this id  down to character detail
  
  
  // const guideShow = guides.filter((g) => g.id === guideId )


  useEffect(() => {
    fetch(`http://localhost:3000/characters`)
    .then((r)=>r.json())
    .then(setCharacters)
    fetch(`http://localhost:3000/guides`)
    .then((r)=>r.json())
    .then(setGuides)
    fetch(`http://localhost:3000/me`)
    .then(res => res.json())
    .then(setCurrentUser)

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
  <div className="App">
    <header className="header">
      <NavBar />
    </header>
      <Switch>
     <Route exact path="/profile/:id">
        <Profile onHandleGuideClick={onHandleGuideClick} user={currentUser} guides={guides}/>
       </Route>   
       <Route exact path= "/characters/:id">
        <CharacterDetail currentUser={currentUser} onHandleGuideClick={onHandleGuideClick} guides={guides} handleGuides={addGuideToArray} characterId = {characterId} />
       </Route>
        <Route exact path="/">
        <Home onHandleGuideClick={onHandleGuideClick} guides={guides}/>
        </Route>
        <Route exact path="/characters">
          <CharacterList   onHandleClick={onHandleClick}  characters={characters} />
        </Route>
        <Route exact path="/guides">
          <GuideList onHandleGuideClick={onHandleGuideClick} guides={guides}>
            <h1>All Guides</h1>
          </GuideList>
        </Route>
        <Route exact path= "/guides/:id">
        <GuideDetail  guides={guides} setGuides={setGuides} characters={characters} guides={guides} setGuides={setGuides}  currentUser={currentUser} />
       </Route>
      </Switch>
    
  </div>
  );

}

export default App;
