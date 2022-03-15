import React from 'react'

const BlogContainer = (dataContainer) => {
  // console.log(dataContainer.dataContainer[0].title)
  return (
    <div className="canvas">
      {(dataContainer.dataContainer.length === 0) ?
        ' ' :
        <div className="inner-blog">
          <div className="blog-main">
            <h2>{dataContainer.dataContainer[0].title}</h2>
            <p>{dataContainer.dataContainer[0].content}</p>
          </div>

          <div className="data-img">
            {dataContainer.dataContainer[0].imageTitle == null ?
              <h2>T</h2> :
              <h2>{dataContainer.dataContainer[0].imageTitle}</h2>
            }
            <figure className='d-flex'>
              <img src={dataContainer.dataContainer[0].images} alt="" />
            </figure>
          </div>


        </div>
      }
      <div className="blog-about-us blog-main">
        <h2>Về Ancient8</h2>
        <p>Ancient8 đang xây dựng một DAO để phát triển một cộng đồng và nền tảng phần mềm, cho phép mọi người chơi và xây dựng để kiếm phần thưởng trong Metaverse. Là blockchain game guild lớn nhất Việt Nam, Ancient8 đã giúp đỡ hàng chục nghìn người chơi và những người đam mê blockchain bằng cách cung cấp các cơ hội học bổng và giáo dục, cộng đồng cũng như các sản phẩm phần mềm và blockchain. Tầm nhìn của Ancient8 là dân chủ hóa quyền truy cập xã hội và tài chính trong Metaverse, với sứ mệnh tiếp cận, giáo dục và trao quyền cho 100 triệu công dân Metaverse tiếp theo thông qua blockchain.</p>
        <p>Ancient8 được đầu tư bởi các quỹ hàng đầu bao gồm Dragonfly Capital, Pantera Capital, Hashed, Mechanism Capital, Coinbase Ventures, Alameda Research, Animoca Brands, và nhiều quỹ khác.</p>
        <p className='join'>Tham gia cùng Ancient8 trên hành trình xây dựng Metaverse nhé!</p>
        <div className='link'>
          <a href="#">Twitter</a>
          <span> | </span>
          <a href="#">Discord</a>
          <span> | </span>
          <a href="#">Website</a>
          <span> | </span>
          <a href="#">Blog</a>
          <span>.| </span>
          <a href="#">Facebook</a>
          <span> | </span>
          <a href="#">Telegram</a>
          <span> | </span>
          <a href="#">Youtube</a>
        </div>
      </div>
    </div>
  )
}

export default BlogContainer