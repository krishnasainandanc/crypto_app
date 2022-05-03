import React,{useState,useEffect} from 'react'
import Axios from "../Request/Axios"
import {request} from '../Request/Request'
import { Card,Button} from 'antd';
import {NavLink} from "react-router-dom"
const Cyrtocurrency = ({simplified}) => {
  const [cyrto,setCyrto]=useState([])
  const [text,setText]=useState("")
  useEffect(()=>{
    async function fetchData()
    {
        const response=await Axios.get(request.coin)
        const update=response.data.data.coins.filter((i)=>i.name.toLowerCase().includes(text.toLowerCase()))
        setCyrto(update)
        console.log(update)
    }
    fetchData()
  },[text,crypto])
  return (
    <>
    <div className="body-cryto">
    {simplified &&<div className='cyrto-head'>
        <h1>Top 10 CrytoCurrency in the World</h1>
        {simplified && <NavLink to="/Cryto-Currency"><Button type="link">Show more </Button></NavLink>}
    </div>
    }
    {
    !simplified && 
    <div className="text-cryto">
        <input type="text" placeholder='Enter-Text'  onChange={(e)=>setText(e.target.value)} />
        
    </div>
    }
    <div className="cyrto">
        {
            cyrto.map((i)=>{
                const id=simplified?11:51
                if(i.rank<id)
                {
                    return(
                        <NavLink to={`/Cryto-Currency/${i.uuid}`}>
                        <div className='cyrtoGrid'>
                            <Card title={`${i.rank}.${i.name}`} extra={<img src={i.iconUrl} height="40px" width="40px"/>} hoverable>
                                <p>price : {i.price}</p>
                                <p>Market Cap : {i.marketCap}</p>
                                <p>Daily Change : {i.change}</p>
                            </Card>
                        </div>
                        </NavLink>
                    )
                }
            })
        }
        </div>     
    </div> 
    </>
    
  )
}

export default Cyrtocurrency