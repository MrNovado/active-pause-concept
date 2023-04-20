import { Provider } from 'react-redux';
import { store } from '@/business/store';
import { TestPlayground } from './features';

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <TestPlayground />
    </Provider>
  );
};
