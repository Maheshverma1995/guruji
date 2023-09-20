import React from 'react'
import AcharayJi from './component/AcharayJi';
import Gallery from './component/Gallery';
import NavBar from './component/NavBar';
import Videos from './component/Videos';
import JainDharam from './component/JainDharam';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoPage from './component/NoPage';
import Footer from './component/Footer';
import Home from './component/Home';
import News from './component/News';
import Mahotsav from './component/Mahotsav';
import JivenParichay from './component/JivenParichay';
import VideoDetails from './component/VideoDetails';
import Icons from './component/Icons';
import Maharaj from './component/Maharaj';
import Chaturmass from './component/Chaturmass';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="acharayJi" element={<AcharayJi />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='chaturmass' element={<Chaturmass />} />
        <Route path='mahotsav' element={<Mahotsav />} />
        <Route path='jivenparichay' element={<JivenParichay />} />
        <Route path='videodetails' element={<VideoDetails />} />
        <Route path='news' element={<News />} />
        <Route path="videos" element={<Videos />} />
        <Route path="jainDharam" element={<JainDharam />} />
        <Route path="maharaj" element={<Maharaj />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Icons />
      <Footer />
    </BrowserRouter>
    </div>
  )
}

export default App
