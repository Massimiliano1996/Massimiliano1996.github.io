import React from 'react'
import styled from 'styled-components'







export default function Search() {

    const Bar= styled.input`
    border-radius: 15px;
    height:2rem;
    box-shadow: 0 3px 10px -3px rgba(0, 0, 0, 0.25);
    margin-top:10px;
    background-color:white;
    &:hover{
        background-color:rgba(255,255,255,0.5);
    }



    `

    return (
                 
        <Bar placeholder='Search...'/>
    )
}
