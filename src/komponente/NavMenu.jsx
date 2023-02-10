import { Link } from 'react-router-dom'

function NavMenu() {
    return (
        <div>
            <nav className="navbar navbar-light bg-primary">
                <Link to={"/"} className="navbar-brand" id="homepagenav">Početna</Link>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </nav>
        </div>
    )
}

export default NavMenu;