import React from "react"
import { NavLink} from 'react-router-dom'

function Guide({guide, onHandleGuideClick}){
    return(
        <NavLink  exact className="button" to={'/guides/'+ guide.id}>
        <div onClick={() => onHandleGuideClick(guide.id)} >
         <h1>{guide.title}</h1>
          <img src={guide.guide_image} alt={guide.title}/>
          <p> Likes:{guide.likes}</p>
        </div>
       </NavLink>
    )
}

export default Guide;