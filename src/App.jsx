import { useState, useEffect } from "react";
import Cookies from "./components/Cookies";
import Buttons from "./components/Buttons";

export default function App() {

  const [cookies, setCookies] = useState(0);
  const [cookiesPerSec, setCookiesPerSec] = useState(1);
  const [money, setMoney] = useState(0);
  const [costOfCookies, setcostOfCookies] = useState(0);

  useEffect(() => {
    const myCookieInterval = setInterval(() => {
      setCookies((currentCookies) => currentCookies + 1);
    }, 5000 / cookiesPerSec);

return () => {

  clearInterval(myCookieInterval);
};
}, [cookiesPerSec]);

function addCookiesPerSeconds() {
  setCookiesPerSec(cookiesPerSec + 5);
}

function earnMoney() {
  setMoney(money + 5);
}

function buyCookies() {
  setcostOfCookies(costOfCookies + 15)
}

return (
  <div>
    <Cookies cookies={cookies} cookiesPerSec={cookiesPerSec} />
    <button onClick={addCookiesPerSeconds}>Buy Cookies to Upgrade</button>
    <Buttons label={"Money"} handler={earnMoney}/>
    <Buttons label={"GrandMa"} handler={buyCookies}/>
    <p>Your Money: £{money}</p>
    <button onClick={earnMoney}>Earn Money</button>
    <p>buy Grandma: £{costOfCookies}</p>
    <button onClick={buyCookies}>buyGrandma</button>
    <p className={cookies > 5 ? "" : "hidden"}>
    </p>
  </div>

);
}
