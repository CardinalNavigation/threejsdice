import "./App.css";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import InteractiveBox from "./InteractiveBox/InteractiveBox";
import Dice from "./Dice/Dice";

function App() {
  const dndDice = [4, 6, 8, 10, 12, 20, 100];
  const [diceValues, setDiceValues] = useState({
    d4: 4,
    d6: 6,
    d8: 8,
    d10: 10,
    d12: 12,
    d20: 20,
    d00: 100,
  });

  return (
    <>
      <div>
        {dndDice.map((sides, index) => (
          <span key={index} style={{ margin: "0 10px" }}>
            d{sides}
          </span>
        ))}
      </div>
      <Canvas style={{ width: "100vw", height: "100vh" }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        {dndDice.map((sides, index) => (
          <Dice key={index} position={[index * 2 - 6, -2, -3]} sides={sides} />
        ))}
        {/* <Dice position={[-6, -2, -3]} />
        <Dice position={[-4, -2, -3]} />
        <Dice position={[-2, -2, -3]} />
        <Dice position={[0, -2, -3]} />
        <Dice position={[2, -2, -3]} />
        <Dice position={[4, -2, -3]} />
        <Dice position={[6, -2, -3]} /> */}
      </Canvas>
    </>
  );
}

export default App;
