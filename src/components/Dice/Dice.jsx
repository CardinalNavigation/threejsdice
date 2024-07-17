import { useFrame } from "@react-three/fiber"
import { useRef, useState } from "react";
import { BoxGeometry } from "three";

function Dice(props) {
    const meshRef = useRef();

    useFrame((state, delta) => {
        meshRef.current.rotation.x += 0.002;
        meshRef.current.rotation.y += 0.003;
    })

    return (
        <group ref={meshRef} position={props.position}>
            <mesh >
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color={props.color || "white"} />
            </mesh >
            <lineSegments>
                <edgesGeometry attach="geometry" args={[new BoxGeometry(1, 1, 1)]} />
                <lineBasicMaterial color="black" />
            </lineSegments>
        </group>
    )
}

export default Dice