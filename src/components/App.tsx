import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AboutView } from '../views/About';
import { HomeView } from '../views/Home';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomeView name='John' />} />
        <Route path='/about' element={<AboutView />} />
        {/* <Route path='/art' element={<ArtView />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
