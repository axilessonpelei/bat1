import "./Header.css"
import { Link } from "react-router-dom";
const Header = () => {

    return (
        <header className="header">
            <div className="text">
                <h1>alelua</h1>
                <Link to='/staking' className='cc'> staking</Link>
                <p></p>
                <Link to='/router' className='cc'> router</Link>
                <p></p>
                <Link to='/pool' className='cc'> pool</Link>
                <p></p>
                <Link to='/' className='cc'> главная </Link>
            </div>
        </header>
    );
};

export default Header;
