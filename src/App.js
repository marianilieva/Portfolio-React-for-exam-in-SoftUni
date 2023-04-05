import { Routes, Route } from 'react-router-dom';

import  Header  from './components/Header/Header';
import Dependencies from './components/Dependencies/Dependencies';

import AllDependencies from './components/AllDependencies/AllDependencies';
import Physical from './components/AllDependencies/Physical/Physical';
import Mind from './components/AllDependencies/Mind/Mind';
import Geographical from './components/AllDependencies/Geographical/Geographical';
import Social from './components/AllDependencies/Social/Social';
import Interests from './components/AllDependencies/Interests/Interests';
import Error from './components/AllDependencies/Error/Error';
import Login from './components/UserInteractions/Login/Login';

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
          <Route path='/geographical' element={<Geographical />} />
          <Route path='/social' element={<Social />} />
          <Route path='/interests' element={<Interests />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Error />} />
        </Routes>

        <Footer />
    </div>
  );
}

export default App;
