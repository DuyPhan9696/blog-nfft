import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import BlogBanner from './BlogBanner'
import BlogContainer from './BlogContainer'
import BlogTitle from './BlogTitle'
import blogContentApi from '../../api/blogContentApi'
import { BlogContentWrapper } from './styled/BlogContentWrapper'
const BlogContent = () => {
    const [BlogContent, setBlogContent] = useState([])
    useEffect(() => {
        const fetchPage = async () => {
            try {
                const params = {
                    idBlog: 12,
                    language: 'en',
                    pageSize: 2,
                    pageIndex: 0
                }
                const response = await blogContentApi.getAll(params);
                setBlogContent(response.response.data)
                console.log(BlogContent)
            } catch (error) {
                console.log(error)
            }
        }

        fetchPage();
    }, [])
    return (
        <BlogContentWrapper>
            <Container>
                <BlogTitle />
                <BlogBanner />
                <BlogContainer />
            </Container>
        </BlogContentWrapper>

    )
}

export default BlogContent