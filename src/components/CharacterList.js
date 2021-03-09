import React from "react"
import Character from "./Character"
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'


function CharacterList({characters, onHandleClick}){

    const charactersArray = characters.map((character) => {
    
        return(
       
            <Character 
            key={character.id}
            character={character}
            onHandleClick={onHandleClick}/>
         
        )
    })




    return(
        <>
        <CardDeck>
        <h2>{charactersArray}</h2>
        </CardDeck>
        </>
    )
}

export default CharacterList;