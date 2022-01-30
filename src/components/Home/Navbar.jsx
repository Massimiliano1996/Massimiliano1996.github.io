import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
                
           <Link to='/Meteo'>
                <span > Servizio Meteo </span>
            </Link>
                <span>Servizio Localizzazione</span>



            
        
            
        
        
        
        </NavConteiner>
        
        
            
        
    )
}
