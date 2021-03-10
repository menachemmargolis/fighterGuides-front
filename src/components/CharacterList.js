import React from "react"
import Character from "./Character"
import '../CharacterList.css';
import CardColumns from 'react-bootstrap/CardColumns'
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
        <CardDeck style={{ marginLeft: '15%', marginRight: '10%', display: 'flex', flexDirection: 'row'}}>
        {charactersArray}
        </CardDeck>
        </>
    )
}

export default CharacterList;