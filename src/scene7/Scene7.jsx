import React, { useState, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { CatmullRomCurve3, Vector3 } from "three";
import { useControls } from "leva";
import { Html, ContactShadows, RoundedBox, Text } from "@react-three/drei";
import DataCell from "./components/DataCell";
import ChartjsPlane from "./components/chart/ChartjsPlane";
import axios from "axios";
import * as THREE from "three";

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

// Helper function to fetch cryptocurrency prices
const fetchMetalPrice = async (metal) => {
  try {
    const response = await axios.get(`https://api.gold-api.com/price/${metal}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch price:", error);
    return "Error";
  }
};

const data = [
  {
    asset: "USD-NOK",
    amount: 1.0,
    name: "USD-NOK",
    assettype: "Crypto",
    position: [-30, 0, 10],
  },
  {
    asset: "NOK-USD",
    amount: 1200,
    name: "M Funds",
    assettype: "Mutual F",
    position: [8, 0, 10],
  },
  {
    asset: "NOK-USD",
    amount: 1991801,
    name: "Santander",
    assettype: "Cash",
    position: [-3, 0, 10],
  },
];

const rawJsonString = JSON.stringify(data, null, 2);

function ClickableBox() {
  const [showDialog, setShowDialog] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const { camera } = useThree();

  const handleClick = () => {
    setShowDialog(!showDialog);
    setCopySuccess(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(rawJsonString).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    });
  };

  const buttonStyle = {
    marginTop: "10px",
    marginRight: "10px",
    padding: "5px 10px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
  };

  return (
    <>
      <Box args={[1, 1, 1]} onClick={handleClick}>
        <meshStandardMaterial color="hotpink" />
      </Box>
      {showDialog && (
        <Html
          center
          position={[0, 0, 0]}
          style={{ transform: `translateZ(${camera.position.z + 1}px)` }}
        >
          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "10px",
              width: "600px",
              maxHeight: "80vh",
              overflowY: "auto",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3>Raw JSON Data</h3>
            <pre
              style={{
                whiteSpace: "pre-wrap",
                wordWrap: "break-word",
                backgroundColor: "#f4f4f4",
                padding: "10px",
                borderRadius: "5px",
                fontSize: "14px",
              }}
            >
              {rawJsonString}
            </pre>
            <div>
              <button
                onClick={copyToClipboard}
                style={{ ...buttonStyle, backgroundColor: "#008CBA" }}
              >
                {copySuccess ? "Copied!" : "Copy JSON"}
              </button>
              <button onClick={handleClick} style={buttonStyle}>
                Close
              </button>
            </div>
          </div>
        </Html>
      )}
    </>
  );
}
// A simple 3D cube component that displays the cryptocurrency price
const MetalPriceCube = ({ position, metal }) => {
  const meshRef = useRef();
  const [data, setData] = useState("Loading...");

  const { currentSettings } = useTheme();

  useEffect(() => {
    fetchMetalPrice(metal).then(setData);
  }, [metal]);

  return (
    <mesh position={position} ref={meshRef}>
      <boxGeometry args={[3, 0.5, 3]} />
      <meshStandardMaterial color={currentSettings.extrudedPanelColor} />
      <Text
        position={[0, 0.26, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        color={currentSettings.floorTextColor}
        anchorX="center"
        anchorY="middle"
        fontSize={0.4}
      >
        {data.name} {data.price}
      </Text>
    </mesh>
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

const Box = ({ position, amount, total, asset, name, assettype, onClick }) => {
  const meshRef = useRef();

  const { currentSettings } = useTheme();

  return (
    <mesh position={position} ref={meshRef} onClick={onClick}>
      <boxGeometry args={[3, 0.5, 3]} />
      <meshStandardMaterial color={currentSettings.extrudedPanelColor} />
      <Text
        position={[0, 0.26, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        color={currentSettings.floorTextColor}
        anchorX="center"
        anchorY="middle"
        fontSize={0.27}
      >
        {`${asset}\n${assettype}\n${name}\n${amount}\n${total}`}
      </Text>
    </mesh>
  );
};

const LoadBox = ({ position, displaytext, onClick }) => {
  const meshRef = useRef();

  const { currentSettings } = useTheme();

  return (
    <mesh position={position} ref={meshRef} onClick={onClick}>
      <boxGeometry args={[4, 0.5, 3]} />
      <meshStandardMaterial color={currentSettings.extrudedPanelColor} />
      <Text
        position={[0, 0.26, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        color={currentSettings.floorTextColor}
        anchorX="center"
        anchorY="middle"
        fontSize={0.4}
      >
        {`${displaytext}`}
      </Text>
    </mesh>
  );
};

const FileInputBox = ({ onFileLoad }) => {
  const { camera, scene } = useThree();
  const fileInputRef = useRef();

  const handleClick = (event) => {
    console.log("Button clicked");
    event.stopPropagation();
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const jsonData = JSON.parse(e.target.result);
          onFileLoad(jsonData);
        } catch (error) {
          console.error("Error parsing JSON file:", error);
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <>
      <LoadBox
        position={[-8, 0, 30]}
        displaytext="Load custom file"
        onClick={handleClick}
      />
      <Html>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          accept=".json"
          onChange={handleFileChange}
        />
      </Html>
    </>
  );
};

const LoadExampleBox = ({ onExampleLoad }) => {
  const meshRef = useRef();

  const { currentSettings } = useTheme();

  const handleClick = async () => {
    try {
      const response = await fetch("data/assets.json");
      if (!response.ok) {
        throw new Error("Failed to load example file");
      }
      const jsonData = await response.json();
      onExampleLoad(jsonData);
    } catch (error) {
      console.error("Error loading example file:", error);
    }
  };

  return (
    <mesh position={[-13, -0.25, 30]} ref={meshRef} onClick={handleClick}>
      <boxGeometry args={[3, 1, 3]} />
      <meshStandardMaterial color={currentSettings.extrudedPanelColor} />
      <Text
        position={[0, 0.52, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        color={currentSettings.floorTextColor}
        anchorX="center"
        anchorY="middle"
        fontSize={0.3}
      >
        Load Example File
      </Text>
    </mesh>
  );
};

const TotalBox = ({ position, amount, asset }) => {
  const meshRef = useRef();

  const { currentSettings } = useTheme();

  return (
    <mesh position={position} ref={meshRef}>
      <boxGeometry args={[5, 0.5, 3]} />
      <meshStandardMaterial color={currentSettings.extrudedPanelColor} />
      <Text
        position={[0, 0.26, -0.5]}
        rotation={[-Math.PI / 2, 0, 0]}
        color={currentSettings.floorTextColor}
        anchorX="center"
        anchorY="middle"
        fontSize={0.4}
      >
        {`\n${asset}\n${amount}`}
      </Text>
    </mesh>
  );
};

const DistributionBox = ({ distribution }) => {
  const meshRef = useRef();

  const { currentSettings } = useTheme();

  return (
    <mesh position={[7, 0, 30]} ref={meshRef}>
      <boxGeometry args={[3, 0.5, 3]} />
      <meshStandardMaterial color={currentSettings.extrudedPanelColor} />
      <Text
        position={[0, 0.26, -1]}
        rotation={[-Math.PI / 2, 0, 0]}
        color={currentSettings.floorTextColor}
        anchorX="center"
        anchorY="middle"
        fontSize={0.3}
      >
        Asset allocation:
      </Text>
      {Object.entries(distribution).map(([assetType, percentage], index) => (
        <Text
          key={assetType}
          position={[0, 0.26, -index * 0.4 + 0.7]}
          rotation={[-Math.PI / 2, 0, 0]}
          color={currentSettings.floorTextColor}
          anchorX="center"
          anchorY="middle"
          fontSize={0.2}
        >
          {`${assetType}: ${percentage.toFixed(2)}%`}
        </Text>
      ))}
    </mesh>
  );
};

const PieChart = ({ distribution, position = [0, 0, 0], radius = 1.4 }) => {
  const groupRef = useRef();

  const pieData = useMemo(() => {
    let startAngle = 0;
    return Object.entries(distribution).map(([assetType, percentage]) => {
      const angle = (percentage / 100) * Math.PI * 2;
      const pieSlice = {
        startAngle,
        endAngle: startAngle + angle,
        percentage,
        assetType,
      };
      startAngle += angle;
      return pieSlice;
    });
  }, [distribution]);

  const colors = useMemo(
    () => [
      "red",
      "blue",
      "green",
      "yellow",
      "purple",
      "orange",
      "pink",
      "cyan",
    ],
    []
  );

  return (
    <group ref={groupRef} position={position} rotation={[Math.PI / 2, 0, 0]}>
      {pieData.map((slice, index) => (
        <group key={slice.assetType}>
          <mesh>
            <circleGeometry
              args={[
                radius,
                32,
                slice.startAngle,
                slice.endAngle - slice.startAngle,
              ]}
            />
            <meshStandardMaterial
              color={colors[index % colors.length]}
              side={THREE.DoubleSide}
            />
          </mesh>
          <Text
            position={[
              -Math.sin(
                slice.startAngle + (slice.endAngle - slice.startAngle) / 2
              ) *
                (radius / 2),
              -Math.cos(
                slice.startAngle + (slice.endAngle - slice.startAngle) / 2
              ) *
                (radius / 2),
              -0.05,
            ]}
            rotation={[Math.PI, 0, 0]}
            fontSize={0.1}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            {`${slice.assetType}\n${slice.percentage.toFixed(1)}%`}
          </Text>
        </group>
      ))}
    </group>
  );
};

export default function Scene7({ textureCube }) {
  const { currentSettings } = useTheme();

  let width = 85;
  let height = 30;
  let depth = 40;
  let thickness = 0.25;

  let baseposX = 0;
  let baseposY = 0;
  let baseposZ = 0;

  let marginX = 5;
  let marginZ = 5;

  const [assets, setAssets] = useState([]);

  const [totalSum, setTotalSum] = useState(0);

  const [distribution, setDistribution] = useState({});

  const [dataVersion, setDataVersion] = useState(0); // Add this line

  const processAssets = async (assetsData) => {
    try {
      // Clear existing assets
      setAssets([]);
      setTotalSum(0);
      setDistribution({});
      const updatedAssets = await Promise.all(
        assetsData.map(async (asset) => {
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

      // Calculate distribution
      const dist = updatedAssets.reduce((acc, asset) => {
        if (!acc[asset.assettype]) {
          acc[asset.assettype] = 0;
        }
        acc[asset.assettype] += (asset.total / sum) * 100;
        return acc;
      }, {});
      setDistribution(dist);

      // Increment data version to force re-render
      setDataVersion((prev) => prev + 1);
    } catch (error) {
      console.error("Error fetching assets data:", error);
    }
  };

  const handleFileLoad = (jsonData) => {
    processAssets(jsonData);
  };

  const handleExampleLoad = (jsonData) => {
    processAssets(jsonData);
  };

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

      <FileInputBox onFileLoad={handleFileLoad} />

      <LoadExampleBox
        position={[-15, 0, 30]}
        displaytext="Load example file"
        onExampleLoad={handleExampleLoad}
      />
      <LoadBox position={[-20, 0, 30]} displaytext="View example file" />

      {assets.map((asset, index) => (
        <Box
          key={`${dataVersion}-${index}`} // Change this line
          position={asset.position}
          total={Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "NOK",
          }).format(asset.total)}
          asset={asset.asset}
          name={asset.name}
          amount={asset.amount}
          assettype={asset.assettype}
        />
      ))}

      {totalSum > 0 && (
        <TotalBox
          key={`total-${dataVersion}`} // Add this line
          position={[0, 0, 30]}
          amount={Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "NOK",
          }).format(totalSum)}
          asset="Total:"
        />
      )}

      {Object.keys(distribution).length > 0 && (
        <DistributionBox
          key={`distribution-${dataVersion}`}
          distribution={distribution}
        />
      )}

      {Object.keys(distribution).length > 0 && (
        <PieChart
          distribution={distribution}
          key={`distributionpie-${dataVersion}`}
          position={[12, 0.5, 30]}
        />
      )}
      <Box position={[12, 0.15, 30]} />

      <MetalPriceCube position={[-34, 0, 10]} metal="XAU"></MetalPriceCube>
      <MetalPriceCube position={[-34, 0, 14]} metal="XAG"></MetalPriceCube>

      <ClickableBox />

      <CameraPathAnimation />

      {/*End New scene*/}
    </>
  );
}
