import React, {useEffect, useState} from "react";

function CharacterDetail({characterShow }){

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
    </div>
    )
}

export default CharacterDetail