import React from 'react';
import facebook from '../../ATG intern/icon/fb.png';
import google from '../../ATG intern/icon/google.png';
import login from '../../ATG intern/icon/loginimg.png';
import LogIn from '../LogIn/LogIn';

const SignUp = () => {
    return (
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
                                        <button style={{ backgroundColor: 'white', color: 'blue', border: 'none' }} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal1">
                                            Log In
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

export default SignUp;