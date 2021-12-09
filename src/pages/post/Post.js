import React from 'react';
import join from '../../ATG intern/icon/join.png';
import './Post.css'

const Post = () => {
    return (
        <div className="" >
            <div className='post'  >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
                    <h5>Post(365)</h5>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Filter: All
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <nav className="desktop nav  mt-5 container-fluid" >
                <a style={{ color: 'black' }} class="nav-link active" aria-current="page" href="#">All Post(32)</a>
                <a style={{ color: '#8A8A8A' }} class="nav-link" href="#">Article</a>
                <a style={{ color: '#8A8A8A' }} class="nav-link" href="#">Event</a>
                <a style={{ color: '#8A8A8A' }} class="nav-link" href="#">Education</a>
                <a style={{ color: '#8A8A8A' }} class="nav-link" href="#">Job</a>



                <div style={{ display: 'inline', marginLeft: 'auto' }} className="dropdown">
                    <button style={{
                        background: '#EDEEF0',
                        borderRadius: '4px', fontSize: '15px', color: 'black'
                    }} className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Write a Post
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>

                <button style={{ background: '#2F6CE5', marginLeft: '16px' }} type="button" class="btn btn-primary"><img style={{ display: 'inline' }} src={join} alt="" />Join Group</button>

            </nav>






            <hr />

        </div >
    );
};

export default Post;