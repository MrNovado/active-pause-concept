import { Mesh } from 'three';
import { useRef, useState } from 'react';
import { MeshProps, useFrame } from '@react-three/fiber';

type BoxProps = {
  position: MeshProps['position']; //
};

export const Box: React.FC<BoxProps> = ({ position }) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef<Mesh>(null);
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // eslint-disable-next-line no-return-assign, @typescript-eslint/no-non-null-assertion
  useFrame((_state, delta) => (mesh.current!.rotation.x += delta));
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(): void => setActive(!active)}
      onPointerOver={(): void => setHover(true)}
      onPointerOut={(): void => setHover(false)}
      position={position}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
};
