
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import NotFound from './components/NotFound/NotFound';
import Reviews from './components/Reviews/Reviews';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="home" element={<Hero />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="blog" element={<Blog />} />
      <Route path="reviews" element={<Reviews />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </div>
  );
}

export default App;
