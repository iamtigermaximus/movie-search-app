import {Link} from 'react-router-dom'


const Navigation = () => {
    return (
            <nav className="navbar navbar-dark justify-content-between">
                <div className="container">
                    <div className="navbar-brand">
                        <Link className="navbar-brand-link" to="/">Movie Search</Link>
                    </div>
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link " to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}

export default Navigation
