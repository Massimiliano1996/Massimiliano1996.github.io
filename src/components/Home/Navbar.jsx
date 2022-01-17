




import React from 'react'
import styled from 'styled-components'

export default function Navbar() {

    const NavConteiner=styled.div`
    display:flex;
    height:2rem;
    background-color:none;
    color:white;
    justify-content:space-around;
    padding:1rem;


        `
    return (

        


        <NavConteiner>
                
           
                <span> Servizio Meteo </span>
                <span>Servizio Localizzazione</span>



            
        
            
        
        
        
        </NavConteiner>
        
        
            
        
    )
}
