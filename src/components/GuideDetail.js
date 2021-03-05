import React from "react";


function GuideDetail({guideShow}){
    const guideInfo = guideShow.map((g) => {
    
        return(
            <>
            <div>  
            <h1>{g.title}</h1> 
            <h2>Guide detail </h2>
            <h3>{g.name}</h3>
            <img src={g.guide_image}/>
            <h3>{g.content}</h3>
        </div>
        </>
        )
    } )
    return(
        <>
       {guideInfo}
       </>
    )
}

export default GuideDetail;