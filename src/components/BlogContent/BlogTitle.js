import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
const blogTitle = (dataHeader) => {
    return (
        <div className='canvas'>
            {(dataHeader.dataHeader.length === 0) ?
                ' ' :
                <div className="inner-title">
                    <a href="" className='d-flex align-items-center'>
                        <Link to={`/${dataHeader.dataHeader[0].tags}`}>{dataHeader.dataHeader[0].tags}</Link>
                    </a>

                    <h1>{dataHeader.dataHeader[0].name}</h1>
                    <p>{dataHeader.dataHeader[0].description}</p>
                    <div className="title-foot d-flex align-items-end flex-fill ">
                        <div className="d-flex align-items-center ">
                            <a href=""><img className="img-profile" src="/images/logo1.png" /></a>
                            <div className='d-flex flex-column ms-2'>
                                <a className="name" href="">{dataHeader.dataHeader[0].author}</a>
                                <span className="time">
                                    <time>{dataHeader.dataHeader[0].views} views</time>
                                    <span className="accents">•</span>
                                    <a href={`${dataHeader.dataHeader[0].source}`}>Nguồn</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default blogTitle