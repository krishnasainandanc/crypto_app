import { useEffect,useState} from "react"
import  Axios  from "../Request/Axios"
import  {request,Requestfunc}  from "../Request/Request"
const Exchange = () => {
  const [data,setData]=useState([])
  const toggle=[]
  useEffect(()=>{
    const fetchdata=async function(){
      const response =await Axios.get(request.exchange)
      setData(response.data.data.coins)
    }
    fetchdata()
  },[])
  const handleClick=(s,j,i)=>
  {
    //setToggle(!toggle)
    toggle[j]=toggle[j]+1
    const change=document.querySelector(`.`+s);
    const t=document.querySelector(`.tr_${j}`);
    
    if(toggle[j]%2!=0)
    {
      change.innerHTML=`
      <h1>${i.name}</h1
      <p>Cryptocurrency in Every Wallet™. At Crypto.com, we are on a mission to accelerate the world's transition to
      cryptocurrency.</p>
      <br/>
      <p>We consider clarity of thought to be the single most important trait we look for in our colleagues</p>
      <p>We consider ${i.numberOfMarkets} ,${i.price} and ${i.btcPrice}</p>`
     
      t.setAttribute("style","background-color:rgb(1, 32, 74);color:white")

    }
    else{
      change.innerText=""
      t.removeAttribute("style");
    }
    
  }
   
  
  return (
    <div className="exchange">
      <table className="exchange-table" >
        <thead>
          <tr>
            <th className="st1">Exchange</th>
            <th>Markets</th>
            <th>BTC-price</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
        {data.map((i,j)=>{
          toggle.push(0)
          return(
          <>
          <tr className={`tr_${j}`}  onClick={()=>handleClick(`success_${j}`,j,i)} >
            <td>{i.rank}. <img src={i.iconUrl} width="25px" height="25px"/> {i.name}</td>
            <td>{i.numberOfMarkets}</td>
            <td>{i.btcPrice}</td>
            <td>{i.price}</td>
          </tr>
          <div className={`success_${j} success`}></div>
        
          </>
          )
        }
        
        )}
        </tbody>
      </table>
    </div>
  )
}

export default Exchange