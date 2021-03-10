import React, {useState} from "react"
import {useHistory} from "react-router-dom"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
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
        // <div class="container">
        // <div class="row">
        //     <div class="col-md-4">
        //     <div class="form_main">
   
        // <div class="form">
        // <form onSubmit={handleSubmit} class="form-group">
        //     <label htmlFor="image"> Image URL: </label>
        //         <input value={updateFormData.guide_image} onChange={handleChange} type="text" name="guide_image" placeholder="Image URL"/>
        //         <br></br>
        //     <label htmlFor="title"> Title: </label>
        //     <input value={updateFormData.title} onChange={handleChange} type="text" name="title" placeholder="Guide Title Here"/>
        //         <br></br>
        //     <label htmlFor="title"> Guide Text </label>
        //     <textarea value={updateFormData.content} onChange={handleChange} type="text" name="content" placeholder="Write Your Guide Here"/>
        //     <br></br>
        //     <button type="submit" class="btn btn-primary">Update Guide</button>
        // </form>
        // </div>
        // </div>
        // </div>
        // </div>
        // </div>


        <Form className='bg-dark text-white' style={{paddingTop: '20px'}} onSubmit={handleSubmit} >
        <Form.Group controlId="formBasicTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" onChange={handleChange} name="title" value={updateFormData.title} placeholder="title" />
        </Form.Group>
        <Form.Group controlId="formBasicImage">
            <Form.Label>Image Url</Form.Label>
            <Form.Control type="text" onChange={handleChange} name="guide_image" value={updateFormData.guide_image} placeholder="image url"  />
        </Form.Group>
        <Form.Group controlId="formBasicContent">
            <Form.Label>Content</Form.Label>
            <Form.Control as="textarea" rows={7} onChange={handleChange} name="content" value={updateFormData.content} placeholder="content" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
    )
  
}


export default  UpdateGuideForm;