import React, { useEffect, useState } from 'react'
import ListNotify from '../../components/ListNotify/ListNotify'
import SumNotify from '../../components/SumNotify/SumNotify'
import { ListNotifyWrapper } from '../../components/ListNotify/styled/ListNotifyWrapper'
import pageApi from '../../api/pageApi'
function Careers() {
    const [listNotify, setListNotify] = useState([])
    const [hasMore, sethasMore] = useState(true);
    const [page, setpage] = useState(1);
    useEffect(() => {
        const getData = async () => {
            try {
                const params = {
                    slug: 'careers',
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
    }, [])
    const fetchPage = async () => {
        try {
            const params = {
                slug: 'careers',
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
                    title={'Careers'}
                    content={'Nơi bạn đến và ở lại'}
                    isImage={true}
                    linkImage={'/images/notify1.jpg'}
                />
                <ListNotify listNotify={listNotify} hasMore={hasMore} fetchData={fetchData} />
            </ListNotifyWrapper>
        </>
    )
}
export default Careers