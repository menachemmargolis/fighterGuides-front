import React from "react";
import { Link } from "react-router-dom";



function NavBar(){
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
    return(

        
   
<header className="header">
    <nav className="navbar navbar-expand-lg fixed-top py-3">
        <div className="container"><Link to="/" className="navbar-brand text-uppercase font-weight-bold">FighterGuidez</Link>
            
            
            <div id="navbarSupportedContent" className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active"><Link to="/" className="nav-link text-uppercase font-weight-bold">Home <span className="sr-only"></span></Link></li>
                    <li className="nav-item"><Link to="/characters" className="nav-link text-uppercase font-weight-bold">Characters<span className="sr-only"></span></Link></li>
                    <li className="nav-item"><Link to="/guides" className="nav-link text-uppercase font-weight-bold">Guides<span className="sr-only"></span></Link></li>
                    <li className="nav-item"><Link to="/profile/:id" className="nav-link text-uppercase font-weight-bold">Profile<span className="sr-only"></span></Link></li>
                </ul>
            </div>
        </div>
    </nav>
</header>
            
    )
    
}

export default NavBar;