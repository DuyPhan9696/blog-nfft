import React, { useEffect, useState } from 'react'
import ListNotify from '../../components/ListNotify/ListNotify'
import SumNotify from '../../components/SumNotify/SumNotify'
import { ListNotifyWrapper } from '../../components/ListNotify/styled/ListNotifyWrapper'
import pageApi from '../../api/pageApi'
function Scholarship() {
    const [listNotify, setListNotify] = useState([])
    useEffect(() => {
        const fetchPage = async () => {
            try {
                const params = {
                    slug: 'scholarship',
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
                    title={'Scholarship'}
                    content={` A collection of ${listNotify.length} posts`}
                    isImage={false}
                    linkImage={'/images/notify1.jpg'}
                />
                <ListNotify listNotify={listNotify} />
            </ListNotifyWrapper>
        </>
    )
}
export default Scholarship