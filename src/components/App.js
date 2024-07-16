import "./App.css";
import { Canvas } from "@react-three/fiber";
import InteractiveBox from "./InteractiveBox/InteractiveBox";

function App() {
  return (
    <Canvas style={{ width: "100vw", height: "100vh" }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {/* <InteractiveBox position={[-1.2, 0, 0]} /> */}
      <InteractiveBox position={[0, 0, 0]} />
    </Canvas>
  );
}

export default App;
