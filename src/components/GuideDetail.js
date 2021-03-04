import React from "react";


function GuideDetail({guideShow}){
    const guideInfo = guideShow.map((g) => {
    
        return(
            <>
            <div>  
            <h1>{g.title}</h1> 
            <h2>Guide detail </h2>
            <h3>{g.name}</h3>
            <img src={g.image}/>
            <h3>{g.description}</h3>
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