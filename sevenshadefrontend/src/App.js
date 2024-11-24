import {BrowserRouter,Routes,Route} from 'react-router-dom'
 
import AdminLOgin from './administrator/screens/AdminLogin';
import AdminDashboard from './administrator/screens/AdminDashboard';
import Home from './userinterface/screens/Home';
import Home2 from './userinterface/screens/Home2';
import ProductDetailDisplay from './userinterface/screens/ProductDetailDisplay';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route  element={<Home />} path={"/home"} /> 
      <Route  element={<Home2 />} path={"/home2"} /> 
      <Route  element={<ProductDetailDisplay />} path={"/productdetaildisplay"} /> 
        <Route  element={<AdminLOgin />} path={"/adminlogin"} />
        <Route  element={<AdminDashboard />} path={"/admindashboard/*"} />
        
      </Routes>
      </BrowserRouter>
     
      
    </div>
  );
}

export default App;