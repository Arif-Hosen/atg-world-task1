import React from 'react';
import logo from '../../ATG intern/img/headerLogo.png';
import search from '../../ATG intern/icon/search.png';
import login from '../../ATG intern/icon/loginimg.png';
import facebook from '../../ATG intern/icon/fb.png';
import google from '../../ATG intern/icon/google.png';

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
                        {/* signin/ singup modal */}
                        <div>
                            <p>Create account.

                                <button style={{ backgroundColor: 'white', color: 'blue', border: 'none' }} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal">
                                    It's free
                                </button>


                                <div class="modal " id="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-lg">
                                        <div class="modal-content">
                                            <div style={{ backgroundColor: '#EFFFF4' }} class="modal-header">
                                                <p class="modal-title text-success" id="exampleModalLabel">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body d-flex">
                                                <div>
                                                    <h3>Create Account</h3>
                                                    <input
                                                        placeholder='First Name'
                                                        className='w-50' type="text" />
                                                    <input
                                                        placeholder='Last Name'
                                                        className='w-50' type="text" />
                                                    <br />
                                                    <input
                                                        placeholder='Email'
                                                        className='w-100' type="text" />
                                                    <br />
                                                    <input
                                                        placeholder='Password'
                                                        className='w-100' type="text" />
                                                    <br />
                                                    <input
                                                        placeholder='Confirm Password'
                                                        className='w-100' type="text" />
                                                    <button style={{ borderRadius: '20px', marginTop: '19px' }} type="button" class="btn btn-primary w-100">Create Account</button>

                                                    <button style={{ borderRadius: '20px', marginTop: '19px' }} type="button" class="btn btn-light w-100">
                                                        <img style={{ marginRight: '20px' }} src={facebook} alt="" />
                                                        SignUp with Facebook</button>
                                                    <button style={{ borderRadius: '20px', marginTop: '19px' }} type="button" class="btn btn-light w-100">
                                                        <img
                                                            style={{ marginRight: '20px' }}
                                                            src={google} alt="" />
                                                        SignUp with Google</button>
                                                </div>
                                                <div>
                                                    <small>Already have an account?
                                                        <button style={{ backgroundColor: 'white', color: 'blue', border: 'none' }} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal">
                                                            It's free
                                                        </button>




                                                    </small>
                                                    <img widtht="100%" src={login} alt="" />
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </p>
                        </div>
                        <div>
                            <p>Already Have an account.

                                <button style={{ backgroundColor: 'white', color: 'blue', border: 'none' }} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal1">
                                    Sign In
                                </button>


                                <div class="modal " id="modal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-lg">
                                        <div class="modal-content">
                                            <div style={{ backgroundColor: '#EFFFF4' }} class="modal-header">
                                                <p class="modal-title text-success" id="exampleModalLabel">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body d-flex">
                                                <div>
                                                    <h3>Sign In</h3>

                                                    <input
                                                        placeholder='Email'
                                                        className='w-100' type="text" />
                                                    <br />
                                                    <input
                                                        placeholder='Password'
                                                        className='w-100' type="text" />
                                                    <br />

                                                    <button style={{ borderRadius: '20px', marginTop: '19px' }} type="button" class="btn btn-primary w-100">Sign In</button>

                                                    <button style={{ borderRadius: '20px', marginTop: '19px' }} type="button" class="btn btn-light w-100">
                                                        <img style={{ marginRight: '20px' }} src={facebook} alt="" />
                                                        SignUp with Facebook</button>
                                                    <button style={{ borderRadius: '20px', marginTop: '19px' }} type="button" class="btn btn-light w-100">
                                                        <img
                                                            style={{ marginRight: '20px' }}
                                                            src={google} alt="" />
                                                        SignUp with Google</button>
                                                </div>
                                                <div>
                                                    <small>Already have an account?
                                                        <button style={{ backgroundColor: 'white', color: 'blue', border: 'none' }} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal">
                                                            It's free
                                                        </button>




                                                    </small>
                                                    <img widtht="100%" src={login} alt="" />
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;