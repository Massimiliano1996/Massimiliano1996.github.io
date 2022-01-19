import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'


export default function ApiMeteo() {


const Mydiv=styled.div`
background-color:white;
margin-top:2rem;
height:10rem;

`







const[post,setPost]=useState()
    useEffect(() => {
        axios.get( 'http://api.openweathermap.org/data/2.5/weather?q=Rome,Italy&appid=5927eede81005116559ee463a04139b8').then((res)=>{setPost(res.data);
        console.log(res.data.weather)
             });
        
    }, []);


    return (
        <Mydiv>
            


        </Mydiv>
      
        
        
           
        
        
        
        
    )
}
