import React, { useState, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { CatmullRomCurve3, Vector3 } from "three";
import { useControls } from "leva";
import { Html, ContactShadows, RoundedBox, Text } from "@react-three/drei";
import DataCell from "./components/DataCell";
import ChartjsPlane from "./components/chart/ChartjsPlane";
import axios from "axios";

import {
  BakeShadows,
  SoftShadows,
  OrbitControls,
  Svg,
} from "@react-three/drei";
import { Perf } from "r3f-perf";

import Barchart from "./components/chart/Barchart";
import BarchartMerged from "./components/chart/BarchartMerged";
import BarchartTextureAtlas from "./components/chart/BarchartTextureAtlas";
import BarchartV2 from "./components/chart/BarchartV2";
import MyPieChart from "./components/chart/MyPieChart";
import PieDoughnutChart from "./components/chart/PieDoughnutChart";

import MyLineChart from "./components/chart/MyLineChart";

import WallsAndFloor from "./components/WallsAndFloor";

import PanelExtruded from "./components/PanelExtruded";
import FloorPanelGrid from "./FloorPanelGrid";
import BehindWallPanelGrid from "./BehindWallPanelGrid";

import Lights from "./env/Lights";
import Ground from "./env/Ground";

import { useLoader } from "@react-three/fiber";

import { useTheme } from "../ThemeContext"; // Adjust the path as necessary

// Helper function to fetch cryptocurrency prices
const fetchPrice = async (currencyPair) => {
  try {
    const response = await axios.get(
      `https://api.coinbase.com/v2/prices/${currencyPair}/spot`
    );
    return response.data.data.amount;
  } catch (error) {
    console.error("Failed to fetch price:", error);
    return "Error";
  }
};

// A simple 3D cube component that displays the cryptocurrency price
const PriceCube2 = ({
  position,
  textposition,
  currencyPair,
  amount,
  name,
  assettype,
}) => {
  const [price, setPrice] = useState("Loading...");

  const { currentSettings } = useTheme();

  const posX = position.x;
  const posY = position.y + 0.22;
  const posZ = position.z;

  useEffect(() => {
    fetchPrice(currencyPair).then(setPrice);
  }, [currencyPair]);

  return (
    <>
      <PanelExtruded
        position={position}
        scale={[3, 3, 1]}
        color={currentSettings.extrudedPanelColor}
      />

      <Text
        position={textposition}
        rotation={[-Math.PI / 2, 0, 0]}
        color={"#007bff"}
        fontSize={0.3}
      >
        {name + "\n"}
        {assettype + "\n"}
        {currencyPair.split("-")[0]}: ${Number(price).toFixed(3)}
        {"\n\nAmount:" + amount}
        {"\n\nTotal:" + Number(amount * Number(price)).toFixed(3)}
      </Text>
    </>
  );
};

const CameraPathAnimation = () => {
  const { camera } = useThree();
  const curve = useMemo(
    () =>
      new CatmullRomCurve3([
        new Vector3(-25, 10, 40),
        new Vector3(0, 15, 40),
        new Vector3(25, 10, 40),
        new Vector3(1, 2, 30),
        new Vector3(-1, 2, 10),
        new Vector3(-25, 10, 40), // Looping back to start for a continuous path
      ]),
    []
  );

  // Leva checkbox to toggle animation
  const { animate } = useControls({ animate: false });

  useFrame(({ clock }) => {
    if (animate) {
      const t = (clock.getElapsedTime() * 0.04) % 1; // Adjust speed and ensure looping
      const position = curve.getPoint(t);
      camera.position.copy(position);
      camera.lookAt(0, 0, 0); // Adjust as needed to focus the camera
    }
  });

  return null;
};

const Box = ({ position, amount, asset, name, assettype }) => {
  const meshRef = useRef();

  return (
    <mesh position={position} ref={meshRef}>
      <boxGeometry args={[3, 0.5, 3]} />
      <meshStandardMaterial color="lightblue" />
      <Text
        position={[0, 0.5, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        color="black"
        anchorX="center"
        anchorY="middle"
        fontSize={0.4}
      >
        {`${name}\n${assettype}\n${asset}\n${amount}`}
      </Text>
    </mesh>
  );
};

export default function Scene7({ textureCube }) {
  const { currentSettings } = useTheme();

  let width = 35;
  let height = 15;
  let depth = 23;
  let thickness = 0.25;

  let baseposX = 0;
  let baseposY = 0;
  let baseposZ = 0;

  let marginX = 5;
  let marginZ = 5;

  const [assets, setAssets] = useState([
    {
      asset: "BTC-NOK",
      amount: 0.1,
      name: "Coinbase",
      assettype: "Crypto",
      total: 0,
    },
    {
      asset: "ETH-NOK",
      amount: 2.1,
      name: "Wallet",
      assettype: "Crypto",
      total: 0,
    },
    {
      asset: "SOL-NOK",
      amount: 3.1,
      name: "Wallet",
      assettype: "Crypto",
      total: 0,
    },

    {
      asset: "NOK-USD",
      amount: 4000,
      name: "HYBank1",
      assettype: "Cash",
      total: 0,
    },
    {
      asset: "NOK-USD",
      amount: 3000,
      name: "HYBank1",
      assettype: "Cash",
      total: 0,
    },
    {
      asset: "NOK-USD",
      amount: 50000,
      name: "Etrade",
      assettype: "Stocks",
      total: 0,
    },
    {
      asset: "NOK-USD",
      amount: 6000,
      name: "Vanguard",
      assettype: "MutualF",
      total: 0,
    },
  ]);

  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    const fetchPricesAndUpdateAssets = async () => {
      const updatedAssets = await Promise.all(
        assets.map(async (asset) => {
          if (asset.assettype === "Crypto") {
            try {
              const response = await axios.get(
                `https://api.coinbase.com/v2/prices/${asset.asset}/spot`
              );
              const price = parseFloat(response.data.data.amount);
              return {
                ...asset,
                total: asset.amount * price,
              };
            } catch (error) {
              console.error(`Error fetching price for ${asset.asset}:`, error);
              return asset;
            }
          } else
            return {
              ...asset,
              total: asset.amount,
            };
        })
      );
      setAssets(updatedAssets);

      // Calculate total sum
      const sum = updatedAssets.reduce((acc, asset) => acc + asset.total, 0);
      setTotalSum(sum);
    };

    fetchPricesAndUpdateAssets();
  }, []);

  return (
    <>
      {/*
  apartment: 'lebombo_1k.hdr',
  city: 'potsdamer_platz_1k.hdr',
  dawn: 'kiara_1_dawn_1k.hdr',
  forest: 'forest_slope_1k.hdr',
  lobby: 'st_fagans_interior_1k.hdr',
  night: 'dikhololo_night_1k.hdr',
  park: 'rooitou_park_1k.hdr',
  studio: 'studio_small_03_1k.hdr',
  sunset: 'venice_sunset_1k.hdr',
  warehouse: 'empty_warehouse_01_1k.hdr',
  */}

      <BakeShadows />
      <SoftShadows size={25} samples={50} focus={0.1} />

      <Perf position="top-left" />
      <OrbitControls dampingFactor={0.9} />

      <color attach="background" args={[currentSettings.background]} />
      <fog
        attach="fog"
        color={currentSettings.fogcolor}
        near={0.015}
        far={250}
      />

      <Lights />
      <Ground />

      <WallsAndFloor
        baseposX={baseposX}
        baseposY={baseposY}
        baseposZ={baseposZ}
        width={width}
        height={height}
        depth={depth}
        thickness={0.25}
      />

      {assets.map((asset, index) => (
        <Box
          key={index}
          position={[index * 5 - (assets.length - 1) * 2.5, 0.5, 10]}
          amount={asset.total.toFixed(2)}
          asset={asset.asset}
          name={asset.name}
          assettype={asset.assettype}
        />
      ))}

      <Box
        position={[0, 0, 17]}
        amount={Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "NOK",
        }).format(totalSum)}
        asset="Total:"
        name={""}
        assettype={""}
        color="gold"
      />

      {/*    <Barchart posx={0} posy={0} posz={0} textureCube={textureCube} 
    length={6}
    roty={0}
    title={"Basic"}
    maxheight={4}
/>*/}

      <CameraPathAnimation />

      {/*End New scene*/}
    </>
  );
}
