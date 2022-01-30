import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

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
                
           <NavLink to='/Meteo'>
                <span > Servizio Meteo </span>
            </NavLink>
                <span>Servizio Localizzazione</span>



            
        
            
        
        
        
        </NavConteiner>
        
        
            
        
    )
}
