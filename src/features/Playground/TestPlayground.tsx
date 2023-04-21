import { Mesh } from 'three';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useDispatch, useSelector } from 'react-redux';

import { timeActions, timeSelectors } from '@/business';
import { Box } from '@/components';

export const TestPlayground: React.FC = () => {
  const dispatch = useDispatch();
  const isTimeRunning = useSelector(timeSelectors.running);

  const startTime = (): void => {
    dispatch(timeActions.$$start());
  };

  const stopTime = (): void => {
    dispatch(timeActions.$$stop());
  };

  const mesh1 = useRef<Mesh>(null);
  const mesh2 = useRef<Mesh>(null);

  useFrame((_state, delta) => {
    if (mesh1.current && mesh2.current && isTimeRunning) {
      mesh1.current.rotation.x += delta;
      mesh2.current.rotation.y += delta;
    }
  });

  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box
        meshRef={mesh1}
        selected={!isTimeRunning}
        position={[-1.2, 0, 0]}
        onClick={startTime}
      />
      <Box
        meshRef={mesh2}
        selected={isTimeRunning}
        position={[1.2, 0, 0]}
        onClick={stopTime}
      />
    </>
  );
};
