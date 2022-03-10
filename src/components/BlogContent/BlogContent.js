import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import BlogBanner from './BlogBanner'
import BlogContainer from './BlogContainer'
import BlogTitle from './BlogTitle'
import blogContentApi from '../../api/blogContentApi'
import { BlogContentWrapper } from './styled/BlogContentWrapper'
const BlogContent = () => {
    const infos = useParams()
    console.log(infos.id)
    const [blogContent, setBlogContent] = useState([])
    useEffect(() => {
        const fetchPage = async () => {
            try {
                const params = {
                    idBlog: 1,
                    language: 'en',
                    pageSize: 2,
                    pageIndex: 0
                }
                const response = await blogContentApi.getAll(params);
                setBlogContent(response.response.data)

            } catch (error) {
                console.log(error)
            }
        }

        fetchPage();
    }, [])
    console.log(blogContent)
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