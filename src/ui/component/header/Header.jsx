import "./Header.css"
import { Link } from "react-router-dom";
import serviceFactory from "../../../service/serviceFactory/serviceFactory.js";
const Header = () => {

    const handler = async () => {
        await window.ethereum.request({ method: "eth_requestAccounts" }).then((response) => {
            console.log("Connected account:", response[0]);
            serviceFactory.wallet = response[0];
        });
    };

    return (
        <header className="header">
            <div className="text">
                <h1>alelua</h1>
                <Link to='/router' className='cc'> router</Link>
                <Link to='/factory' className='cc' onClick={handler}> factory</Link>
                <Link to='/' className='cc'> staking</Link></div>
        </header>
    );
};

export default Header;
