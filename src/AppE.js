import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBarE from './componemtE/NavBarE'
import Icons from './component/Icons'
import FooterE from './componemtE/FooterE'
import AcharayJiE from './componemtE/AcharayJiE'
import GalleryE from './componemtE/GalleryE'
import HomeE from './componemtE/HomeE'
import JainDharmE from './componemtE/JainDharmE'
import LiterallyE from './componemtE/LiterallyE'
import DiscipleE from './componemtE/DiscipleE'
import SermonE from './componemtE/SermonE'



const AppE = () => {
  return (
    <div>
      <BrowserRouter>
      <NavBarE></NavBarE>
      <Routes>
      
      <Route path="/" element={<HomeE />}></Route>
        <Route path="acharayJie" element={<AcharayJiE />} />
        <Route path='gallerye' element={<GalleryE />} />
        <Route path='chaturmasse' element={<LiterallyE />} />
        <Route path='videodetailse' element={<SermonE />} />
        <Route path="jainDharame" element={<JainDharmE />} />
        <Route path="maharaje" element={<DiscipleE />} />
        
        </Routes>
        <Icons />
        <FooterE/>
        </BrowserRouter>
    </div>
  )
}

export default AppE
