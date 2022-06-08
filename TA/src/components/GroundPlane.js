export default function GroundPlane() {
  return (
    <mesh rotation={[5, 0, 0]} position={[0, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial attach="material" color="white" />
    </mesh>
  );
}
