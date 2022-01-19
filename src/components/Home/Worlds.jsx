import React, { useRef} from 'react'

import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import EarthSpecularMap from '../../assets/images/SpecularMap.png'
import { OrbitControls, Stars } from '@react-three/drei'
import EarthMap from '../../assets/images/NasaEarth.jpg'


export default function Worlds(props) {

    const [colorMap, specularMap] = useLoader(TextureLoader, [EarthMap, EarthSpecularMap])
    const earthRotation = useRef();

    useFrame(({ clock }) => {
        const Time = clock.getElapsedTime();

        earthRotation.current.rotation.y = Time / 4;

    });

    return (
        
            <>

                    <Stars radius={300} />
                    <pointLight position={2 } intensity={1} />
                    <mesh ref={earthRotation}>
                        <OrbitControls enableRotate={true} rotateSpeed={0.4} enablePan={true} panSpeed={0.5} enableZoom={true} maxZoom={3} zoomSpeed={1} />
                        <sphereGeometry args={[1.5, 40, 40]} />
                        <meshPhongMaterial specularMap={specularMap} />
                        <meshStandardMaterial map={colorMap} metalness={0.2} />

                    </mesh>
                    
                    </>




        
    )
}
