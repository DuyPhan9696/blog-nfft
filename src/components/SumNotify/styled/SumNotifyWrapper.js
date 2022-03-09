import styled from 'styled-components'

export const SumNotifyWrapper = styled.div`
padding-top:39px;
.inner-sum{
    grid-template-columns:1fr 1fr 1fr;
    grid-gap:20px;
    .right{
        grid-column: 2/span 2;
        img{
            width:100%;
            height:380px;
            object-fit:cover;
        }
    }
    .left{
        min-height:280px;
        .tag{
            margin-top:0;
        }
        .title{
            font-size:32px;
            margin-bottom:17px;
        }
        .content{
            font-size:17px;
        }
    }
}
@media only screen and (max-width: 991px) {
    .inner-sum{
        grid-template-columns:1fr;
        .right{
            grid-column: 1/span 1;
            img{
                height:200px;;
            }
        }
        .left{
            min-height:unset;
            .tag{
                margin:20px 0 2px 0;
                margin-top:0;
            }
            .title{
                font-size:24px;
                margin-bottom:9px;
            }
            .content{
                font-size:16px;
            }
        }
    }
}
`