import React from "react"
import {Link} from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'
import '../Guide.css';
import Card from "react-bootstrap/Card"

function Guide({ guide, onHandleGuideClick}){
  


  
    return(
       
            <Carousel.Caption style={{position: 'relative', marginLeft: '5rem'}}>
        <Link  exact className="button" to={'/guides/'+ guide.id}>
          <Card style={{maxWidth: '40%'}}>
        <div className= 'bg-dark' style={{paddingTop: '30px'}} onClick={() => onHandleGuideClick(guide.id)} >
          <img className='img-max' src={guide.guide_image} alt={guide.title}/>
          <hr></hr>
         <h3>{guide.title}</h3>
          <p className='text-white font-weight-bold'>Likes: {guide.likes}</p>
        
        </div>
        </Card>
       </Link>
         </Carousel.Caption>
    
       
     
    )
}

export default Guide;