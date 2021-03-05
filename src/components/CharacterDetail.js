import React, {useEffect, useState} from "react";
import GuideForm from "./GuideForm"
function CharacterDetail({characterShow, guides, handleGuides }){

    const characterInfo = characterShow.map((c) => {
        return(
            <>
            <div>   
            <h2>Charater detail</h2>
            <h3>{c.name}</h3>
            <img src={c.detailImage}/>
            <h3>{c.description}</h3>
        </div>
        </>
        )
    } )
    return(
    <div>
        {characterInfo}
        < GuideForm guides={guides} handleGuides={handleGuides} characterId={characterShow[0].id} characterName={characterShow[0].name}/>
    </div>
    )
}

export default CharacterDetail