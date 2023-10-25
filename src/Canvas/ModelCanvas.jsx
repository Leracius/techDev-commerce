import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF} from '@react-three/drei'
import Loader from '../Loader/Loader'
import { CanvasContainer } from './ModelStyles'
import { Stack } from '@mui/material'


const Model = ({ path }) => {
    const model = useGLTF(path);
    return (
      <mesh rotation={[0, Math.PI / 2, 0]}>
        <hemisphereLight intensity={2} skyColor="#ffffff" groundColor="#555555" />
        <pointLight intensity={0.3}/>
        <primitive object={model.scene} scale={1} />
      </mesh>
    );
  };
  
const ModelCanvas = ({ path }) => {
    return (
      // <CanvasContainer>
      <Stack
        direction="column"  // O "row" dependiendo de la disposición que necesites
        alignItems="center"  // Otra propiedad que podría ser útil
        justifyContent="center"  // Igual que alignItems, depende de tus necesidades
        sx={{ width: '100vw', height: '70vh' ,         
        '@media (max-width: 768px)': {
          height: '200px',
        }}}  
        >
        <Canvas frameloop='demand' shadows camera={{ position: 15, fov: 1 }} gl={{ preserveDrawingBuffer: true }}>
          <Suspense fallback={<Loader />}>
            <OrbitControls
              enableZoom={true}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
              autoRotate={true}
              autoRotateSpeed={3}
              enableDamping={true}
            />
            <Model path={path} />
          </Suspense>
        </Canvas>
      </Stack>  
      // </CanvasContainer>
    );
  };
  
  export default ModelCanvas;