import { BrowserRouter, Routes, Route} from 'react-router-dom';

import { Landing } from './pages/Landing';
import TeachersList from './pages/TeachersList';
import TeachersForm from './pages/TeachersForm';

export const NavRoutes = () => {
    return (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/study' element={<TeachersList/>}/>
            <Route path='/give-classes' element={<TeachersForm/>}/>
          </Routes>
        </BrowserRouter>
    );
};