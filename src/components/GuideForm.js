import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from "react";
import {useHistory} from "react-router-dom"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"

function GuideForm({getChartId, characters, handleGuides, currentUser, id, children}){
    const history = useHistory();
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
           character_id: id
        }
       
        fetch(`http://localhost:3000/guides`,{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(newGuide)
        })
        .then(res => res.json())
        .then(handleGuides)
        .then(history.push("/guides"), alert("Guide Created!"))
        
    }


      

    const allNames = characters.map((c) => <option>{c.name}</option>)
    return(
        <>
           
              <Form className='bg-dark text-white' style={{paddingTop: '20px', marginTop: '12rem', maxWidth: "40%"}}onSubmit={handleSubmit} >
                <Form.Group controlId="formBasicTitle">
                <Form.Label>Select a Character:</Form.Label>
                <Form.Control onChange={getChartId} as="select">
                  {allNames}
                </Form.Control>
                    <Form.Label style={{paddingTop: '20px'}}>Title</Form.Label>
                    <Form.Control type="text" onChange={handleChange} name="title" value={formData.title} placeholder="title" />
                </Form.Group>
                <Form.Group controlId="formBasicImage">
                    <Form.Label>Image Url</Form.Label>
                    <Form.Control type="text" onChange={handleChange} name="guide_image" value={formData.image} placeholder="image url"  />
                </Form.Group>
                <Form.Group controlId="formBasicContent">
                    <Form.Label>Write Your Walkthrough Here:</Form.Label>
                    <Form.Control as="textarea" rows={7} onChange={handleChange} name="content" value={formData.content} placeholder="content" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
                
     </>  
    )
    
}

export default GuideForm;