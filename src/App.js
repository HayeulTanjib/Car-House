import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home/Home';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import NotFound from './Components/Pages/NotFound/NotFound';
import Register from './Components/Authentication/Register/Register';
import Login from './Components/Authentication/Login/Login';
import RequireAuth from './RequireAuth/RequireAuth';
import AddCar from './Components/Pages/AddCar/AddCar';
import MyCar from './Components/Pages/MyCar/MyCar';
import ManageCar from './Components/Pages/ManageCar/ManageCar';
import Blogs from './Components/Pages/Blogs/Blogs';
import InventoryDetails from './Components/Pages/InventoryDetails/InventoryDetails';
import ManageInventory from './Components/Pages/ManageInventory/ManageInventory';
import AddInventory from './Components/Pages/AddInventory/AddInventory';


function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>

        <Route path='/addcar' element={
          <RequireAuth>
            <AddCar />
          </RequireAuth>
        }></Route>

        <Route path='/managecar' element={
          <RequireAuth>
            <ManageCar />
          </RequireAuth>
        }></Route>

        <Route path='/mycar' element={
          <RequireAuth>
            <MyCar />
          </RequireAuth>
        }></Route>

        <Route path='/inventory/:id' element={
          <RequireAuth>
            <InventoryDetails />
          </RequireAuth>
        }></Route>

        <Route path='/manage-inventory' element={
          <RequireAuth>
            <ManageInventory />
          </RequireAuth>
        }></Route>

        <Route path='/addinventory' element={
          <RequireAuth>
            <AddInventory />
          </RequireAuth>
        }></Route>

        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
