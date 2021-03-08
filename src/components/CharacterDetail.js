import React,{useState, useEffect} from "react";
import GuideForm from "./GuideForm"
import GuideList from "./GuideList";
import '../CharacterDetail.css';
import { useParams } from "react-router-dom";


function CharacterDetail({ characterId, guides, handleGuides, onHandleGuideClick, currentUser }){
    const [characterDetail, setCharacterDetail] = useState(null)
    const params = useParams();
    const id = params.id;
   
    console.log(characterId)


    const  charGuide = characterDetail !== null ?   guides.filter((g) => 
       g.character_id === characterDetail.id
    ) : []
    

    

  useEffect(() =>{
    fetch(`http://localhost:3000/characters/${id}`)
    .then(res => res.json())
    .then((data) => setCharacterDetail(data))
  }, [id])


        return(
            
            <div>
            <div className="container">
                <div className="card">
                    <div className="row">
                        <div>
                            
                            <img className="col-sm-6 px-3" src={ characterDetail !== null ? characterDetail.detail_image : <p>Loading.....</p>} alt={characterDetail !== null ? characterDetail.name : <h1>Loading.....</h1>}/>
                                
                            <div className="card-block px-6">    
                                <h4 className="card-title">{characterDetail !== null ? characterDetail.name : <p>Loading.....</p>}</h4>
                                <p className="card-text">{characterDetail !== null ? characterDetail.description : <p>Loading.....</p>}</p>
                            </div>
                               
                        </div>    
                    
                    </div>
                </div>
            </div> 
                  
           
                   
   
 
   
        <GuideList onHandleGuideClick={onHandleGuideClick} guides={ charGuide}  >
            <h1>character guides</h1>
        </GuideList>
        < GuideForm currentUser={currentUser} guides={guides} handleGuides={handleGuides} characterId={ characterDetail !== null ?  characterDetail.id :<h1>Loading..</h1>} characterName={characterDetail !== null ?  characterDetail.name :<h1>Loading..</h1>}/> 
  
    </div>
        
     )

}

export default CharacterDetail;