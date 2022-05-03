import React,{useState,useEffect} from 'react'
import Api from "../Request/Api_2"
import {request,Requestfunc} from '../Request/Request' 
import { Card,Button,Title} from 'antd';
import {NavLink} from "react-router-dom"
import web from"../img/bit.webp"
import moment from 'moment';
import Headlines from './News_headlines';

const News = ({simplified}) => {
  const [news,setNews]=useState([])
  const [news1,setNews1]=useState([])
  const [text,setText]=useState("")
  const [ptext,setPtext]=useState("")
  useEffect(()=>{
    async function fetchData()
    {
      const respone= await Api.get(request.news)
      // const update=respone.data.value.filter((i)=>i.name.toLowerCase().includes(text.toLowerCase()))
      const update=respone.data.value.filter((i)=>i?.provider[0]?.name.toLowerCase().includes(ptext.toLowerCase()))
      console.log(update)
      setNews(update)  
      setNews1(respone.data.value)
      setText(respone.data.webSearchUrl)
    }
    fetchData()
  },[ptext])
  return (
    <div className='NewsHeading'>
      {simplified && <div className='news-head'>
      <h1>Top News on cryto-Currency</h1>
      <NavLink to="/cryto-News"><Button type='link'>show more</Button></NavLink>
      </div> }
      {!simplified && <>
        <Headlines/>
        <h1 className='news-head'>Lastest News</h1>
        <div className='search-news'>
            <select placeholder='Select-News' className='search-news-1' onChange={(e)=>setPtext(e.target.value)}> 
              <option>--Select-News Provider--</option>
              {
                news1.map((i)=>{
                  return(
                    <option>{i?.provider[0]?.name}</option>
                  )
                })
              }
            </select>
            <input placeholder='Search-News' className='search-news-1' onChange={(e)=>setText(e.target.value)}/>
        </div>
      </>
      }

      <div className="news_grid">
        {
          news.map((i,j)=>{
            const count=simplified?6:12
            if(j<count)
            {
              return(
                <a href={i.url} target="_blank">
                  <div className="news-card">
                    <Card className='news-card-1'>
                      <div className="news-title">
                        <h2>{i?.name.length>100?`${i.name.substring(0,100)}....`:`${i.name}`}</h2>
                        <img src={i?.image?.thumbnail?.contentUrl || web} width="70px" height="70px"/>
                      </div>
                      <div className="news-content">
                        {i.description.length>100?<p>{`${i.description.substring(0,100)}......`}</p>:<p>{i.description}</p>}
                      </div>
                      <div className="news-provider">
                        <img src={i?.provider[0]?.image?.thumbnail?.contentUrl || web} width="40px" height="30px"/>
                        <h4>{i?.provider[0]?.name}</h4>
                      </div>
                      <p className='p-card'>{moment(i.datePublished).startOf("ss").fromNow()}</p>
                    </Card>
                  </div>
                </a>
              )
            }
          })
        }
      </div>
      <center>
      {
        !simplified &&<div className='more-top'>
        <a href={text}><Button type='primary'>Click for More Top News</Button></a>
      </div>
      }
      </center>
    </div>
  )
}

export default News