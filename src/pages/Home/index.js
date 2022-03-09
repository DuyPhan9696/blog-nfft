import React, { useEffect, useState } from 'react'
import BannerHome from './components/BannerHome'
import ListNotify from '../../components/ListNotify/ListNotify'
import { HomeListNotifyWrapper } from '../../components/ListNotify/styled/ListNotifyWrapper'
import pageApi from '../../api/pageApi'
function Home() {
    const [listNotify, setListNotify] = useState([])
    useEffect(() => {
        const fetchPage = async () => {
            try {
                const params = {
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
            <BannerHome />
            <HomeListNotifyWrapper>
                <ListNotify listNotify={listNotify} />
            </HomeListNotifyWrapper>
        </>
    )
}
export default Home