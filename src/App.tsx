import { Canvas } from '@react-three/fiber';
import { Box } from '@/components';

const App: React.FC = () => {
  return (
    <Canvas style={{ height: '100%' }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  );
};

export default App;
