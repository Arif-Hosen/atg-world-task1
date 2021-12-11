import React from 'react';
import facebook from '../../ATG intern/icon/fb.png';
import google from '../../ATG intern/icon/google.png';
import login from '../../ATG intern/icon/loginimg.png';


const LogIn = () => {
    return (
        <div className='login-container'>
            <p>or

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
                                    <small>New user?
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
    );
};

export default LogIn;