import React, {useState, useEffect} from "react";
import {useHistory, useParams} from "react-router-dom"
import UpdateGuideForm from "./UpdateGuideForm"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

function GuideDetail({characters, children, currentUser, setGuides, guides}){
    const params = useParams();
    const id = params.id;
    const guideShow = guides.filter((g) => g.id == id )
    const [isLoaded, setIsLoaded] = useState(false);
    
    const [formDisplay, setFormDisplay] = useState(false)
    const [guide, setGuide] = useState(null)
  

    

    useEffect(() =>{
        fetch(`http://localhost:3000/guides/${id}`)
        .then(res => res.json())
        .then(setGuide)
        setIsLoaded(true);
      }, [id])

    const history = useHistory();
    if (!isLoaded) return <img src="https://i.gifer.com/ZZ5H.gif"/>;
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
     .then(data => {
       const filtiring = guides.map((g) => {
        return g.id === id ? {...g, likes:data.likes} : g 
       })
       setGuides(filtiring)
       setGuide(data)}
      ) 
   }


   function updateGuide(){
    setFormDisplay((formDisplay) => !formDisplay)

   }



   const userId = guide !== null ? guide.user_id : 0 
      const mainDisplay =  guide !== null?

    (
      <Card className= "guide-detail-card bg-dark text-white" style={{ width: '50rem', margin: '0 auto', marginTop: '100px', paddingTop: '20px'}}>
      <Card.Img variant="top" src={guide.guide_image} style={{ height:'100px', width:'100px',margin: '0 auto' }}/>
      <Card.Body>
        <Card.Title>{guide.title}</Card.Title>
        <Card.Body>
          <p>
         {guide.content}
         </p> 
        </Card.Body>
        <Card.Text>
         <hr></hr>
         Likes : {guide.likes}
         
        </Card.Text>
        <Button onClick={() => handleUpdateLikes(guide.id)}  style={{borderRadius: '10px', marginRight: '8px'  }} variant="primary" size="sm">👍</Button>
        {currentUser.id === userId ? 
            <>
            <Button onClick={updateGuide}  style={{borderRadius: '10px', marginRight: '8px'  }} variant="primary" size="sm">edit</Button>
            <Button onClick={() => handleDeleteGuide(guide.id)}  style={{borderRadius: '10px', marginRight: '8px'  }} variant="primary" size="sm">delete</Button>
            </>
           : null}
      </Card.Body>
    </Card>):<h1>Loading...</h1>
    

      
    const whatToDisplay = formDisplay ? <UpdateGuideForm guides={guides} setGuides={setGuides} characters={characters} updatedGuide={guide}/> :mainDisplay
      
    
  

        return (
            <>
            {whatToDisplay}
           </>)
      
}

export default GuideDetail;