import React, { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";
import CanvasLoader from "../Loader";
import * as THREE from 'three';

const Ball = ({ icon, initialPosition, revolutionRadius, revolutionSpeed }) => {
  const decal = useMemo(() => new THREE.TextureLoader().load(icon), [icon]);
  const meshRef = useRef();

  // Use useFrame to update the position of the ball in each frame
  useFrame(({ clock }) => {
    // Calculate the new position based on the current time
    const elapsedTime = clock.getElapsedTime();
    const angle = elapsedTime * revolutionSpeed;
    const newX = Math.cos(angle) * revolutionRadius + initialPosition[0];
    const newY = Math.sin(angle) * revolutionRadius + initialPosition[1];
    meshRef.current.position.set(newX, newY, initialPosition[2]);
  });

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[10, 5, -5]} />
      <mesh castShadow receiveShadow scale={0.8} position={initialPosition} ref={meshRef}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1.2}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icons }) => {
  const centerIcon = icons[0]; // The first icon will be the center
  const otherIcons = icons.slice(1); // The rest of the icons will orbit the center

  return (
    <Canvas frameloop='always'
      shadows
      dpr={[1, 1]}
      camera={{ position: [0, 2, 8], fov: 80 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <group>
          {/* Center icon */}
          <Ball
            icon={centerIcon}
            initialPosition={[0, -2, -2]} // Center position
            revolutionRadius={0} // No orbit for the center
            revolutionSpeed={0} // No orbit for the center
          />
          {/* Other icons */}
          {otherIcons.map((icon, index) => {
            // Set the revolution radius and faster revolution speed for each ball
            const revolutionRadius = index * 0.5 + 1.5; // Adjust the range as needed
            const revolutionSpeed = 0.1 + index * 9 * 0.01; // Adjust the range as needed

            return (
              <Ball
                key={icon}
                icon={icon}
                initialPosition={[0, -2, -2]} // Center position
                revolutionRadius={revolutionRadius}
                revolutionSpeed={revolutionSpeed}
              />
            );
          })}
        </group>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
