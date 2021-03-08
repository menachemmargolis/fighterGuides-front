import React from "react"
import GuideList from "./GuideList"

function Profile({onHandleGuideClick,user, guides}){
    const userGuide = guides.filter((g) =>  
    (g.user_id === user.id)
 )

    return(
        <>
        <h1>{user.username}</h1>
        <img src= {user.profile_image} alt={user.username}/>
        <GuideList onHandleGuideClick={onHandleGuideClick} guides={userGuide}/>
        </>
    )
}

export default Profile;