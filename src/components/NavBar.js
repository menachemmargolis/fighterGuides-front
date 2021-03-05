import React,{useState} from "react";
import { Link } from "react-router-dom";
import Profile from "./Profile"


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

        
   
<header class="header">
    <nav class="navbar navbar-expand-lg fixed-top py-3">
        <div class="container"><Link to="/" class="navbar-brand text-uppercase font-weight-bold">FighterGuidez</Link>
            
            
            <div id="navbarSupportedContent" class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active"><Link to="/" class="nav-link text-uppercase font-weight-bold">Home <span class="sr-only"></span></Link></li>
                    <li class="nav-item"><Link to="/characters" class="nav-link text-uppercase font-weight-bold">Characters<span class="sr-only"></span></Link></li>
                    <li class="nav-item"><Link to="/guides" class="nav-link text-uppercase font-weight-bold">Guides<span class="sr-only"></span></Link></li>
                </ul>
            </div>
        </div>
    </nav>
</header>
            
    )
    
}

export default NavBar;