import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, PerspectiveCamera, Stars } from '@react-three/drei';
import * as THREE from 'three';
import Exhibit from './Exhibit';
import { Project } from '../types';
import { PROJECTS } from '../constants';

// Augment JSX.IntrinsicElements to include React Three Fiber elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: any;
      group: any;
      mesh: any;
      planeGeometry: any;
      meshStandardMaterial: any;
    }
  }
}

interface MuseumCanvasProps {
  activeProject: Project | null;
  onProjectSelect: (p: Project | null) => void;
}

const Rig = ({ activeProject }: { activeProject: Project | null }) => {
  const vec = new THREE.Vector3();
  
  useFrame((state) => {
    if (activeProject) {
      // Find the index to calculate position (matching the generation logic below)
      const index = PROJECTS.findIndex(p => p.id === activeProject.id);
      const xPos = index * 8; // Exhibits are spaced by 8 units
      
      // Move camera to focus on exhibit
      const targetPos = new THREE.Vector3(xPos, 0, 6);
      const lookAtPos = new THREE.Vector3(xPos, 0, 0);

      state.camera.position.lerp(targetPos, 0.05);
      state.camera.lookAt(lookAtPos);
    } else {
      // Overview mode
      // Gentle drift for overview
      const t = state.clock.getElapsedTime();
      state.camera.position.lerp(new THREE.Vector3(16, 2, 18 + Math.sin(t * 0.2) * 2), 0.02);
      state.camera.lookAt(16, 0, -20);
    }
  });

  return null;
};

const MuseumCanvas: React.FC<MuseumCanvasProps> = ({ activeProject, onProjectSelect }) => {
  
  const handleBgClick = () => {
    onProjectSelect(null);
  };

  return (
    <div className="w-full h-full bg-black">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={50} />
        
        <Rig activeProject={activeProject} />
        
        <ambientLight intensity={0.2} />
        
        {/* Main Gallery Hall */}
        <group>
          {PROJECTS.map((project, index) => (
            <Exhibit
              key={project.id}
              project={project}
              position={[index * 8, 0, 0]} // Linear gallery
              rotation={[0, 0, 0]}
              isActive={activeProject?.id === project.id}
              onClick={(p) => onProjectSelect(p)}
            />
          ))}
          
          {/* Floor */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[16, -4, 0]} receiveShadow onClick={handleBgClick}>
            <planeGeometry args={[100, 40]} />
            <meshStandardMaterial 
              color="#111" 
              roughness={0.1} 
              metalness={0.5} 
            />
          </mesh>
          
          {/* Back Wall */}
          <mesh position={[16, 10, -5]} receiveShadow>
             <planeGeometry args={[100, 40]} />
             <meshStandardMaterial color="#050505" />
          </mesh>

          {/* Decorative Particles/Stars for ambience */}
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        </group>

        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default MuseumCanvas;