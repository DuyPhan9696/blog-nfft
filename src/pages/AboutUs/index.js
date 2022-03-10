import React, { useEffect, useState } from 'react'
import ListNotify from '../../components/ListNotify/ListNotify'
import SumNotify from '../../components/SumNotify/SumNotify'
import { ListNotifyWrapper } from '../../components/ListNotify/styled/ListNotifyWrapper'
import pageApi from '../../api/pageApi'
function AboutUs() {
    const [listNotify, setListNotify] = useState([])
    const [hasMore, sethasMore] = useState(true);
    const [page, setpage] = useState(1);
    const [allNotify, setAllNotify] = useState([])
    const pathLink = 'about-us'
    useEffect(() => {
        const getLength = async () => {
            try {
                const params = {
                    slug: 'about-us',
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
                    slug: 'about-us',
                    language: 'en',
                    pageSize: 999999,
                    pageIndex: 0
                }
                const response = await pageApi.get(params);
                setListNotify(response.response.data)
            } catch (error) {
                console.log(error)
            }
        }
        getLength();
        getData();
    }, [])
    const fetchPage = async () => {
        try {
            const params = {
                slug: 'about-us',
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
    console.log(pathLink)

    return (
        <>
            <ListNotifyWrapper>
                <SumNotify
                    tag={'Tagged'}
                    title={'About Us'}
                    content={` A collection of ${allNotify.length} posts`}
                    isImage={true}
                    linkImage={'/images/notify1.jpg'}
                />
                <ListNotify listNotify={listNotify} hasMore={hasMore} fetchData={fetchData} pathLink={pathLink} />
            </ListNotifyWrapper>
        </>
    )
}
export default AboutUs