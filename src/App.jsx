import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Listarticles from "./components/admin/articles/Listarticles";
import Listcategories from "./components/admin/categories/Listcategories";
import Listscategories from "./components/admin/scategories/Listscategories";
import Menu from "./components/admin/Menu";
import Listarticlescard from "./components/client/Listarticlescard";
import Cart from "./components/client/panier/Cart";
import NavScrolls from "./components/client/NavScrolls";
import "./style.css"
import Location from "./components/geolocation/Location";
import NearLocations from "./components/geolocation/NearLocations";

function App() {
 
  return (
    <>
     <Router>
    <Menu/>  
    {/*<NavScrolls/> */} 
<Routes>
<Route path="/articles"  element={<Listarticles/>}/>

<Route path="/"  element={<Listarticlescard/>}/>
<Route path='/cart' element={<Cart/>}/>
<Route path="/categories"  element={<Listcategories/>}/>
<Route path="/scategories"  element={<Listscategories/>}/>
<Route path="/location"  element={<Location/>}/>
<Route path="/nearLocations"  element={<NearLocations/>}/>
</Routes>
</Router>
    </>
  )
}

export default App
