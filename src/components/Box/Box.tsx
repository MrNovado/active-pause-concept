import { useState } from 'react';
import { MeshProps } from '@react-three/fiber';

type BoxProps = {
  position: MeshProps['position']; //
  selected?: boolean;
  meshRef?: MeshProps['ref'];
  onClick?: () => void;
};

export const Box: React.FC<BoxProps> = ({
  meshRef,
  selected = false,
  position, //
  onClick,
}) => {
  const [hovered, setHover] = useState(false);

  return (
    <mesh
      ref={meshRef}
      scale={selected ? 1.5 : 1}
      onClick={onClick}
      onPointerOver={(): void => setHover(true)}
      onPointerOut={(): void => setHover(false)}
      position={position}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={
          selected && hovered //
            ? 'hotpink'
            : 'orange'
        }
      />
    </mesh>
  );
};
