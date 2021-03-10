import React from "react";
import GuideList from "./GuideList";


function Home({guides, onHandleGuideClick}){

    return(
        <div>
        <h2>Home Page</h2>
        <GuideList onHandleGuideClick={onHandleGuideClick} guides={guides}>
            <h2>Latest Guides</h2>
        </GuideList>
        </div>
    )
}

export default Home; 