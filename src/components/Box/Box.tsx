import { Mesh } from 'three';
import { useRef, useState } from 'react';
import { MeshProps, useFrame } from '@react-three/fiber';

type BoxProps = {
  position: MeshProps['position']; //
  onClick?: () => void;
};

export const Box: React.FC<BoxProps> = ({
  position, //
  onClick,
}) => {
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const mesh = useRef<Mesh>(null);
  // eslint-disable-next-line no-return-assign, @typescript-eslint/no-non-null-assertion
  useFrame((_state, delta) => (mesh.current!.rotation.x += delta));

  const handleClick = (): void => {
    setActive(!active);
    onClick?.();
  };

  return (
    <mesh
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={handleClick}
      onPointerOver={(): void => setHover(true)}
      onPointerOut={(): void => setHover(false)}
      position={position}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
};
