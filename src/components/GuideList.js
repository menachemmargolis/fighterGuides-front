import React from "react";
import Guide from "./Guide";
import Carousel from 'react-bootstrap/Carousel'

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
        </>
    )
}

export default GuideList;