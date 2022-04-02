import * as THREE from "three";
import React, { useRef, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
// import { TextureLoader, ACESFilmicToneMapping } from "three";
// import moonImg from "../../public/images/moon.png";
import Stars from "./Stars";
import Galaxy from "./Galaxy";
import { useTexture } from "@react-three/drei";

export default function HomeCanvas() {
  return (
    <Canvas
      camera={{ position: [-10, 0, -50], fov: 40, far: 100000 }}
      onCreated={({ gl }) => {
        gl.gammaInput = true;
        gl.toneMapping = THREE.ACESFilmicToneMapping;
      }}
    >
      <rectAreaLight
        intensity={1}
        position={[10, 10, 10]}
        width={10}
        height={1000}
        onUpdate={(self) => self.lookAt(new THREE.Vector3(0, 0, 0))}
      />
      <rectAreaLight
        intensity={1}
        position={[-10, -10, -10]}
        width={1000}
        height={10}
        onUpdate={(self) => self.lookAt(new THREE.Vector3(0, 0, 0))}
      />
      <ambientLight intensity={0.5} />
      <directionalLight color="white" position={[10, 8, -10]} />
      <Moon />
    </Canvas>
  );
}

function Moon() {
  const texture = useTexture("./images/moon.png");
  // console.log("this is texture:>", texture);
  const mesh = useRef();
  const group = useRef();
  useFrame(() => {
    mesh.current.rotation.y -= 0.01;
    group.current.rotation.y += 0.001;
  });
  return (
    <Suspense fallback={null}>
      {/* <directionalLight color="white" position={[10, 8, -10]} /> */}
      <group ref={group}>
        <Stars />
        {/* <Galaxy pos ition={[-8, 0, -40]} /> */}
        <mesh ref={mesh} position={[-10, 3, -25]}>
          <sphereGeometry args={[1, 50, 15]} />
          <meshStandardMaterial displacementScale={0.2} map={texture} />
        </mesh>
      </group>
    </Suspense>
  );
}
