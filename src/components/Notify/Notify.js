import React from 'react'
import { Link } from 'react-router-dom';
function Notify({ notify }) {
    return (
        <div className='notify-item flex-column'>
            <Link className="notify-head" to={`/${notify.slug}`}>
                <img className="img-notify" src={`${notify.banner}`} />
            </Link>
            <div className="notify-body d-flex flex-column flex-fill" href="">
                <Link to={`/${notify.slug}`} className="notify-bd-start">
                    <div className="tag">{notify.tags}</div>
                    <h2 className="title">{notify.name}</h2>
                    <p className='content'>
                        {notify.description}
                    </p>
                </Link>
                <div className="notify-bd-foot d-flex align-items-end flex-fill ">
                    <div className="d-flex align-items-center ">
                        <a href=""><img className="img-profile" src="/images/logo1.png" /></a>
                        <div className='d-flex flex-column ms-2'>
                            <a className="name" href="">{notify.author}</a>
                            <span className="time">
                                <time>{notify.views} views</time>
                                <span className="accents">•</span>
                                <a href={`${notify.source}`}>Nguồn</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Notify;