import React from "react"
import GuideList from "./GuideList"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

function Profile({onHandleGuideClick,user, guides}){
    const userGuide = guides.filter((g) =>  
    (g.user_id === user.id)
 )
console.log(userGuide.length)
    return(
        <>
        {/* <h1>{user.username}</h1>
        <img src= {user.profile_image} alt={user.username}/> */}
   <Card className='profile-card bg-dark text-white' style={{ width: '18rem', margin: '0 auto', marginTop: '100px' }}>
   <Card.Title>Profile</Card.Title>
    <Card.Img variant="top" src={user.profile_image} style={{ height:'100px', width:'100px',margin: '0 auto' }} />
        <Card.Body>
            
            <Card.Text>
             Username : {user.username}<br/>
             Guides written : {userGuide.length} guides 
            </Card.Text>
        </Card.Body>
    </Card>
        
        
        <GuideList onHandleGuideClick={onHandleGuideClick} guides={userGuide}>
            <h2 style={{paddingTop: '30px'}}>Your Guides</h2>
        </GuideList>
        </>
    )
}

export default Profile;