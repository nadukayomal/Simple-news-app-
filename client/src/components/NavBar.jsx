import React from 'react'

export default function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-body-tertiary">
                <div className='container-fluid'>
                    <a className='navbar-brand' href="#">News App</a>
                    <div className="collapse navbar-collapse" id='navbarNav'>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <a className='nav-link active' href="#">Home</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link active' href="#">About</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link active' href="#">Contact us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
};

