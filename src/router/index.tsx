import {Routes, Route} from 'react-router-dom';
import {HomePage, WorkPage, BlogPage, AboutPage, ContactPage} from "../pages/";

const RouteTag = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/work' element={<WorkPage />} />
            <Route path='/blog' element={<BlogPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact' element={<ContactPage />} />
        </Routes>
    )
}

export default RouteTag