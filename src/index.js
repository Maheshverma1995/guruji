import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import reportWebVitals from './reportWebVitals';
import NavBarE from './componemtE/NavBarE';
import FooterE from './componemtE/FooterE';
import AcharayJiE from './componemtE/AcharayJiE';
import GalleryE from './componemtE/GalleryE';
import HomeE from './componemtE/HomeE';
import JainDharmE from './componemtE/JainDharmE';
import LiterallyE from './componemtE/LiterallyE';
import DiscipleE from './componemtE/DiscipleE';
import SermonE from './componemtE/SermonE';
import AcharayJi from './component/AcharayJi';
import Gallery from './component/Gallery';
import NavBar from './component/NavBar';
import Videos from './component/Videos';
import JainDharam from './component/JainDharam';
import {
  BrowserRouter,
  Route,
  Routes,
  // Link,
  // Outlet
} from 'react-router-dom';
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

const AppToggle = () => {
  const [showHindi, setShowHindi] = useState(true);

  const toggleLanguage = () => {
    setShowHindi(!showHindi);
  };

  return (
    <div>
      <div className='d-flex justify-content-end fixed-top'>
        <button type="button" className=' btn text-white ' style={{ width: "200px" }} onClick={toggleLanguage}>
          {showHindi ? ' Hindi' : ' English'}
        </button>
      </div>
      <React.StrictMode>
        {showHindi ? (
          <BrowserRouter>
            <NavBarE />
            <Routes>
              <Route path="/" element={<HomeE />} />
              <Route path="acharayJi" element={<AcharayJiE />} />
              <Route path='gallery' element={<GalleryE />} />
              <Route path='chaturmass' element={<LiterallyE />} />
              <Route path='videodetails' element={<SermonE />} />
              <Route path="jainDharam" element={<JainDharmE />} />
              <Route path="maharaj" element={<DiscipleE />} />
            </Routes>
            <Icons />
            <FooterE />
          </BrowserRouter>
        ) : (
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
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
        )}
      </React.StrictMode>
    </div>
  );
};

const root = document.getElementById('root');
ReactDOM.render(<AppToggle />, root);

reportWebVitals();
