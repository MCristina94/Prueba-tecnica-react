import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Episode from './Components/Episode'
import Location from './Components/Location'
import Footer from './Components/Footer';
import DetailLocation from './Components/DetailLocation';
import DetailEpisode from './Components/DetailEpisode';
import Game from './Components/Game';

function App() {
  return (
    <>
      <header>
        <Header/>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/episode' element={<Episode/>}/>
          <Route path='/location' element={<Location/>}/>
          <Route path='/location/detail-location/:id' element={<DetailLocation/>}/>
          <Route path='/episode/detail-episode/:id' element={<DetailEpisode/>}/>
          <Route path='/game' element={<Game/>} />
        </Routes>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
   
  );
}

export default App;
