import React from 'react'
import { Container } from 'react-bootstrap';
import Notify from '../Notify/Notify'
function ListNotify({ listNotify }) {
    return (
        <Container>
            <div className='d-grid list-notify'>
                {listNotify.map((notify) => (
                    <Notify key={notify.id} notify={notify} />
                ))}
            </div>
        </Container>
    )
}
export default ListNotify;