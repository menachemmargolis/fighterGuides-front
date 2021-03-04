import React, {useEffect, useState} from "react"
import Character from "./Character"


function CharacterList({characters, onHandleClick}){

    const charactersArray = characters.map((character) => {
    
        return(
            <Character 
            key={character.id}
            character={character}
            onHandleClick={onHandleClick}
            />
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