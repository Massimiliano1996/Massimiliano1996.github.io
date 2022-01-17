<<<<<<< HEAD


=======
import styled from 'styled-components'
>>>>>>> 24f090e268184445d8ca105491faa2ff8d73faa1



import React from 'react'
<<<<<<< HEAD
import styled from 'styled-components'

export default function Navbar() {

    const NavConteiner=styled.div`
    display:flex;
    height:3rem;
    background-color:none;
    color:white;




        `
    return (

        


        <NavConteiner>
                
            <ul style={{}}>
                <li> Servizio Meteo </li>
                <li>Servizio Localizzazione</li>



            </ul>
        
            
        
        
        
        </NavConteiner>
        
        
            
        
=======

export default function Navbar() {

const MyNav=styled.div`

display:flex;
background-color:black;
height:2rem;
color:white;
justify-content:space-around;
text-decoration:bold;
padding:1rem;
`




    return (
        <MyNav>
            <span>Servizio Meteo</span>
            <span>Servizio Geolocalizzazione</span>




        </MyNav>
>>>>>>> 24f090e268184445d8ca105491faa2ff8d73faa1
    )
}
