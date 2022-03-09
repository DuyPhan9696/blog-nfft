import React from 'react'
import styled from 'styled-components'
export const BannerHomeWrapper = styled.div` 
    position: relative;
    .bg{
        object-fit: cover;
        height: 340px;
        width:100%;
    }
    .absolute{
        width:100%;
        height:100%;
        position: absolute;
        top:0;
        .logo{
            width:119px;
        }
        h2{
            font-size:25px;
            opacity: .8;
            color:#ffffff;
        }
    }
    
`
function BannerHome(){
    return(
        <BannerHomeWrapper>
            <img className="bg" src="/images/bg-banner.png" />
            <div className="absolute d-flex align-items-center justify-content-center flex-column">
            <img className="logo" src="/images/logo.png" />
            <h2 className='mt-2 mb-0 text-center'>Vietnam's Largest Blockchain Gaming Guild</h2>
            </div>
           
        </BannerHomeWrapper>
    )
}
export default BannerHome;