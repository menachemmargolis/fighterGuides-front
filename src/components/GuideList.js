import React, {useEffect, useState} from "react";
import Guide from "./Guide";

function GuideList({guides, onHandleGuideClick, children}){



  const guidesArray = guides.map((guide) => {
    
    return(
        <Guide 
        key={guide.id}
        guide={guide}
        onHandleGuideClick={onHandleGuideClick}
        />
    )
})

    return(
        <>
          {children}
          <h2>{guidesArray}</h2>
          
        </>
    )
}

export default GuideList;