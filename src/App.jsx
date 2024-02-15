import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Home, About, Projects, Contact } from './pages';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <main className="bg-slate-300/20 min-h-[100vh]">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/vite-react-3dportfolio/" element={<Home />} />
          <Route path="/vite-react-3dportfolio/about" element={<About />} />
          <Route path="/vite-react-3dportfolio/projects" element={<Projects />} />
          <Route path="/vite-react-3dportfolio/contact" element={<Contact />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App