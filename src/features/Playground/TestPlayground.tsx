import { useDispatch } from 'react-redux';
import { Canvas } from '@react-three/fiber';
import { timeActions } from '@/business/Time/time';
import { Box } from '@/components';

export const TestPlayground: React.FC = () => {
  const dispatch = useDispatch();

  const startTime = (): void => {
    dispatch(timeActions.$start());
  };

  const stopTime = (): void => {
    dispatch(timeActions.$stop());
  };

  return (
    <Canvas style={{ height: '100%' }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box
        position={[-1.2, 0, 0]}
        onClick={startTime}
      />
      <Box
        position={[1.2, 0, 0]}
        onClick={stopTime}
      />
    </Canvas>
  );
};
