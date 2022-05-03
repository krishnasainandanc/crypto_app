import React,{useState,useEffect} from 'react'
import {Card} from "antd"
import Api from "../Request/Api_2"
import {request} from "../Request/Request"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import web from "../img/bit.webp"
import moment from 'moment';

const News_headlines = () => {
    const [head,setHeadling]=useState([])
    useEffect(()=>{
        async function fetchData()
        {
            const response=await Api.get(request.headling)
            setHeadling(response.data.value)
        }
        fetchData()
    },[])
  return (
    <div className='headling'>
        <Carousel autoPlay infiniteLoop interval={10000}>
            {
                head.map((i)=>{
                    return(
                        <a href={i.url} target="_blank">
                            <div>
                            <Card  className="head-grid">
                            <div className="head-title">
                                <div>
                                    <h2>{i.name.length>100?`${i.name.substring(0,100)}`:`${i.name}`}</h2>
                                    <div className='head-body'>
                                        <p>{i.description.length>500?`${i.description.substring(0,500)}.......`:`${i.description}`}</p>
                                    </div>
                                    <div className="provider">
                                        <img src={i?.provider[0]?.image?.thumbnail?.contentUrl || web} width="40px" height="30px"/>
                                        <h4>{i?.provider[0]?.name}</h4>
                                    </div>
                                </div>
                                <img src={i?.image?.thumbnail?.contentUrl || web} alt="no image" />
                            </div>       
                            </Card>
                            </div>
                        </a>
                    )
                })
            }
        </Carousel>
    </div>
  )
}

export default News_headlines