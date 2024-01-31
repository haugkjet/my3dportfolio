export default function Scene2Box() {
  return (
    <group>
      <mesh position={[2, 2, 2]} rotation={[0, 0, 0]}>
        <boxGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" color="green" />
      </mesh>
    </group>
  );
}
