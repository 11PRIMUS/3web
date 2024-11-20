import { useAnimations, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import space_boi from "../assets/3d/optimus_prime.glb";  // GLB file path
import CanvasLoader from "./Loader";  // A loader component

const Spaceman = ({ scale, position, rotationY }) => {
  const spacemanRef = useRef();
  const { scene, animations } = useGLTF(space_boi);
  const { actions } = useAnimations(animations, spacemanRef);

  useEffect(() => {
    if (animations && animations.length > 0) {
      console.log("Available animations:", animations.map(anim => anim.name));
      // Play the default animation, for example "Idle"
      if (actions["Idle"]) {
        actions["Idle"].play();
      } else {
        console.warn("No Idle animation found!");
      }
    } else {
      console.warn("No animations found in this GLB file.");
    }
  }, [animations, actions]);

  return (
    <mesh ref={spacemanRef} position={position} scale={scale} rotation={[0, rotationY, 0]}>
      {/* The model will rotate based on rotationY */}
      <primitive object={scene} />
    </mesh>
  );
};

const SpacemanCanvas = ({ scrollContainer }) => {
  const [scale, setScale] = useState([0.005, 0.005, 0.005]); // Default scale as per the 'else' statement
  const [position, setPosition] = useState([0.2, -0.7, 0]); // Default position as per the 'else' statement
  const [rotationY, setRotationY] = useState(0);  // To store the Y-axis rotation based on cursor

  useEffect(() => {
    const handleResize = () => {
      // Since all window sizes should use the same scale and position
      setScale([0.005, 0.005, 0.005]); // Set the best fit scale for all screens
      setPosition([0.2, -0.7, 0]); // Set the best fit position for all screens
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [scrollContainer]);

  // Add a mousemove listener to track cursor position
  useEffect(() => {
    const handleMouseMove = (event) => {
      const mouseX = event.clientX / window.innerWidth;  // Normalize the X position to a 0-1 range
      const rotation = (mouseX - 0.5) * 2 * Math.PI;  // Map to a rotation range (from -PI to PI)
      setRotationY(rotation);  // Set the rotation based on cursor position
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Canvas className={`w-full h-screen bg-transparent z-10`} camera={{ near: 0.1, far: 1000 }}>
      <Suspense fallback={<CanvasLoader />}>
        <directionalLight position={[1, 1, 1]} intensity={2} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 5, 10]} intensity={2} />
        <spotLight position={[0, 50, 10]} angle={0.15} penumbra={1} intensity={2} />
        <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />
        <Spaceman scale={scale} position={position} rotationY={rotationY} />
      </Suspense>
    </Canvas>
  );
};

export default SpacemanCanvas;
