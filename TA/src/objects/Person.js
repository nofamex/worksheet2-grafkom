/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/person.glb");
  const { actions } = useAnimations(animations, group);

  const [position, setPosition] = useState({
    x: 1.5,
    y: 1.9,
    z: -3,
    r: 3,
  });

  useEffect(() => {
    if (!props.play) actions["ArmatureAction.001"].stop();
    else actions["ArmatureAction.001"].play();
  }, [props.play]);

  useEffect(() => {
    const setPoint = (event) => {
      if (props.selected !== "human") {
        setPosition(position);
        return;
      }

      switch (event.keyCode) {
        case 101:
          setPosition({
            x: position.x,
            y: position.y,
            z: position.z,
            r: position.r + 1,
          });
          return;
        case 113:
          setPosition({
            x: position.x,
            y: position.y,
            z: position.z,
            r: position.r - 1,
          });
          return;
        case 119:
          setPosition({
            x: position.x,
            y: position.y + 1,
            z: position.z,
            r: position.r,
          });
          return;
        case 115:
          setPosition({
            x: position.x,
            y: position.y - 1,
            z: position.z,
            r: position.r,
          });
          return;
        case 100:
          setPosition({
            x: position.x + 1,
            y: position.y,
            z: position.z,
            r: position.r,
          });
          return;
        case 97:
          setPosition({
            x: position.x - 1,
            y: position.y,
            z: position.z,
            r: position.r,
          });
          return;
        case 122:
          setPosition({
            x: position.x,
            y: position.y,
            z: position.z + 1,
            r: position.r,
          });
          return;
        case 120:
          setPosition({
            x: position.x,
            y: position.y,
            z: position.z - 1,
            r: position.r,
          });
          return;
      }
    };

    window.addEventListener("keypress", setPoint);
  }, [props.selected, position]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Armature"
          position={[position.x, position.y, position.z]}
          scale={0.44}
          rotation={[-Math.PI, position.r, -Math.PI]}
        >
          <group name="Bone001" position={[0.03, -0.02, -0.02]}>
            <group
              name="Bone002"
              position={[0, 2.32, 0]}
              rotation={[-0.21, 0.02, 0]}
            >
              <mesh
                name="Cube"
                geometry={nodes.Cube.geometry}
                material={materials.Material}
                position={[0, 0.06, 0.02]}
              >
                {props.wireframe && (
                  <meshBasicMaterial
                    attach="material"
                    color="hotpink"
                    wireframe
                  />
                )}
              </mesh>
            </group>
            <group
              name="Bone006"
              position={[0.44, -0.24, 0.01]}
              rotation={[2.55, -1.57, 0]}
            >
              <group
                name="Bone007"
                position={[0, 0.98, 0]}
                rotation={[-0.02, 0, -0.43]}
              >
                <mesh
                  name="Cube009"
                  geometry={nodes.Cube009.geometry}
                  material={materials.Material}
                  position={[-0.04, 1.03, -0.35]}
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={[1, 0.5, 1]}
                >
                  {props.wireframe && (
                    <meshBasicMaterial
                      attach="material"
                      color="hotpink"
                      wireframe
                    />
                  )}
                </mesh>
              </group>
              <mesh
                name="Cube002"
                geometry={nodes.Cube002.geometry}
                material={materials.Material}
                position={[-0.02, -0.02, 0.44]}
                rotation={[Math.PI, -1.57, 0]}
                scale={[1, 0.5, 1]}
              >
                {props.wireframe && (
                  <meshBasicMaterial
                    attach="material"
                    color="hotpink"
                    wireframe
                  />
                )}
              </mesh>
            </group>
            <group
              name="Bone008"
              position={[-0.38, -0.24, 0.02]}
              rotation={[-2.74, -Math.PI / 2, 0]}
            >
              <group
                name="Bone009"
                position={[0, 0.98, 0]}
                rotation={[0.01, 0, -0.44]}
              >
                <mesh
                  name="Cube003"
                  geometry={nodes.Cube003.geometry}
                  material={materials.Material}
                  position={[0.38, 1.04, 0.04]}
                  scale={[1, 0.5, 1]}
                >
                  {props.wireframe && (
                    <meshBasicMaterial
                      attach="material"
                      color="hotpink"
                      wireframe
                    />
                  )}
                </mesh>
              </group>
              <mesh
                name="Cube008"
                geometry={nodes.Cube008.geometry}
                material={materials.Material}
                position={[-0.02, -0.02, -0.36]}
                rotation={[Math.PI, -1.57, 0]}
                scale={[1, 0.5, 1]}
              >
                {props.wireframe && (
                  <meshBasicMaterial
                    attach="material"
                    color="hotpink"
                    wireframe
                  />
                )}
              </mesh>
            </group>
            <group
              name="Bone_shoulde_left"
              position={[0, 2.32, 0]}
              rotation={[-1.89, -0.3, 1.48]}
            >
              <group
                name="Bone010"
                position={[0.01, 1.16, -0.01]}
                rotation={[-1.22, -0.04, 0.48]}
              >
                <group
                  name="Bone011"
                  position={[0, 0.83, 0]}
                  rotation={[0.01, 0.05, 0.73]}
                >
                  <mesh
                    name="Cube006"
                    geometry={nodes.Cube006.geometry}
                    material={materials.Material}
                    position={[0.39, 0.96, 0.1]}
                    scale={[1, 0.5, 1]}
                  >
                    {props.wireframe && (
                      <meshBasicMaterial
                        attach="material"
                        color="hotpink"
                        wireframe
                      />
                    )}
                  </mesh>
                </group>
                <mesh
                  name="Cube005"
                  geometry={nodes.Cube005.geometry}
                  material={materials.Material}
                  position={[-0.02, -0.21, -0.3]}
                  rotation={[Math.PI, -1.57, 0]}
                  scale={[1, 0.5, 1]}
                >
                  {props.wireframe && (
                    <meshBasicMaterial
                      attach="material"
                      color="hotpink"
                      wireframe
                    />
                  )}
                </mesh>
              </group>
            </group>
            <group
              name="_Bone_Shoulder_right"
              position={[0, 2.32, 0]}
              rotation={[-1.86, 0.27, -1.49]}
            >
              <group
                name="Bone003"
                position={[0, 1.27, -0.01]}
                rotation={[2, -0.18, 2.54]}
              >
                <group
                  name="Bone004"
                  position={[0, 0.79, 0]}
                  rotation={[-0.02, 0.02, 0.32]}
                >
                  <mesh
                    name="Cube007"
                    geometry={nodes.Cube007.geometry}
                    material={materials.Material}
                    position={[-0.41, 0.94, 0.01]}
                    scale={[1, 0.5, 1]}
                  >
                    {props.wireframe && (
                      <meshBasicMaterial
                        attach="material"
                        color="hotpink"
                        wireframe
                      />
                    )}
                  </mesh>
                </group>
                <mesh
                  name="Cube004"
                  geometry={nodes.Cube004.geometry}
                  material={materials.Material}
                  position={[-0.02, -0.25, 0.4]}
                  rotation={[Math.PI, -1.57, 0]}
                  scale={[1, 0.5, 1]}
                >
                  {props.wireframe && (
                    <meshBasicMaterial
                      attach="material"
                      color="hotpink"
                      wireframe
                    />
                  )}
                </mesh>
              </group>
            </group>
            <mesh
              name="Cube001"
              geometry={nodes.Cube001.geometry}
              material={materials.Material}
              position={[0, 1.18, 0.02]}
            >
              {props.wireframe && (
                <meshBasicMaterial
                  attach="material"
                  color="hotpink"
                  wireframe
                />
              )}
            </mesh>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/person.glb");