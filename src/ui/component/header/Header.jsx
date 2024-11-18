import "./Header.css"
import { Link } from "react-router-dom";
import serviceRouter from "../../../service/serviceRouter/serviceRouter.js";
const Header = () => {

    const handler = async () => {
        await window.ethereum.request({ method: "eth_requestAccounts" }).then((response) => {
            console.log("Connected account:", response[0]);
            serviceRouter.wallet = response[0];
        });
    };

    return (
        <header className="header">
            <div className="text">
                <h1 onClick={handler}>alelua</h1>
                <Link to='/router' className='cc'> router</Link>
                <Link to='/factory' className='cc'> factory</Link>
                <Link to='/' className='cc'> staking</Link>
                <Link to='/pool' className='cc'> pool</Link>
            </div>
        </header>
    );
};

export default Header;
