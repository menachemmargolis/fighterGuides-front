import React from "react";
import GuideList from "./GuideList";
import Card from 'react-bootstrap/Card'

function Home({ guides, onHandleGuideClick}){

    return(
        <div>
       
         

        <Card className='bg-light' style={{width: '60rem',margin: '0 auto',marginTop: '100px' }}>
        <Card.Body>
            <Card.Title style={{fontSize: '30px'}}>Welcome to <a style={{fontSize: 'larger', fontWeight: 'bold', fontStyle: 'oblique'}}>FighterGuidez</a><br></br><a style={{fontSize: 'large'}}>Your #1 resource for all things: </a></Card.Title>
            <br></br>
            <img style={{width: '100%', }}src='https://www.guiltygear.com/ggst/en/wordpress/wp-content/themes/ggst/img/logo.png' alt='guilt gear logo'/>
            <Card.Text>
             
            </Card.Text>
            <hr></hr>
            <a style={{fontSize: 'larger', fontWeight: 'bold'}}>Guilty Gear News:</a>
            <br></br>
            <a style={{fontSize: 'large'}}>Guilty Gear fans are going to have to wait a little longer to get their hands on the latest entry in the franchise. Guilty Gear Strive, which was supposed to launch on April 9, has been delayed until June 11, developer Arc System Works announced last Wednesday.</a>
            <br></br>
            <a style={{fontSize: 'large'}}>In a statement released on the Arc System Works Twitter account, the development team explained that the decision resulted in part from the open beta test for the game. The statement also mentioned that the game’s online features will be a particular focus for the team during this extra development time.</a>
            <br></br>
            <a style={{fontSize: 'large'}}>“Since we have received valuable feedback after the recent open beta test, we would like to make the most of this opportunity to provide the best game possible,” the developers said. “We need extra time to polish some aspects of the game, such as online lobbies, and the server’s stability.”</a>
            <br></br>
            <a style={{fontSize: 'large'}}>This is the second delay for Guilty Gear Strive, which was originally set to debut in 2020. In May 2020, Arc System Works announced that the game was getting bumped to 2021 due to the complications of the COVID-19 pandemic.</a>
            <br></br>
            <a style={{fontSize: 'large'}}>Guilty Gear Strive is set to come to PlayStation 4, PlayStation 5, and Windows PC via Steam.</a>
            <hr></hr>
            <a style={{fontSize: 'x-large', fontWeight: 'bold'}}>With this delay in place, it's time to brush up on your skills before the game is out!</a>
            <hr></hr>
            <a style={{fontSize: 'xx-large', fontWeight: 'bolder'}}>Visit the latest walkthrough guides below:</a>

        </Card.Body>
      </Card>



        <GuideList onHandleGuideClick={onHandleGuideClick} guides={guides}>
        </GuideList>
        </div>
    )
}

export default Home; 