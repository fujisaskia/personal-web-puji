import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './src/components/Navbar.jsx';
import AllPage from './src/slide/AllPage.jsx';
import '../src/App.css';
import Footer from './components/Footer.jsx';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/" element={<AllPage />} />
        <Route path="/" element={<Footer />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;