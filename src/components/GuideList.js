import React from "react";
import Guide from "./Guide";
import Carousel from 'react-bootstrap/Carousel'
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom";

function GuideList({guides, onHandleGuideClick, children}){



  const guidesArray = guides.map((guide) => {
    
    return(
      <Carousel.Item className='w-100 h-50'>
        <Guide 
        key={guide.id}
        guide={guide}
        onHandleGuideClick={onHandleGuideClick}
        />
        </Carousel.Item>

    )
})

    return(
        <>
          {children}
          <Carousel>
          {guidesArray}
          </Carousel>
          <Button className= 'bg-dark' style={{ borderColor: 'black',marginRight: '15px', borderRadius: '25px'}}><Link to="/guideform" className="text-uppercase font-weight-bold text-white">Create a Guide</Link></Button>
        </>
    )
}

export default GuideList;