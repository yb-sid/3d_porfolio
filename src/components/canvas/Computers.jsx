import { Suspense, useEffect, useState, useContext } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import CanvasLoader from "../Loader"



/** find and load different asset */
const Computers = ({ isMobile }) => {

  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={3} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.75}
        position={isMobile ? [-2, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.001, -0.2, -0.01]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {

    /** mediaQuery to check width */
    const mediaQuery = window.matchMedia('(max-width:700px)')

    setIsMobile(mediaQuery.matches) // set initial value 

    const handleMediaQuery = (event) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener('change', handleMediaQuery) // add event listener

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQuery) // remove event listener
    }
  }, [])


  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 2, 10], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas