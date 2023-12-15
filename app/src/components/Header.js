import { Link } from 'react-router-dom';
import '../styles/Components.css';
import logo from '../logo.svg';

function Header(props) {
    return (
        <header class="navbar">
            <div class="logo">
                <img src={logo} alt="logo" />
            </div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/catalog">Catalog</Link>
                <Link to="/cart">Cart</Link>
            </div>
            {props.searchBar ?
                props.searchBar : <div></div>
            }
            {/* {props.searchBar ?
                <div class="search-bar">
                    <input type="text" placeholder="Type something..." class="search-input" ref={props.searchBarRef} />
                </div> : <div></div>
            } */}

        </header>
    );
}


export default Header;