import styled from 'styled-components'

export const ListNotifyWrapper = styled.div`
    background:#151719;
    a{
        text-decoration: none;
    }
    .tag{
        font-weight: 500;
        text-transform: uppercase;
        font-size:12px;
        color:#66CC33;
        margin:20px 0 2px 0;
        line-height:25px;
    }
    .title{
        font-size:24px;
        color:#FFFFFFD9;
        margin-bottom:9px;
    }
    .content{
        color: #90a2aa;
        overflow-y: hidden;
        margin-bottom:16px;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        display: -webkit-box;
    }
    .list-notify{
        padding:26px 0;
        grid-template-columns:1fr 1fr 1fr;
        grid-gap:30px;
        .notify-item{
            display:flex;
            .notify-head{
                .img-notify{
                    width:100%;
                    height:200px;
                    object-fit:cover;
                }
            }
            .notify-body{
                .notify-bd-foot{
                    .img-profile{
                        width:36px;
                        height:36px;
                        border-radius:50%;
                    }
                    .name{
                        font-size:14px;
                        line-height:19px;
                        color:#FFFFFFBF;
                        font-weight:600;
                        &:hover{
                            color: #fff;
                        }
                    }
                    .time{
                        font-size:13px;
                        color: #90a2aa;
                        .accents{
                            margin:0 2px;
                        }
                    }
                }
            }
        }
    }

    @media only screen and (max-width: 991px) {
        .list-notify{
        grid-template-columns:1fr 1fr;
        }
    }
    @media only screen and (max-width: 767px) {
        .list-notify{
        grid-template-columns:1fr;
        }
    }
`

export const HomeListNotifyWrapper = styled(ListNotifyWrapper)`
    .list-notify{
        .notify-item:first-child{
            display:grid;
            grid-gap:20px;
            grid-template-columns: 1fr 1fr 1fr;
            grid-column: 1/span 3;
            .notify-head{
                grid-column: 1/span 2;
                .img-notify{
                    width:100%;
                    min-height: 380px;
                }
            }
            .notify-body{
                justify-content: center;
                .flex-fill{
                    flex:unset !important;
                }
                .notify-bd-start{
                    .tag{
                        margin-top:0;
                    }
                    .title{
                        font-size:32px;
                        margin-bottom:12px;
                    }
                }
            }
        }
    }
    @media only screen and (max-width: 991px) {
        .list-notify{
            .notify-item:first-child{
                display:flex;
                grid-gap:unset;
                grid-column: unset;
                .notify-head{
                    grid-column: unset;
                    .img-notify{
                        width:100%;
                        min-height: 200px;
                    }
                }
                .notify-body{
                    .flex-fill{
                        flex:1 !important;
                    }
                    .notify-bd-start{
                        .tag{
                            margin-top:20;
                        }
                        .title{
                            font-size:24px;
                            margin-bottom:9px;
                        }
                    }
                }
            }
        }
    }
`;