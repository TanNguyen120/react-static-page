import logo from '../logo.svg';

function NavBar() {
    return (
        <nav className="nav-item">
            <img src={logo} width="100px"></img>
            <h3>Yogg Sharon</h3>
            <h4>React Course - project 1</h4>
        </nav>
    )
}

export default NavBar;