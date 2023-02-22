import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ProjectPage from './pages/ProjectPage';

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/project" element={<ProjectPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
