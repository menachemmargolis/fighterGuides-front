import React from "react"
import Character from "./Character"


function CharacterList({characters, onHandleClick}){

    const charactersArray = characters.map((character) => {
    
        return(
            <div class="card-deck">
            <Character 
            key={character.id}
            character={character}
            onHandleClick={onHandleClick}/>
            </div>
        )
    })




    return(
        <>
        <h1>CharacterList</h1>
        <h2>{charactersArray}</h2>
        </>
    )
}

export default CharacterList;