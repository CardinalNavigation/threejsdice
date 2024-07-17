import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { OctahedronGeometry } from "three";

function InteractiveBox(props) {
    const group = useRef();
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);

    // useFrame((state, delta) => (group.current.rotation.x += 0.009, group.current.rotation.y += 0.01));

    return (
        <group
            {...props}
            ref={group}
            scale={active ? 1.5 : 1}
            onClick={() => setActive(!active)}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}>
            <mesh >
                <octahedronGeometry args={[1, 0]} />
                <meshBasicMaterial color={hovered ? 'white' : 'white'} />            </mesh>
            <lineSegments>
                <edgesGeometry attach="geometry" args={[new OctahedronGeometry(1, 0)]} />
                <lineBasicMaterial color="black" />
            </lineSegments>
        </group>
    );
}

export default InteractiveBox