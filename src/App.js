import './index.css'
import './App.css';
import './assets/images/world.jpg'
import Search from './components/Search/Search';
import styled from 'styled-components';
import react,{Suspense} from 'react';
import { Canvas } from '@react-three/fiber';
import Worlds from './components/Home/Worlds';


function App() {

const WorldContainer = styled.div`
height:90vh;
width:100%;
margin-top:0;
`




  return (
<>

    <Search/>


    <WorldContainer>

            <Canvas>

                <Suspense fallback={null}>
                <Worlds/>


                    
                </Suspense>



            </Canvas>


        </WorldContainer>

        </>
  );
}

export default App;
