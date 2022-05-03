import React,{useState,useEffect} from 'react'
import {useParams} from "react-router-dom"
import {request,Requestfunc} from "../Request/Request"
import Axios  from '../Request/Axios'
const CrytoDetalis = () => {
    const [obj,setObj]=useState({})
    const {coinId}=useParams()
    useEffect(()=>{
        async function fetchdata()
        {
            Requestfunc(coinId)
            const respone =await Axios.get(request.coindetails)
            setObj(respone.data.data.coin)
            
        }
        fetchdata()
    },[])
    return (
    <div>
    </div>
  )
}

export default CrytoDetalis