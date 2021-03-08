import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from "react";

function GuideForm({characterId, characterName, handleGuides, currentUser}){
    const [formData, SetFormData] = useState({
        title: "",
        guide_image: "",
        content: "",
        likes: 0
    })

   

    function handleChange(e){
        
        const name = e.target.name
        const value = e.target.value
        
        SetFormData({
            ...formData,
        [name]:value, })
    }

    function handleSubmit(e){
        e.preventDefault()

        const newGuide = {
           user_id: currentUser.id,
           title: formData.title,
           guide_image: formData.guide_image,
           content: formData.content,
           likes: formData.likes,
           character_id: characterId
        }
       
        fetch(`http://localhost:3000/guides`,{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(newGuide)
        })
        .then(res => res.json())
        .then(handleGuides)
    }
   

    return(
        <div class="container">
	        <div class="row">
                <div class="col-md-4">
		        <div class="form_main">
       
            <h2 class="heading">New Guide For {characterName} </h2>
            <div class="form">
            <form onSubmit={handleSubmit} class="form-group">
                <label> Character name: </label>
                    <input  value={characterName} onChange={handleChange} type="text" name=""/>
                    <br></br>
                <label htmlFor="image"> Image URL: </label>
                    <input value={formData.guide_image} onChange={handleChange} type="text" name="guide_image" placeholder="Image URL"/>
                    <br></br>
                <label htmlFor="title"> Title: </label>
                <input value={formData.title} onChange={handleChange} type="text" name="title" placeholder="Guide Title Here"/>
                    <br></br>
                <label htmlFor="title"> Guide Text </label>
                <textarea value={formData.content} onChange={handleChange} type="text" name="content" placeholder="Write Your Guide Here"/>
                <br></br>
                <button type="submit" class="btn btn-primary">Create Guide</button>
            </form>
            </div>
            </div>
            </div>
            </div>
            </div>
    )
    
}






export default GuideForm;