export default function Player() {
    return (
        <>
      <mesh position={[0, 0.5, 0]} rotation={[0, 0, 0]} scale={[1, 1, 1]}>
      <boxGeometry attach="geometry" />
      <meshBasicMaterial attach="material" color="#8CABFF" />
    </mesh>
    </>
)}