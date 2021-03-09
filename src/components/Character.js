import React from 'react'
import { NavLink} from 'react-router-dom'
import Card from 'react-bootstrap/Card'

function Character({character, onHandleClick}){
    

    return(
    
        <NavLink exact className="button" to={'/characters/'+ character.id}>
    <Card>
         <div onClick={() => onHandleClick(character.id)} >
        <Card.Img src={character.grid_image} alt={character.name}/>
        <Card.Title>{character.name}</Card.Title>
         </div>
    </Card>
        </NavLink>
      
    )

}

export default Character;