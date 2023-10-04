import React, { Suspense, useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'

import CanvasLoader from "../Loader"

const Ball = (props) => {

  const [decal] = useTexture([props.imgUrl]);
  const frontMeshRef = useRef();
  const backMeshRef = useRef();
  const minRotationSpeed = 0.0009;
  const maxRotationSpeed = 0.003;
  const initialRotation = Math.random() * Math.PI * 2;
  const [rotation, setRotation] = useState(initialRotation);
  const rotationSpeed = minRotationSpeed + Math.random() * (maxRotationSpeed - minRotationSpeed);


  // Use useEffect to start and stop the rotation animation
  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      setRotation((prevRotation) => prevRotation + rotationSpeed);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [rotationSpeed]);


  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      {/* Front side of the Ball */}
      <mesh castShadow receiveShadow scale={2.75} ref={frontMeshRef} rotation={[0, 0, rotation]}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#fff8eb" polygonOffsetFactor={-5} flatShading />
        <Decal map={decal} position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} flatShading />
      </mesh>
    </Float>
  );
}

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="demand" shadows gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>

  )
}

export default BallCanvas