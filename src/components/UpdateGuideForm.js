import React, {useState} from "react"
import {useHistory} from "react-router-dom"


function UpdateGuideForm({updatedGuide, characters, guides, setGuides}){
    const history = useHistory();
    const [updateFormData, setUpdateFormData] = useState({
        character_id: updatedGuide.character_id,
        user_id: updatedGuide.user_id,
        title: updatedGuide.title,
        guide_image: updatedGuide.guide_image,
        content: updatedGuide.content,
        likes:updatedGuide.likes
    }
    )

   
   const thisCharacter = characters.filter((character) => 
      {return character.id === updatedGuide.character_id
      }
   )

   function handleSubmit(e){
    e.preventDefault()

    const editedGuide = {
       user_id: updatedGuide.user_id,
       title: updateFormData.title,
       guide_image: updateFormData.guide_image,
       content: updateFormData.content,
       likes: updatedGuide.likes,
       character_id: updatedGuide.character_id
    }
   
    fetch(`http://localhost:3000/guides/${updatedGuide.id}`,{
        method:"PATCH",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(editedGuide)
    })
    .then(res => res.json())

    .then( data => {
     const filterGuides = guides.map((g) => {
         return g.id === updatedGuide.id ? {...g,content:data.content, title:data.title, likes:data.likes}:g
     })
     setGuides(filterGuides)
    })
    
    .then(history.push("/guides"))
 
}  




   function handleChange(e){
        
        const name = e.target.name
        const value = e.target.value
        
        setUpdateFormData({
            ...updateFormData,
        [name]:value, })
}

    return(
        <div class="container">
        <div class="row">
            <div class="col-md-4">
            <div class="form_main">
   
        <h2 class="heading">New Guide For {thisCharacter.name} </h2>
        <div class="form">
        <form onSubmit={handleSubmit} class="form-group">
            <label> Character name: </label>
                <input  value={thisCharacter[0].name} onChange={handleChange} type="text" name=""/>
                <br></br>
            <label htmlFor="image"> Image URL: </label>
                <input value={updateFormData.guide_image} onChange={handleChange} type="text" name="guide_image" placeholder="Image URL"/>
                <br></br>
            <label htmlFor="title"> Title: </label>
            <input value={updateFormData.title} onChange={handleChange} type="text" name="title" placeholder="Guide Title Here"/>
                <br></br>
            <label htmlFor="title"> Guide Text </label>
            <textarea value={updateFormData.content} onChange={handleChange} type="text" name="content" placeholder="Write Your Guide Here"/>
            <br></br>
            <button type="submit" class="btn btn-primary">Update Guide</button>
        </form>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
  
}


export default  UpdateGuideForm;