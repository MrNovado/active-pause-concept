import reactLogo from '@/assets/react.svg';
import viteLogo from '@/assets/vite.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <>
      <img
        src={reactLogo}
        className="logo react"
        alt="React logo"
      />
      <img
        src={viteLogo}
        className="logo"
        alt="Vite logo"
      />
    </>
  );
};

export default App;
