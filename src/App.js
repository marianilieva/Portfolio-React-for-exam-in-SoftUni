import { Routes, Route } from 'react-router-dom';

import  Header  from './components/Header/Header';
import Dependencies from './components/Dependencies/Dependencies';
import AllDependencies from './components/AllDependencies/AllDependencies';
import Physical from './components/AllDependencies/Physical/Physical';
import Mind from './components/AllDependencies/Mind/Mind';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';

import './App.css';

function App() {
  return (
    <div className="App">
        <Menu />

        <Routes>
          <Route path='/' element={<>
            <Header />
            <Dependencies />
            <AllDependencies />
          </>} />
          <Route path='/physical' element={<Physical />} />
          <Route path='/mind' element={<Mind />} />
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
