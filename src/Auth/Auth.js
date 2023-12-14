import Cookies from "js-cookie"
import { useEffect } from "react";
import axios from "../api/axios";
import {  useNavigate } from "react-router-dom";
import Layout from "../Layout";
const Auth = ({children})=>{
    const token = Cookies.get('access_token');
    let isVerified = null
    const baseUrl = "http://127.0.0.1:3500/api";
    const navigate = useNavigate()
    useEffect(async ()=>{
        const data = {
            "cookie": token
        }
        const response = await axios.post(`${baseUrl}/verifyCookie/`, data)
        const isVerified = response.data["status"]
        if(!isVerified){
            navigate('/')
        }
      
    },[])


     if(isVerified){
        return(
            <div>
                {
                    children
                }
            </div>
        )
    }
    return(
        <div>
            <Layout/>
        </div>
    )
}

export default Auth