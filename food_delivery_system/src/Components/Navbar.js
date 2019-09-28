import React from'react';
import './../App.css'

function Navbar() {
    return(
        <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="#">
            <img src="https://www.dunzo.com/_next/static/images/logo-688a4dddbf273f1523fbd9c6e8215a73.png" height="30" class="d-inline-block align-top ml" alt="" id="img"></img>
               
                
                    <button type="button" id="set" class="btn btn-outline">Dunzo for Partners</button>
                    <button type="button"  id="botton" class="btn btn-outline">Dunz for Business</button>
              
                
            </a>
            
        </nav>
    )
}

export default Navbar;