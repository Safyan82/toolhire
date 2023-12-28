import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { LandingPage } from './page/landingpage/landing.page';
import { ServicePage } from './page/service/service';
import { ToolDetail } from './page/service/toolDetail';
import { ContactPage } from './page/contact/contact.page';
import { Tool } from './page/Admin/tools';
import { AddTool } from './page/Admin/addTool';
import { Review } from './page/Admin/review';
import { Login } from './page/Admin/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/admin' element={<Login />} />
        
        <Route path='/' element={<LandingPage />} />
        <Route path='/service' element={<ServicePage />} />
        <Route path='/detail/:id' element={<ToolDetail />} />
        <Route path='/contact' element={<ContactPage />} />

        <Route path='/tool' element={<Tool/>} />
        <Route path='/addTool' element={<AddTool/>} />
        <Route path='/review' element={<Review />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
