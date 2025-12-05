import React, { useRef, useState, useMemo } from 'react';
import { useFrame, ThreeEvent } from '@react-three/fiber';
import { Text, Image, useCursor } from '@react-three/drei';
import * as THREE from 'three';
import { Project } from '../types';

// Augment JSX.IntrinsicElements to include React Three Fiber elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      mesh: any;
      boxGeometry: any;
      meshStandardMaterial: any;
      planeGeometry: any;
      spotLight: any;
    }
  }
}

interface ExhibitProps {
  project: Project;
  position: [number, number, number];
  rotation: [number, number, number];
  isActive: boolean;
  onClick: (project: Project, position: [number, number, number], rotation: [number, number, number]) => void;
}

const Exhibit: React.FC<ExhibitProps> = ({ project, position, rotation, isActive, onClick }) => {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHover] = useState(false);
  
  useCursor(hovered);

  // Smooth hover animation
  useFrame((state, delta) => {
    if (meshRef.current) {
      const targetScale = hovered || isActive ? 1.05 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), delta * 10);
    }
  });

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    onClick(project, position, rotation);
  };

  const frameColor = useMemo(() => isActive ? "#ef4444" : "#333", [isActive]);

  return (
    <group 
      ref={meshRef} 
      position={position} 
      rotation={rotation}
      onClick={handleClick}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      {/* Frame */}
      <mesh position={[0, 0, -0.1]}>
        <boxGeometry args={[4.2, 3.2, 0.2]} />
        <meshStandardMaterial color={frameColor} roughness={0.5} metalness={0.8} />
      </mesh>

      {/* Artwork (Image) */}
      <Image 
        url={project.imageUrl}
        position={[0, 0, 0.05]}
        scale={[4, 3]}
        toneMapped={false}
      />

      {/* Plaque */}
      <group position={[0, -2.2, 0]}>
        <mesh>
          <planeGeometry args={[2, 0.8]} />
          <meshStandardMaterial color="#1a1a1a" transparent opacity={0.8} />
        </mesh>
        <Text
          position={[0, 0.15, 0.01]}
          fontSize={0.2}
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={1.8}
        >
          {project.title.toUpperCase()}
        </Text>
        <Text
          position={[0, -0.2, 0.01]}
          fontSize={0.12}
          color="#aaa"
          anchorX="center"
          anchorY="middle"
        >
          {project.year}
        </Text>
      </group>

      {/* Spotlight for this exhibit */}
      <spotLight
        position={[0, 4, 4]}
        angle={0.5}
        penumbra={0.5}
        intensity={isActive ? 8 : 2}
        distance={10}
        color={isActive ? "#ffddaa" : "white"}
        target={meshRef.current || undefined}
      />
    </group>
  );
};

export default Exhibit;