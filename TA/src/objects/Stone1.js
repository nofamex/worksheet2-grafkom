/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/stone.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Cube.geometry}
        material={materials["Material.001"]}
        position={[-5, 1, 0]}
        rotation={[-Math.PI, 4, -Math.PI]}
      >
        {props.wireframe && (
          <meshBasicMaterial attach="material" color="hotpink" wireframe />
        )}
      </mesh>
    </group>
  );
}

useGLTF.preload("/stone.glb");
