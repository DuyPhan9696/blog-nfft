import React, { useEffect, useState } from 'react'
import BannerHome from './components/BannerHome'
import ListNotify from '../../components/ListNotify/ListNotify'
import { HomeListNotifyWrapper } from '../../components/ListNotify/styled/ListNotifyWrapper'
import pageApi from '../../api/pageApi'
function Home() {

    const [listNotify, setListNotify] = useState([])
    const [hasMore, sethasMore] = useState(true);
    const [page, setpage] = useState(1);
    const pathLink = 'home'
    useEffect(() => {
        const getData = async () => {
            try {
                const params = {
                    language: 'en',
                    pageSize: 4,
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
                language: 'en',
                pageSize: 4,
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
            if (pageFromSever.length === 0 || pageFromSever.length < 4) {
                sethasMore(false);
            }
            setpage(page + 1);
        }, 1000)


    }
    return (

        <>
            <BannerHome />
            <HomeListNotifyWrapper>
                <ListNotify listNotify={listNotify} hasMore={hasMore} fetchData={fetchData} pathLink={pathLink} />
            </HomeListNotifyWrapper>
        </>
    )
}
export default Home