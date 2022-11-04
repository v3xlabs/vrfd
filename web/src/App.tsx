import { Route, Routes } from 'react-router';

import { HomePage } from './pages/home';

function App() {
  return (
    <div className="w-full max-w-full min-h-screen bg-white">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
