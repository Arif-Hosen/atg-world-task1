import React from 'react';
import logo from '../../ATG intern/img/headerLogo.png';
import search from '../../ATG intern/icon/search.png';
import login from '../../ATG intern/icon/loginimg.png';
import facebook from '../../ATG intern/icon/fb.png';
import google from '../../ATG intern/icon/google.png';
import SignUp from '../SignUp/SignUp';
import LogIn from '../LogIn/LogIn';

const Navigation = () => {
    return (
        <div>
            <nav style={{ backgroundColor: 'white' }} class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <img style={{ marginLeft: '15px' }} src={logo} alt="atg" />
                        {/* search */}
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a style={{
                                    width: '360px',
                                    backgroundColor: '#F2F2F2',
                                    borderRadius: '21px'
                                }} class="nav-link active" aria-current="page" href="#">
                                    <img src={search} alt="" />
                                    <input
                                        style={{ border: 'none', backgroundColor: '#F2F2F2', marginLeft: '5px' }}
                                        type="text" />
                                </a>
                            </li>

                        </ul>

                        {/*  singup modal */}
                        <SignUp></SignUp>
                        <LogIn></LogIn>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;