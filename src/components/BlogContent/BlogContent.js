import React, { useEffect, useState, useLayoutEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import BlogBanner from './BlogBanner'
import BlogContainer from './BlogContainer'
import BlogTitle from './BlogTitle'
import BlogSub from './BlogSub';
import BlogNotify from './BlogNotify';
import blogContentApi from '../../api/blogContentApi'
import pageApi from '../../api/pageApi'
import { BlogContentWrapper } from './styled/BlogContentWrapper'
const BlogContent = () => {
    const infos = useParams()
    console.log(infos.id)
    const [blogContainer, setBlogContainer] = useState([])
    const [blogHeader, setBlogHeader] = useState([])
    const [hasMore, sethasMore] = useState(false);
    useEffect(() => {

        const getPage = async () => {
            try {
                const params = {
                    idBlog: infos.id,
                    language: 'en',
                    pageSize: 2,
                    pageIndex: 0
                }
                const response = await blogContentApi.getAll(params);
                setBlogContainer(response.response.data)

            } catch (error) {
                console.log(error)
            }
        }
        const getHeaderPage = async () => {
            try {
                const params = {
                    language: 'en',
                    pageSize: 99999,
                    pageIndex: 0
                }
                const response = await pageApi.get(params);
                setBlogHeader(response.response.data)
            } catch (error) {
                console.log(error)
            }
        }
        getPage();
        getHeaderPage()
    }, [])
    let dataHeader = blogHeader.filter((item) => {
        return item.id == infos.id
    })
    let dataNotify = blogHeader.filter((item) => {
        return item.id != infos.id
    })
    let blogNotify = []
    for (let i = 0; i < 3; i++) {
        blogNotify.push(dataNotify[i])
    }
    console.log(blogNotify)

    return (
        <BlogContentWrapper>
            <Container>
                <BlogTitle dataHeader={dataHeader} />
                <BlogBanner dataBanner={dataHeader} />
                <BlogContainer dataContainer={blogContainer} />
                <BlogSub />
                <BlogNotify dataNotify={blogNotify} hasMore={hasMore} fetchData={null} />
            </Container>
        </BlogContentWrapper>

    )
}

export default BlogContent