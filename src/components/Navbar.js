import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
    <header>
        <div className="container">
            <Link to= "/">
                <img src="/bidoof.png" alt="Logo" style={{ height: '50px', marginRight: '10px' }} />
                <h1>Buff Bidoof</h1>

            </Link>
        </div>
    </header>
    )
}

export default Navbar;
