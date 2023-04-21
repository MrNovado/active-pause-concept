import { Canvas } from '@react-three/fiber';
import { Provider } from 'react-redux';

import { store } from '@/business/store';
import { TestPlayground } from '@/features';

export const App: React.FC = () => {
  return (
    <Canvas
      style={{ height: '100%' }}
      camera={{ isPerspectiveCamera: true, fov: 120 }}
    >
      <Provider store={store}>
        <TestPlayground />
      </Provider>
    </Canvas>
  );
};
