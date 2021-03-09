import React, {useState, useEffect} from "react";
import {useHistory, useParams} from "react-router-dom"
import UpdateGuideForm from "./UpdateGuideForm"


function GuideDetail({characters, children, currentUser, setGuides, guides}){
    const params = useParams();
    const id = params.id;
    const guideShow = guides.filter((g) => g.id == id )
    const [isLoaded, setIsLoaded] = useState(false);
    
    const [formDisplay, setFormDisplay] = useState(false)
    const [guide, setGuide] = useState(null)
    // console.log(guideShow)
    

    useEffect(() =>{
        fetch(`http://localhost:3000/guides/${id}`)
        .then(res => res.json())
        .then(setGuide)
        setIsLoaded(true);
      }, [id])

    const history = useHistory();
    if (!isLoaded) return <h2>Loading...</h2>;
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
     
    const newLikes = guide.likes += 1
     
     fetch(`http://localhost:3000/guides/${id}`,{
       method: "PATCH",
       headers:{"content-type":"application/json"},
       body: JSON.stringify({likes: newLikes } )
     })
     .then(res => res.json())
     .then(data => setGuide(data) ) 
   }
  
   function updateGuide(){
    setFormDisplay((formDisplay) => !formDisplay)

   }

    
      const mainDisplay =  guide !== null?

    (<div>
      <h1>{guide.title}</h1> 
      <h2>Guide detail </h2>
      <h3>{guide.name}</h3>
      <img src={guide.guide_image} alt={guide.title}/>
      <h3>{guide.content}</h3>
      <h3>Likes: {guide.likes}</h3>
      <button onClick={() => handleUpdateLikes(guide.id)}>❤️</button> 
    </div>):<h1>Loading...</h1>
      
      const whatToDisplay = formDisplay ? <UpdateGuideForm guides={guides} setGuides={setGuides} characters={characters} updatedGuide={guide}/> :mainDisplay
      
      const userId = guide !== null ? guide.user_id : 0 
  

        return (
            <>
            {whatToDisplay}
            {currentUser.id === userId ? 
            <>
            <button onClick={updateGuide}>edit</button>
            <button onClick={() => handleDeleteGuide(guide.id)}>delete</button>
            </>
           : null}
           </>)
      
}

export default GuideDetail;