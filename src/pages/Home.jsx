
import '../assets/images/world.jpg'
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';
import Worlds from '../components/Home/Worlds';
import Navbar from '../components/Home/Navbar';

















export default function Home() {

    const WorldContainer = styled.div`
    
    height:100vh;
    width:100%;
    margin-top:0;
    
    `





    return (
        

            


      <WorldContainer>
      <Navbar/>

        <Canvas>

          <Suspense fallback={null}>

            <Worlds />
            

          </Suspense>
          

        </Canvas>
          
        


      </WorldContainer>
      
    
    )
}
