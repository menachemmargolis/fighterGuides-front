import React, {useState} from 'react'
import { NavLink} from 'react-router-dom'

function Character({character, onHandleClick}){


    return(
    

        <NavLink exact className="button" to={'/characters/'+ character.id}>
         <div onClick={() => onHandleClick(character.id)} >
          <h1>{character.name}</h1>
           <img src={character.grid_image}/>
         </div>
        </NavLink>
      
    )

}

export default Character;