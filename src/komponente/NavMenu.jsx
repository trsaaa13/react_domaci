import { Link } from 'react-router-dom'

function NavMenu() {
    return (
        <div>
            <nav className="navbar navbar-light bg-primary">
                <Link to={"/"} className="navbar-brand" id="homepagenav">Početna</Link>
                <Link to={"/sort"} className="navbar-brand" id="sortpagenav">Sort</Link>
            </nav>
        </div>
    )
}

export default NavMenu;