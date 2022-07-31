import logo from '../images/react-icon.png';

function Navbar() {
    return(
        <nav>
            <section className="nav--logo_container">
                <img 
                    src={logo} 
                    alt="logo" 
                    className="nav--logo"
                />
                <h3 className="nav--logo_text">ReactFacts</h3>
            </section>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
}

export default Navbar;