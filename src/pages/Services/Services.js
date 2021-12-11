import React from 'react';
import img1 from '../../ATG intern/img/img1.png'
import img2 from '../../ATG intern/img/img2.png'
import img3 from '../../ATG intern/img/img3.png'
import profile1 from '../../ATG intern/profile-img/profile1.png'
import profile2 from '../../ATG intern/profile-img/profile2.png'
import profile3 from '../../ATG intern/profile-img/profile3.png'
import profile4 from '../../ATG intern/profile-img/profile4.png'
import './Services.css';


const fakedata = [
    {
        id: 1,
        img: img1,
        item: '✍️ Article',
        title: 'What if famous brands had regular fonts? Meet RegulaBrands!',
        description: 'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…',
        profileImg: profile1,
        name: 'Sarthak Kamra'

    },
    {
        id: 2,
        img: img2,
        item: '🔬️ Education',
        title: 'Tax Benefits for Investment under National Pension Scheme launched by Government',
        description: 'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…',
        profileImg: profile2,
        name: 'Sarah West'

    },
    {
        id: 3,
        img: img3,
        item: '🗓️ Meetup',
        title: 'Finance & Investment Elite Social Mixer @Lujiazui ',
        date: 'Fri, 12 Oct, 2018',
        location: 'Ahmedabad, India',
        profileImg: profile3,
        name: 'Ronal Jones'

    },
    {
        id: 4,
        item: '💼️ Job',
        title: 'Software Developer',
        company: 'Innovaccer Analytics Private Ltd.',
        location: 'Noida, India',
        profileImg: profile4,
        name: 'Joseph Gray'

    }
]

const Services = () => {
    return (
        <div className='container ' >
            <div class="row" >
                {/* using map */}

                <div class="col-sm-12 col-md-12 col-lg-8 mb-2">
                    {fakedata.map(data =>
                        <div class="card" style={{ width: 'auto' }}>
                            {/* if img has in data */}
                            {data?.img && <img src={data.img} class="card-img-top" alt="..." />}
                            <div class="card-body">
                                <p style={{ fontSize: '18px', fontWeight: 'bold' }} className="card-title">{data.item}</p>
                                <div className='d-flex '>
                                    <p style={{ fontSize: '22px', fontWeight: '600' }} className="card-text">{data.title}</p>
                                    <p className='ms-5'>...</p>
                                </div>
                                {
                                    data?.description && <p>{data.description}</p>
                                }
                                {
                                    data?.date && <div>
                                        <small style={{ fontWeight: 'bold', fontSize: '15px' }}>{data.date}</small>
                                        <small style={{ fontWeight: 'bold', fontSize: '15px', marginLeft: '25%' }}>{data.location}</small>
                                        <br />
                                        <a style={{
                                            marginTop: '16px',
                                            textDecoration: 'none', textAlign: 'center', width: '100%', display: 'block', border: ' 0.7px solid #A9AEB8',
                                            boxSizing: ' border-box',
                                            borderRadius: '8px'
                                        }} href="#">Visit Website</a>
                                    </div>

                                }

                                <div style={{ marginTop: '32px' }}>
                                    <div className='desktop-card'>
                                        <img src={data.profileImg} alt="" />
                                        <p style={{ fontSize: '18px', fontWeight: '600', display: 'inline', marginLeft: '10px' }} className="card-title">{data.name}</p>
                                        <small style={{ marginLeft: '47%' }}><i class="far fa-eye"></i>1.4k views</small>
                                        <i style={{ marginLeft: '10px', padding: '6px', backgroundColor: '#EDEEF0', borderRadius: '2px' }} class="fas fa-share-alt"></i>
                                    </div>

                                    <div className=' mobile-card' >
                                        <img src={data.profileImg} alt="" />

                                        <div>
                                            <p style={{ fontSize: '18px', fontWeight: '600', display: 'inline', marginLeft: '10px' }} className="card-title">{data.name}</p>
                                            <p style={{ fontSize: '12' }}><i class="far fa-eye"></i>1.4k views</p>
                                        </div>
                                        <div style={{ marginLeft: '45%' }}>
                                            <i style={{ padding: '6px', textAlign: 'end', backgroundColor: '#EDEEF0', borderRadius: '2px' }} class="fas fa-share-alt"></i>
                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>
                    )}
                </div>

                <div className='container mx-auto' style={{ textAlign: 'left' }} class="col-sm-12 col-md-12 col-lg-4">
                    <i class="fas fa-map-marker-alt"></i>
                    <input style={{ borderTop: 'none', borderLeft: 'none', borderRight: 'none' }} type="text"
                        placeholder=' Enter your location'
                    />
                    <br />
                    <small>Your location will help us serve better and extend a personalised experience.</small>

                </div>
            </div>
        </div >
    );
};

export default Services;