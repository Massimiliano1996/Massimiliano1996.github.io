import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'


export default function ApiMeteo() {
const[post,setPost]=useState()
    useEffect(() => {
        axios.get( 'https://openweathermap.orgapi.openweathermap.org/data/2.5/weather?id=2172797&appid=e277882a9524cdb973da2b2aee6a56b0').then((res)=>{setPost(res.data);
console.log(res.data)
             });
        
    }, []);


    return (
        <div>
            
        </div>
    )
}
