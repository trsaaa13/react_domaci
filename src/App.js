import logo from './logo.svg';
import './App.css';
import HomePage from './strane/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SortPage from './strane/SortPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sort" element={<SortPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
