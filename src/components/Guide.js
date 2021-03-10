import React from "react"
import {Link} from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'
import '../Guide.css';

function Guide({guide, onHandleGuideClick}){
    return(
       
            <Carousel.Caption style={{position: 'relative', maxHeight: '50rem'}}>
        <Link  exact className="button" to={'/guides/'+ guide.id}>
        <div className= 'card d-block w-50 h-50' onClick={() => onHandleGuideClick(guide.id)} >
          <img  src={guide.guide_image} alt={guide.title}/>
         <h1>{guide.title}</h1>
          <p> Likes:{guide.likes}</p>
        </div>
       </Link>
         </Carousel.Caption>
    
       
     
    )
}

export default Guide;