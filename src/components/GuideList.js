import React, {useEffect, useState} from "react";
import Guide from "./Guide";

function GuideList({guides, onHandleGuideClick}){



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
          <h1>GuideList</h1>
          <h2>{guidesArray}</h2>
          
        </>
    )
}

export default GuideList;