import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import SignUpPage from "../pages/SignUpPage"
import ProfilePage from "../pages/ProfilePage"
import AddressPage from "../pages/AddressPage"
import RestaurantDetailsPage from "../pages/RestaurantDetailsPage"
import CartPage from "../pages/CartPage"
import ErrorPage from "../pages/ErrorPage"
import SplashScreen from "../pages/splashScreen/SplashScreen"
import LoginPage from "../pages/LoginPage"
import EditProfilePage from "../pages/EditProfilePage.jsx"
import EditAddressPage from "../pages/EditAddressPage"

function Router() {
  return (
    <BrowserRouter>
        <Routes>
          <Route index element={<SplashScreen/>} />
            <Route path={"/home"} element={<HomePage />} />
            <Route path={"/login"} element={<LoginPage />} />
            <Route path={"/signup"} element={<SignUpPage />} />
            <Route path={"/profile"} element={<ProfilePage />} />
            <Route path={"address"} element={<AddressPage />}/>
            <Route path={"/restaurant/:id"} element={<RestaurantDetailsPage />} />
            <Route path={"/cart"} element={<CartPage />} />
            <Route path={"/editaddress"} element={<EditAddressPage />} />
            <Route path={"/editprofile"} element={<EditProfilePage />} />
            <Route path={"*"} element={<ErrorPage />} />          
        </Routes>
    </BrowserRouter>    
  )
}

export default Router