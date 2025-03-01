import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Navigator from './pages/Navigator';
import Marketplace from './pages/Marketplace';
import Connect from './pages/Connect';
import Store from './pages/Store';
import Blog from './pages/Blog';
import Documentation from './pages/Documentation';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="navigator" element={<Navigator />} />
        <Route path="marketplace" element={<Marketplace />} />
        <Route path="connect" element={<Connect />} />
        <Route path="store" element={<Store />} />
        <Route path="blog" element={<Blog />} />
        <Route path="docs" element={<Documentation />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;