import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "../pages/Login"
import SignUp from "../pages/SignUp"
import Feed from "../pages/Feed"
import SignUpAddress from "../pages/SignUpAddress"
import RestaurantDetails from "../pages/RestaurantDetails"
import Profile from "../pages/Profile"




const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<Feed/>}/>
            <Route path={"/login"} element={<Login/>} />
            <Route path={"/signup"} element={<SignUp/>}/>
            <Route path={"/signup/address"} element={<SignUpAddress />}/>
            <Route path={"/restaurants/:restaurantId"} element={<RestaurantDetails/>}/>
            <Route path={"/active-order"} element={<Profile/>}/>
            
        </Routes>
    </BrowserRouter>
    
  )
}

export default Router