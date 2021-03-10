import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from "react";
import {useHistory} from "react-router-dom"


function GuideForm({ handleGuides, currentUser, id, children}){
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


      

 
    return(
        <>
       <form onSubmit={handleSubmit} id="hello">
            {children}
           <input type="text" onChange={handleChange} name="title" value={formData.title} placeholder="title"/>
           <input type="text" onChange={handleChange} name="content" value={formData.content} placeholder="content"/>
           <input type="text" onChange={handleChange} name="guide_image" value={formData.image} placeholder="image url"/>
           <input type='submit'/>
       </form>
       <style jsx>{`
        #hello {
            margin-top:40px;
        }
       `}
   </style>
     </>  
    )
    
}

export default GuideForm;