import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import BlogBanner from './BlogBanner'
import BlogContainer from './BlogContainer'
import BlogTitle from './BlogTitle'
import blogContentApi from '../../api/blogContentApi'
import pageApi from '../../api/pageApi'
import { BlogContentWrapper } from './styled/BlogContentWrapper'
const BlogContent = () => {
    const infos = useParams()
    const [blogContainer, setBlogContainer] = useState([])
    const [blogHeader, setBlogHeader] = useState([])
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
    // console.log(blogHeader)
    let dataHeader = blogHeader.filter((item) => {
        return item.id == infos.id
    })

    // console.log(dataHeader)
    return (
        <BlogContentWrapper>
            <Container>
                <BlogTitle />
                <BlogBanner dataBanner={dataHeader} />
                <BlogContainer />
            </Container>
        </BlogContentWrapper>

    )
}

export default BlogContent