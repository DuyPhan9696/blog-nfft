import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home'
import News from '../pages/News'
import Scholarship from '../pages/Scholarship'
import Academy from '../pages/Academy';
import Careers from '../pages/Careers';
import AboutUs from '../pages/AboutUs';
import { PATH } from '../constants/paths';
import BlogContent from '../components/BlogContent/BlogContent';
function PublicRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to={`/${PATH.HOME}`} />} />
            <Route path={`/${PATH.HOME}`} key='home' element={<Home />} />
            <Route path={`/${PATH.NEWS}`} element={<News />} />
            <Route path={`/${PATH.SCHOLARSHIP}`} element={< Scholarship />} />
            <Route path={`/${PATH.ACADEMY}`} element={<Academy />} />
            <Route path={`/${PATH.CAREERS}`} element={<Careers />} />
            <Route path={`/${PATH.ABOUT_US}`} element={<AboutUs />} />
            <Route path={'/maskon-teamed-up-with-ancient8-to-empower-gamefi-scholars'} element={<BlogContent />} />
        </Routes>
    )
}
export default PublicRoutes;
