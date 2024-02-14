import React, { useState, useEffect } from "react";
import Lights from "../Lights";
import Ground from "../Ground";

import {} from "@react-three/drei";
import {
  BakeShadows,
  SoftShadows,
  OrbitControls,
  Text,
} from "@react-three/drei";
import { Perf } from "r3f-perf";

import axios from "axios";
import MyPieChart from "../MyPieChart";

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
const PriceCube = ({ position, currencyPair }) => {
  const [price, setPrice] = useState("Loading...");

  useEffect(() => {
    fetchPrice(currencyPair).then(setPrice);
  }, [currencyPair]);

  return (
    <mesh position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="red" />
      <Text position={[0, 0.3, 0.51]} fontSize={0.1} color={"black"}>
        {currencyPair.split("-")[0]}: ${price}
      </Text>
    </mesh>
  );
};

function Scene2Box() {
  // Sample data for the pie chart
  const data = [
    { value: 12.5, color: "red" },
    { value: 12.5, color: "green" },
    { value: 25, color: "blue" },
    { value: 25, color: "yellow" },
    { value: 25, color: "lightblue" },
  ];

  return (
    <>
      <Perf position="top-left" />
      <OrbitControls dampingFactor={0.9} />

      <Ground />
      <Lights />
      <PriceCube position={[-2, 0, 0]} currencyPair="BTC-USD" />
      <PriceCube position={[0, 0, 0]} currencyPair="ETH-USD" />
      <PriceCube position={[2, 0, 0]} currencyPair="ADA-USD" />
    </>
  );
}

export default Scene2Box;
