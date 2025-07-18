import React from 'react';
import Banner from './Banner'

function Header() {
    return (
        <div>
            <div className="uk-section-secondary uk-background-cover uk-preserve-color"
                style={{
                    backgroundImage: "url('https://hubble.cdn.chittiapp.com/cdn_uploads/018042e0-5c40-11ef-9cf5-d5259e0ae0df_uptor-bg-top.svg')", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: 'center center'
                }}>

                <div className="cls-inactive: uk-navbar-container uk-navbar-transparent uk-light;">

                    <nav className="uk-navbar-container uk-navbar-transparent uk-light">
                        <div className="uk-container">
                            <div data-uk-navbar>
                                <div className="uk-navbar-left">
                                    <ul className="uk-navbar-nav">
                                        <li className="uk-active">
                                            <a href="/#">
                                                <img src="https://rsmartedu.in/wp-content/uploads/2025/02/Rsmart-Logo-white.png" alt="" width="300" height="250" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="uk-navbar-right">
                                    <ul className="uk-navbar-nav">
                                        <li className="uk-active">
                                            <a href="/#" className='uk-text-capitalize text-white'>
                                                Courses
                                            </a>
                                        </li>
                                        <li className='cus-menu'>
                                            <a href="/#" className='uk-text-capitalize text-white'>
                                                Arts & Science
                                            </a>
                                        </li>
                                        <li className='cus-menu'>
                                            <a href="/#" className='uk-text-capitalize text-white'>
                                                Engineering
                                            </a>
                                        </li>
                                        <li className='cus-menu'>
                                            <a href="/#" className='uk-text-capitalize text-white'>
                                                Management
                                            </a>
                                        </li>
                                        <li className='cus-menu'>
                                            <a href="/#" className='uk-text-capitalize text-white'>
                                                Admission 2025 - 2026
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <hr className='uk-margin-remove'/>
                        </div>
                       
                    </nav>
                </div>
                
                <Banner />
            </div>
        </div>
    )
}

export default Header