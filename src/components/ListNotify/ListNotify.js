import React from 'react'
import { Container } from 'react-bootstrap';
import Notify from '../Notify/Notify'
import InfiniteScroll from "react-infinite-scroll-component";
function ListNotify({ listNotify, hasMore, fetchData, pathLink }) {
    return (
        <Container>

            <InfiniteScroll
                dataLength={listNotify.length}
                next={fetchData}
                hasMore={hasMore}
            >
                <div className='d-grid list-notify'>
                    {listNotify.map((notify) => (
                        <Notify key={notify.id} notify={notify} pathLink={pathLink} />
                    ))}
                </div>
            </InfiniteScroll>

        </Container>
    )
}
export default ListNotify;