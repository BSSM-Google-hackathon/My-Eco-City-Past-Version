import React from 'react'
import { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import Box from '../../components/Box';

// style
import '../../styles/canvas.css';
import AnimatedSphere from '../../components/AnimatedSphere';

const ThreeExemple = () => { 
    return(
        <Canvas className="canvas">
            {/* 불러오는 동안 null 표시 */}
            {/* <Suspense fallback={null}>
                <Box/>
            </Suspense> */}
            <Suspense fallback={null}>
                <AnimatedSphere/>
            </Suspense>
        </Canvas>
    )
}

export default ThreeExemple;