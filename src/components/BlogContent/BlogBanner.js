import React from 'react'

const BlogBanner = (dataBanner) => {
    return (
        <div className='blog-banner d-grid'>
            <div></div>
            {(dataBanner.dataBanner.length === 0) ?
                ' ' : <img className='img-blog' src={dataBanner.dataBanner[0].banner} />
            }
            <div></div>
        </div>
    )
}

export default BlogBanner