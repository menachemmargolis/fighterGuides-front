import React from 'react'
import { NavLink} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import '../CharacterList.css';

function Character({character, onHandleClick}){
    

    return(
    
        <NavLink exact className="button" to={'/characters/'+ character.id}>
    <Card style={{flex: 1}} className="bg-dark">
         <div onClick={() => onHandleClick(character.id)} >
        <Card.Img src={character.grid_image} alt={character.name}/>
        <Card.ImgOverlay>
        </Card.ImgOverlay>
        <Card.Footer className="text-white font-weight-bold">{character.name}</Card.Footer>
         </div>
    </Card>
        </NavLink>
    
      
    )

}

export default Character;