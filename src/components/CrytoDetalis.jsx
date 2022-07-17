import React,{useState,useEffect} from 'react'
import {useParams} from "react-router-dom"
import HTMLReactParser from 'html-react-parser';
import {request,Requestfunc} from "../Request/Request"
import Axios  from '../Request/Axios'
import millify from 'millify';
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';
import { NavItem } from 'react-bootstrap';

const CrytoDetalis = () => {
    const [obj,setObj]=useState({})
    const {coinId}=useParams()
    const [sTime,setTime]=useState(0)
    const time=['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y']
    useEffect(()=>{
        async function fetchdata()
        {
            Requestfunc(coinId)
            const respone =await Axios.get(request.coindetails)
            setObj(respone.data.data.coin)  
        }
        fetchdata()
    },[])
    const stats=[
        {
            title:'price to USD',
            value:obj.price && millify(obj.price), 
            icon:<DollarCircleOutlined />, 
        },
        {
            title:'Rank',
            value:obj.rank,
            icon:<NumberOutlined />
        },
        {
            title:'24h Volume',
            value:obj.numberOfMarkets && millify(obj?.numberOfMarkets),
            icon:<ThunderboltOutlined />
        },
        {
            title:'Market Cap',
            value:obj.marketCap && millify(obj?.marketCap),
            icon:<DollarCircleOutlined />
        },
        {
            title:'All Time-high(daily avg)',
            value:obj?.allTimeHigh?.price && millify(obj?.allTimeHigh?.price),
            icon:<TrophyOutlined />
        }
    ]

    const generic=[
        {
            title:"Number Of Markets",
            value:obj.numberOfMarkets && millify(obj.numberOfMarkets),
            icon:<FundOutlined />
        },
        {
            title:"Number Of Exchanges",
            value:obj.numberOfExchanges && millify(obj.numberOfExchanges),
            icon: <MoneyCollectOutlined />
        },
        {
            title:"Aprroved Supply",
            value:`${obj?.supply?.confirmed}`,
            icon:<ExclamationCircleOutlined />
        },
        {
            title:"Total-supply",
            value:obj?.supply?.total && millify(obj?.supply?.total),
            icon:<ExclamationCircleOutlined />
        },
        {
            title:"Circulating supply",
            value:obj?.supply?.circulating && millify(obj?.supply?.circulating),
            icon:<TrophyOutlined />
        }
    ]
    return (
    <div className='crypto-details'>
        <div className='heading-crypto-details'>
            <h2>{obj?.name}(bitcoin-btc)Price</h2>
            <p>{obj?.name} live price in US Dollar (USD). View value statistics, market cap and supply.</p>
        </div>
        <select defaultValue="7d" onChange={(e)=>setTime(e.target.value)}>
            {time.map((i)=><option>{i}</option>)}
        </select>
        <div className="body-crypto-details">
        <div className='stats-crypto-details'>
            <div>
                <h1 level={3} className="coin-details-heading">{obj.name} Value Statistics</h1>
                <p>An overview showing the statistics of {obj.name}, such as the base and quote currency, the rank, and trading volume.</p>
            </div>
            <table>
            {stats.map((i)=>{
                return(<>
                        <tr>
                            <td>{i.icon} {i.title}</td>
                            <td>{i.value}</td>
                        </tr>
                </>)
            })}
            </table>
        </div>
        <div className='generic-stats-crypto-details'>
            <div>
                <h1 level={3} className="coin-details-heading">{obj.name} Value Statistics</h1>
                <p>An overview showing the statistics of {obj.name}, such as the base and quote currency, the rank, and trading volume.</p>
            </div>
            <table>
            {generic.map((i)=>{
                return(<>
                        <tr>
                            <td>{i.icon} {i.title}</td>
                            <td>{i.value}</td>
                        </tr>
                </>)
            })}
            </table>
        </div>
        </div>
        <div className="html-parse-crypto-details">
            <h1>What is {obj.name}</h1>
            <p>{obj.description && HTMLReactParser(obj.description)}</p>
        </div>
        <div className='Links-crypto-details'>
            <h2>{obj.name} - Links</h2>
            <table>
                <tbody>
                    {
                        obj.links && obj.links.map((i)=>{
                            return(
                            <tr>
                                <td>{i.name}</td>
                                <td>{i.type}</td>
                                <td><a href={i.url}>{i.url}</a></td>
                            </tr>    
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default CrytoDetalis