import css from './navbar.module.css';
import { Link } from "react-router-dom";

const Navbar = props => {
    return (
        <nav className={css.navbar}>
            <h2>My Blog</h2>
            <ul>
                <li> <Link to='/'>Home</Link> </li>
                <li> <Link to='/new-post'>New Post</Link> </li>
            </ul>
        </nav>
    );
}

export default Navbar;