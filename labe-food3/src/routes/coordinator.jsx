export const goToFeed = (navigate) =>{
    navigate("/restaurants")
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

export const goBack = (navigate) => {
    navigate(-1)
}
 
export const goToProfile = (navigate) => {
    navigate(`/active-order`)
}