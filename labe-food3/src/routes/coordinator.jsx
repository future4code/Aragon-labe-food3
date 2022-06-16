
export const goToFeed = (navigate) =>{
    navigate("/")
}

export const goToLogin = (navigate) =>{
    navigate("/login")
}

export const goToSignUp = (navigate) =>{
    navigate("/signup")
}

export const goToSignAddress = (navigate) =>{
    navigate("/signup/address")
}
export const goToRestaurantDetail = (navigate, restaurantId) => {
    navigate(`/restaurants/${restaurantId}`)
}

export const goToShoppingCart = (navigate, restaurantId) => {
    navigate(`/restaurants/${restaurantId}/order`)
}
export const goToProfile = (navigate) => {
    navigate(`/active-order`)
}