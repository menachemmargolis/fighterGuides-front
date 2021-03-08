import React, {useState} from "react";
import {useHistory} from "react-router-dom"
import UpdateGuideForm from "./UpdateGuideForm"


function GuideDetail({characters, guideShow, children, currentUser, setGuides, guides}){
    const [newLikes, setNewLikes] = useState(guideShow[0].likes)
    const [formDisplay, setFormDisplay] = useState(false)


    const history = useHistory();
  function handleDeleteGuide(id){
      
    fetch(`http://localhost:3000/guides/${id}`,{
       method: "DELETE",
       headers:{"content-type":"application/json"},
     })
     .then(() => {
         const allGuides = guides.filter((g) => g.id !== id)
         setGuides(allGuides)
        })
    .then(history.push("/guides"))
    
  }


   function handleUpdateLikes(id){
     
    const newLikes = guideShow[0].likes += 1
     
     fetch(`http://localhost:3000/guides/${id}`,{
       method: "PATCH",
       headers:{"content-type":"application/json"},
       body: JSON.stringify({likes: newLikes } )
     })
     .then(res => res.json())
     .then(data => setNewLikes(data.likes))
   }
  
   function updateGuide(){
    setFormDisplay((formDisplay) => !formDisplay)

   }

    const guideInfo = guideShow.map((g) => {
    
      const whatToDisplay =   formDisplay ? <UpdateGuideForm guides={guides} setGuides={setGuides} characters={characters} updatedGuide={g}/> :  
      <div>
        <h1>{g.title}</h1> 
        <h2>Guide detail </h2>
        <h3>{g.name}</h3>
        <img src={g.guide_image} alt={g.title}/>
        <h3>{g.content}</h3>
        <h3>Likes: {newLikes}</h3>
        <button onClick={() => handleUpdateLikes(g.id)}>❤️</button> 
      </div> 
  

        return (
            <>
            {whatToDisplay}
            {currentUser.id === guideShow[0].user_id ? 
            <>
            <button onClick={updateGuide}>edit</button>
            <button onClick={() => handleDeleteGuide(g.id)}>delete</button>
            </>
           : null}
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