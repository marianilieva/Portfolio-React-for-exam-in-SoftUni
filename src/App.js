import  Header  from './components/Header/Header';
import Dependencies from './components/Dependencies/Dependencies';
import Footer from './components/Footer/Footer';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <div className="App">
        <Menu />

        <Routes>
          <Route path='/' element={<>
            <Header />
            <Dependencies />
          </>} />
          <Route path='/physical' element={<div />} />
          <Route path='/' element={<div />} />
          <Route path='/' element={<div />} />
          <Route path='/' element={<div />} />
          <Route path='/' element={<div />} />
          <Route path='/' element={<div />} />
        </Routes>

        <Footer />
    </div>
  );
}

export default App;
