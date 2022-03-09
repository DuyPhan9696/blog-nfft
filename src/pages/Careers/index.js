import React, { useEffect, useState } from 'react'
import ListNotify from '../../components/ListNotify/ListNotify'
import SumNotify from '../../components/SumNotify/SumNotify'
import { ListNotifyWrapper } from '../../components/ListNotify/styled/ListNotifyWrapper'
import pageApi from '../../api/pageApi'
function Careers() {
    const [listNotify, setListNotify] = useState([])
    useEffect(() => {
        const fetchPage = async () => {
            try {
                const params = {
                    slug: 'careers',
                    language: 'en',
                    pageSize: 10,
                    pageIndex: 0
                }
                const response = await pageApi.get(params);
                setListNotify(response.response.data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchPage();
    }, [])
    return (
        <>
            <ListNotifyWrapper>
                <SumNotify
                    tag={'Tagged'}
                    title={'Careers'}
                    content={'Nơi bạn đến và ở lại'}
                    isImage={true}
                    linkImage={'/images/notify1.jpg'}
                />
                <ListNotify listNotify={listNotify} />
            </ListNotifyWrapper>
        </>
    )
}
export default Careers