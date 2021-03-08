import React, {useState} from "react";


function GuideDetail({guideShow, children, currentUser}){
    const [newLikes, setNewLikes] = useState(guideShow[0].likes)
    



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
  

    const guideInfo = guideShow.map((g) => {
    
        return(
        
            <div>  
            <h1>{g.title}</h1> 
            <h2>Guide detail </h2>
            <h3>{g.name}</h3>
            <img src={g.guide_image}/>
            <h3>{g.content}</h3>
            <h3>Likes: {newLikes}</h3>
            <button onClick={() => handleUpdateLikes(g.id)}>❤️</button>
        </div>
        
        )
    } )
    return(
        <>
       {guideInfo}
       {currentUser.id === guideShow[0].user_id ? 
            <div>
            <button>edit</button>
            <button>delete</button>
            </div>
           : null}
       </>
    )
}

export default GuideDetail;