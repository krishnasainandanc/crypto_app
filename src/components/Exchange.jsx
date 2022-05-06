import { useEffect, useState } from "react";
import Axios from "../Request/Axios";
import { request, Requestfunc } from "../Request/Request";
const Exchange = () => {
  const [data, setData] = useState([]);
  const [final, setFinal] = useState(["name"]);
  const [intext, setIntext] = useState("");
  const toggle = [];
  const [check, setCheck] = useState({
    name: true,
    price: false,
    btcPrice: false,
    numberOfMarkets: false,
  });
  let update = [];
  useEffect(() => {
    const fetchdata = async function () {
      const response = await Axios.get(request.exchange);
      setData(response.data.data.coins);
      update = response.data.data.coins;
      // console.log(update);
    };
    fetchdata();
  }, []);
  const handleClick = (s, j, i) => {
    //setToggle(!toggle)
    toggle[j] = toggle[j] + 1;
    const change = document.querySelector(`.` + s);
    const t = document.querySelector(`.tr_${j}`);

    if (toggle[j] % 2 != 0) {
      change.innerHTML = `
      <h1>${i.name}</h1
      <p>Cryptocurrency in Every Wallet™. At Crypto.com, we are on a mission to accelerate the world's transition to
      cryptocurrency.</p>
      <br/>
      <p>We consider clarity of thought to be the single most important trait we look for in our colleagues</p>
      <p>We consider ${i.numberOfMarkets} ,${i.price} and ${i.btcPrice}</p>`;

      t.setAttribute("style", "background-color:rgb(1, 32, 74);color:white");
    } else {
      change.innerText = "";
      t.removeAttribute("style");
    }
  };
  //console.log(intext);

  update = data.filter((i) => {
    for (let j = 0; j < final.length; j++) {
      if (
        i[final[j]]
          .toString()
          .toLowerCase()
          .includes(intext.toString().toLowerCase())
      )
        return true;
    }
  });
  //console.log(update);
  return (
    <div className="exchange">
      <div className="text-input">
        <input
          type="text"
          name="input_typing"
          value={intext}
          placeholder="Search"
          onChange={(e) => setIntext(e.target.value)}
        />
        <button>Filter</button>
      </div>
      <div className="checkbox-type">
        <div className="checkbox-type-1">
          <input
            type="checkbox"
            id="i"
            checked={check.name}
            name="name"
            onChange={(e) => {
              setCheck({ ...check, [e.target.name]: e.target.checked });
              if (e.target.checked) setFinal([...final, e.target.name]);
              else {
                setFinal(final.filter((i) => !i.includes(e.target.name)));
              }
            }}
          />
          <label>Exchange </label>

          <input
            type="checkbox"
            id="i1"
            checked={check.numberOfMarkets}
            name="numberOfMarkets"
            onChange={(e) => {
              setCheck({ ...check, [e.target.name]: e.target.checked });
              if (e.target.checked) setFinal([...final, e.target.name]);
              else setFinal(final.filter((i) => !i.includes(e.target.name)));
            }}
          />
          <label>Makrkets</label>
        </div>

        <div className="checkbox-type-1">
          <input
            type="checkbox"
            id="i2"
            checked={check.btcPrice}
            name="btcPrice"
            onChange={(e) => {
              setCheck({ ...check, [e.target.name]: e.target.checked });
              if (e.target.checked) setFinal([...final, e.target.name]);
              else setFinal(final.filter((i) => !i.includes(e.target.name)));
            }}
          />
          <label>BTC Price</label>

          <input
            type="checkbox"
            id="i3"
            checked={check.price}
            name="price"
            onChange={(e) => {
              setCheck({ ...check, [e.target.name]: e.target.checked });
              if (e.target.checked) setFinal([...final, e.target.name]);
              else setFinal(final.filter((i) => !i.includes(e.target.name)));
            }}
          />
          <label>Price</label>
        </div>
      </div>
      {/* {console.log(check, final)} */}
      <table className="exchange-table">
        <thead>
          <tr>
            <th className="st1">Exchange</th>
            <th>Markets</th>
            <th>BTC-price</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {update.map((i, j) => {
            toggle.push(0);
            return (
              <>
                <tr
                  id="trclass"
                  className={j % 2 == 0 ? `even tr_${j}` : `odd tr_${j}`}
                  //className={`tr_${j}`}
                  onClick={() => handleClick(`success_${j}`, j, i)}
                >
                  <td>
                    {i.rank}. <img src={i.iconUrl} width="25px" height="25px" />{" "}
                    {i.name}
                  </td>
                  <td>{i.numberOfMarkets}</td>
                  <td>{i.btcPrice}</td>
                  <td>{i.price}</td>
                </tr>
                <div className={`success_${j} success`}></div>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Exchange;
