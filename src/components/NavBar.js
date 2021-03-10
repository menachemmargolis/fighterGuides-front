import React,{useState} from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button"
import "../NavBar.css"
import "../GuideForm.css"
import logo from "../FighterGuidezLogo.png"
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function NavBar(){
  const [display, setDisplay]  = useState(false)
  

    var $ = require( "jquery" );
    $(function () {
        $(window).on('scroll', function () {
            if ( $(window).scrollTop() > 10 ) {
                $('.navbar').addClass('active');
            } else {
                $('.navbar').removeClass('active');
            }
        });
    });
    function makeActive(){
        setDisplay(!display)
    }

    return(

        
   
<header className="header">
    <nav className="navbar navbar-expand-lg fixed-top py-3">
        <div className="container">
            <Link to="/"><img className='logo'src={logo} alt='FighterGuidez'/></Link>
            <div id="navbarSupportedContent" className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                <Button    style={{borderRadius: '25px', marginRight: '8px', }}variant="danger" size="sm"  > <li className="nav-item active"><Link to="/" className="nav-link text-uppercase font-weight-bold">Home <span className="sr-only"></span></Link></li></Button>{' '}
                <Button   style={{borderRadius: '25px', marginRight: '8px'  }} variant="danger" size="sm"><li className="nav-item"><Link to="/characters" className="nav-link text-uppercase font-weight-bold">Characters<span className="sr-only"></span></Link></li></Button>{' '}
                <Button   style={{borderRadius: '25px', marginRight: '8px'  }} variant="danger" size="sm"> <li className="nav-item"><Link to="/guides" className="nav-link text-uppercase font-weight-bold">Guides<span className="sr-only"></span></Link></li></Button> {' '}
                <Button   style={{borderRadius: '25px', marginRight: '8px'  }} variant="danger" size="sm"> <li className="nav-item"><Link to="/profile/:id" className="nav-link text-uppercase font-weight-bold fas fa-camera">
                       <FontAwesomeIcon icon={faUser}/>
                    <span className="sr-only"></span></Link></li></Button> {' '}
                </ul>
            </div>
        </div>
    </nav>
</header>
            
    )
    
}

export default NavBar;




//onMouseOver={makeActive} disabled={display}
