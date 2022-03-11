import React, { useEffect, useState } from 'react'
import ListNotify from '../../components/ListNotify/ListNotify'
import SumNotify from '../../components/SumNotify/SumNotify'
import { ListNotifyWrapper } from '../../components/ListNotify/styled/ListNotifyWrapper'
import pageApi from '../../api/pageApi'
function Scholarship() {
    const [listNotify, setListNotify] = useState([])
    const [hasMore, sethasMore] = useState(true);
    const [page, setpage] = useState(1);
    const [allNotify, setAllNotify] = useState([])
    useEffect(() => {
        const getLength = async () => {
            try {
                const params = {
                    slug: 'scholarship',
                    language: 'en',
                    pageSize: 999999,
                    pageIndex: 0
                }
                const response = await pageApi.get(params);
                setAllNotify(response.response.data)
            } catch (error) {
                console.log(error)
            }
        }

        const getData = async () => {
            try {
                const params = {
                    slug: 'scholarship',
                    language: 'en',
                    pageSize: 3,
                    pageIndex: 0
                }
                const response = await pageApi.get(params);
                setListNotify(response.response.data)
            } catch (error) {
                console.log(error)
            }
        }

        getData();
        getLength();
    }, [])
    const fetchPage = async () => {
        try {
            const params = {
                slug: 'scholarship',
                language: 'en',
                pageSize: 3,
                pageIndex: page
            }
            const response = await pageApi.get(params);
            const dataRes = response.response.data
            return dataRes
        } catch (error) {
            console.log(error)
        }
    }
    const fetchData = async () => {
        const pageFromSever = await fetchPage();
        //console.log(pageFromSever)
        setTimeout(() => {
            setListNotify([...listNotify, ...pageFromSever])
            if (pageFromSever.length === 0 || pageFromSever.length < 3) {
                sethasMore(false);
            }
            setpage(page + 1);
        }, 1000)


    }
    return (
        <>
            <ListNotifyWrapper>
                <SumNotify
                    tag={'Tagged'}
                    title={'Scholarship'}
                    content={` A collection of ${allNotify.length} posts`}
                    isImage={false}
                    linkImage={'/images/notify1.jpg'}
                />
                <ListNotify listNotify={listNotify} hasMore={hasMore} fetchData={fetchData} />
            </ListNotifyWrapper>
        </>
    )
}
export default Scholarship