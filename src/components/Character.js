import React, {useState} from 'react'
import { NavLink, Route, Switch} from 'react-router-dom'

function Character({character, onHandleClick}){


    return(
    

        <NavLink  exact className="button" to={'/characters/'+ character.id}>
         <div onClick={() => onHandleClick(character.id)} >
          <h1>{character.name}</h1>
           <img src={character.gridImage}/>
         </div>
        </NavLink>
      
    )

}

export default Character;