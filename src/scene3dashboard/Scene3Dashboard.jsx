import Barchart from "../Barchart";
import { RoundedBox, Text } from "@react-three/drei";

export default function Scene3Dashboard({ textureCube }) {
  return (
    <>
      <RoundedBox
        args={[3, 0.05, 3]}
        position={[0, 0, 5]}
        radius={0.01}
        smoothness={0.1}
      >
        <meshStandardMaterial color="green" metalness={0.9} roughness={0.7} />
      </RoundedBox>

      <RoundedBox
        args={[2, 0.05, 4]}
        position={[-10, 0, 5]}
        radius={0.01}
        smoothness={0.1}
      >
        <meshStandardMaterial color="yellow" metalness={0.9} roughness={0.7} />
      </RoundedBox>
      <RoundedBox
        args={[4, 0.05, 2]}
        position={[5, 0, 5]}
        radius={0.01}
        smoothness={0.1}
      >
        <meshStandardMaterial color="red" metalness={0.9} roughness={0.7} />
      </RoundedBox>
      <RoundedBox
        args={[3, 0.05, 1]}
        position={[-12, 8, -0.7]}
        rotation={[Math.PI / 2, Math.PI / 2, 0]}
        radius={0.01}
        smoothness={0.1}
      >
        <meshStandardMaterial color="red" metalness={0.9} roughness={0.7} />
      </RoundedBox>

      <Barchart
        posx={10}
        posy={0}
        posz={-1}
        length={15}
        roty={0}
        title={"Sales 2024"}
      />
      <RoundedBox
        args={[22.5, 12, 0.25]}
        position={[-2, 6, -0.7]}
        radius={0.1}
        smoothness={4}
      >
        <meshStandardMaterial
          color="white"
          transparent={true}
          opacity={0.7}
          metalness={0.3}
          roughness={0.015}
          castShadow={false}
          doubleSided={true}
        />
        <Text
          position={[-9, 4.5, 0.2]}
          rotation={[0, 0, 0]}
          color={"white"}
          fontSize={0.6}
        >
          Acme Corp
        </Text>
      </RoundedBox>
      <RoundedBox
        args={[22.5, 12, 0.25]}
        position={[-2, 0.1, 5]}
        rotation={[-Math.PI / 2, 0, 0]}
        radius={0.1}
        smoothness={4}
      >
        <meshStandardMaterial
          color="white"
          transparent={true}
          opacity={0.7}
          metalness={0.3}
          roughness={0.015}
          castShadow={false}
          doubleSided={true}
        />
        <Text
          position={[-9, -5.5, 0.15]}
          rotation={[0, 0, 0]}
          color={"white"}
          fontSize={0.6}
        >
          Yearly Results
        </Text>
      </RoundedBox>
    </>
  );
}
