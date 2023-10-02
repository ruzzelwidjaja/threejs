import React from 'react'
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';

import state from '../store';

const Shirt = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('/shirt_baked.glb');
  
  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  // apply color smoothly
  useFrame((state, delta) => easing.dampC(materials.lambert1.color, snap.color, 0.25, delta));

  // to ensure the shirt updates/re-renders
  // this way react will re-render the model whenever the state changes
  const stateString = JSON.stringify(snap);

  return (
    <group key={stateString}>
      <mesh
        castShadow 
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
      > 
        {snap.isFullTexture && (
          <Decal
            position={[0,0,0]}
            rotation={[0,0,0]}
            scale={0.7} // 1 is for full scale
            map={fullTexture}
          />
        )}

        {snap.isLogoTexture && (
          <Decal
            position={[0,0.04,0.15]}
            rotation={[0,0,0]}
            scale={0.105}
            map={logoTexture}
            anisotropy={16} // change quality of the texture
            depthTest={false} // false to ensure it renders on top of other objects
            depthWrite={true}
          />
        )}

      </mesh>
    </group>


  )
  
}

export default Shirt