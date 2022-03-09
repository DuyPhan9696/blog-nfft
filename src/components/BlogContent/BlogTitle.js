import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
const blogTitle = () => {
    return (
        <div className='canvas'>
            <div className="inner-title">
                <a href="" className='d-flex align-items-center'>
                    <Link to={'/about-us'}>About Us</Link>
                </a>
                <h1>Ancient8 Raises $4 Million in Seed Funding to Democratize Social and Financial Access in the Metaverse</h1>
                <p>Today we are thrilled to announce that Ancient8, Vietnam’s largest blockchain gaming guild, has successfully completed a $4 Million seed round.</p>
                <div className="title-foot d-flex align-items-end flex-fill ">
                    <div className="d-flex align-items-center ">
                        <a href=""><img className="img-profile" src="/images/logo1.png" /></a>
                        <div className='d-flex flex-column ms-2'>
                            <a className="name" href="">Duy</a>
                            <span className="time"><time>10 views</time><span className="accents">•</span>nguồn</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default blogTitle