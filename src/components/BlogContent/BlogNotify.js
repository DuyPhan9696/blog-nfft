import React from 'react'
import ListNotify from '../ListNotify/ListNotify'
import { ListNotifyWrapper } from '../ListNotify/styled/ListNotifyWrapper'

const BlogNotify = ({ dataNotify, hasMore, fetchData }) => {
    return (
        <ListNotifyWrapper>
            <ListNotify listNotify={dataNotify} hasMore={hasMore} fetchData={fetchData} />
        </ListNotifyWrapper>

    )
}

export default BlogNotify