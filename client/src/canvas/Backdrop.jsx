import { AccumulativeShadows, RandomizedLight } from '@react-three/drei'
import React, { useRef } from 'react'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'

const Backdrop = () => {
  const shadows = useRef(); // because need to reference shadows later on


  return (
    <AccumulativeShadows
      ref={shadows}
      temporal // will smooth out the edges of the shadow over time
      frames={60} // render in 60 frames
      alphaTest={0.5} // transparency
      scale={4} // REDUCE SCALE TO AVOID PIXELATED SHADOW
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]} // x, y, z
    >
      <RandomizedLight
        amount={4} 
        radius={9} // higher radius = softer light
        intensity={0.9}
        ambient={0.25}
        position={[5, 5, -10]}
        bias={0} // shadow bias
      />

      <RandomizedLight
        amount={4}
        radius={5}
        intensity={0.5}
        ambient={0.55}
        position={[-5, 5, -9]}
      />


    </AccumulativeShadows> 
  )
}

export default Backdrop