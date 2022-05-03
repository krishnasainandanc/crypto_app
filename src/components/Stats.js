import React,{useState,useEffect} from 'react'
import {request} from "../Request/Request"
import Axios from "../Request/Axios"
const Stats = () => {
    const [currency,setCurrency]=useState({})
    useEffect(()=>{
        async function fetchData()
        {
            const response=await Axios.get(request.coin)
            setCurrency(response.data.data.stats)
            console.log(response.data.data)
        }
        fetchData()
    },[])
  return (
    <div className="content">
            <h1>Global Crypto Stats</h1>
            <div className="divide">
              <div className="left">
                  <p className="text">Total CryptoCurrency</p>
                  <h2>{currency.total}</h2>
                  <p className="text">Total Market cap</p>
                  <h2>{currency.totalMarketCap}</h2>
                  <p className="text">Total Coins</p>
                  <h2>{currency.total}</h2>
              </div>
              <div className="right">
                  <p className="text">Total Exhanges</p>
                  <h2>{currency.totalExchanges}</h2>
                  <p className="text">Total Volume</p>
                  <h2>{currency.total24hVolume}</h2>
                  <p className="text">Total Markets</p>
                  <h2>{currency.totalMarkets}</h2>
              </div>
            </div>
          </div>
  )
}

export default Stats