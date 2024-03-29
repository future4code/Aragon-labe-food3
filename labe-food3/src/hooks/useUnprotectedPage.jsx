import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import {  goToLoginPage } from "../routes/coordinator"

const useUnprotectedPage = () => {
    const navigate = useNavigate()

    useEffect(()=>{
        const token= localStorage.getItem("token")

        if(token){
            goToLoginPage(navigate)
        }
    }, [])

}

export default useUnprotectedPage