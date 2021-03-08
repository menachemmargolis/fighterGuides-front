import React, {useEffect, useState} from "react";
import GuideForm from "./GuideForm"
import GuideList from "./GuideList";
import '../CharacterDetail.css';
function CharacterDetail({characterShow, guides, handleGuides, onHandleGuideClick }){

    const charGuide = guides.filter((g) =>  
       (g.character_id === characterShow[0].id)
    )
   

    const characterInfo = characterShow.map((c) => {
        return(
           
            <div class="container">
                <div class="card">
                    <div class="row">
                        <div>
                            <img class="col-sm-6 px-3" src={c.detail_image} alt={c.name}/>
                                
                            <div class="card-block px-6">    
                                <h4 class="card-title">{c.name}</h4>
                                <p class="card-text">{c.description}</p>
                            </div>
                               
                        </div>    
                    
                    </div>
                </div>
            </div> 
                  
           
                   
        )
    } )
    return(
    <div>
        {characterInfo}
        <GuideList onHandleGuideClick={onHandleGuideClick} guides={charGuide} >
            <h1>character guides</h1>
        </GuideList>
        < GuideForm guides={guides} handleGuides={handleGuides} characterId={characterShow[0].id} characterName={characterShow[0].name}/>
    </div>
    )
}

export default CharacterDetail;