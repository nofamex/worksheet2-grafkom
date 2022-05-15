export default function Sphere() {
  return (
    <mesh position={[0, 5, 5]} rotation={[0, 0, 0]}>
      <sphereGeometry attach="geometry" args={[1, 3, 3]} />
      <meshStandardMaterial
        attach="material"
        color="white"
        transparent
        roughness={0.1}
        metalness={0.1}
      />
    </mesh>
  );
}
