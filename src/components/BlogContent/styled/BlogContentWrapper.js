import styled from "styled-components";

export const BlogContentWrapper = styled.div`
    box-sizing:border-box;
    background:#151719;
    color:white;
    padding: 60px 0;
    a{
        text-decoration:none;
        color:#66CC33;
        background-color:transparent;
    }
    .canvas{
        margin:0 290px;
    }
    .inner-title > a{
        text-transform:UPPERCASE;
        font-size:13px;
        font-weight:600;
        letter-spacing:0.02em;
        margin:0 0 5px;
    }
    .inner-title{
        h1{
            margin: 0 0 0.5em;
            font-size: 48px;
            font-weight:700;
            letter-spacing:-0.015em;
            line-height:1.15;
            opacity:0.9;
        }
        p{
            color: #90a2aa;
            margin: 0 0 0.5em;
            font-size: 20px;
            line-height: 1.4em;
            opacity: .6;
        }
        .title-foot{
            margin-top:30px;
            .img-profile{
            width:50px;
            height:50px;
            border-radius:50%;
            }
            .name{
                line-height:19px;
                color:#FFFFFFBF;
                font-weight:600;
                &:hover{
                color: #fff;
                }
            }
            .time{
                font-size:14px;
                line-height:1.2em;
                color: #90a2aa;
                .accents{
                    margin:0 2px;
                }
            }
        }
    }
    .blog-banner{
        margin-top:44px;
        padding-bottom:44px;
        grid-template-columns: 3% 94% 3%;
        .img-blog{
            width:100%;
        }
    }
    
    .inner-blog{
        h2{
            opacity:.9;
            font-size:28px;
            font-weight:700;
            line-height:33px;
        }
        figure{
            margin-top:15px;
            img{
                width:100%;
            }
        }
    }
`