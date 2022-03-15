import styled from "styled-components";

export const BlogContentWrapper = styled.div`
    box-sizing:border-box;
    background:#151719;
    color:white;
    padding-top:60px;
    h2{
        font-size:28px;
        font-weight:700;
    }
    p{
        font-size:21px;
        line-height:1.6em;
        font-weight: 400;
        margin-top:30px;
        margin-bottom:0;
        color:rgba(255,255,255,0.75);
    }
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
        width:100%;
        .img-blog{
            width:100%;
        }
    }
    
    .blog-main{
        p{
            &:first-of-type{
                margin-top:15px;
            }
        }
    }
    .blog-about-us{
        margin-top:56px;
        padding-bottom:60px;
        .join{
            font-weight: 700;
            color:#FFF;
        }
        .link{
            margin-top:30px;
            font-size:21px;
            a{
                color:white;
                text-decoration:underline;
                font-weight:700;
            }
        }
    }
    .inner-blog{
        h2{
            opacity:.9;
            line-height:33px;
            margin-top:44px;
            &:first-of-type{
                margin-top:0;
            }
        }
        figure{
            margin-top:44px;
            width:100%;
            img{
                width:100%;
            }
        }
        .data-img{
            h2{
                margin-top:44px;
                margin-bottom:15px;
            }
            figure{
                margin-top:15px;
            }
        }
        
    }
    .blog-sub-content{
        padding:65px 0 72px;
        width:100%;
        
        h1{
            font-size:32px;
            font-weight:700;
            margin:0 0 30px;
            text-align:center;
        }
        .subcribe-form{
            width:100%;
            max-width:500px;
            font-size:18px;
            padding: 5px 5px 5px 15px;
            background: #fff;
            border-radius: 8px;
            color:#738a94;
            span{
                display: inline-block;
                padding: 10px 15px;
                color: #fff;
                font-weight: 500;
                background: #66CC33;
                border-radius: 5px;
            }
        }
    }
    @media only screen and (max-width: 991px){
        .container{
            margin:0;
            max-width: 100%;
        }
        .canvas{
            margin:0 140px;
        }
        .blog-about-us{
            padding-bottom:50px;
        }
        .blog-sub-content{
            padding: 56px 0 62px;
        }
    }
    @media only screen and (max-width: 767px){
        h2{
            font-size:23px;
        }
        p{
            font-size:17px;
        } 
        .canvas{
            margin:0 20px;
        }
        .inner-title {
            h1{
            font-size:40px;
            }
            p{
                font-size:18px;
            }
        }
        .blog-banner{
            grid-template-columns: 20px auto 20px;
        }
        .blog-about-us{
            padding-bottom:40px;
            .link{
                font-size:17px;
            }
        }
        .inner-blog{
            h2{
                font-size:23px;
            }
        }
        .blog-sub-content h1{
            font-size:27px;
        }
        .blog-sub-content{
            padding: 50px 0 57px;
        }
    }
    @media only screen and (max-width: 575px){
        .subcribe-form{
            max-width:100%;
        }
        .blog-about-us{
            padding-bottom:30px;
        }
        .blog-sub-content{
            padding: 37px 0 42px;
        }
        .inner-title {
            h1{
            font-size:34px;
            }
        }
    }
    @media only screen and (max-width: 414px){
        .canvas{
            margin:0;
        }
        .blog-banner{
            grid-template-columns: 0 auto 0;
        }
        .blog-sub-content{
            .subcribe-form{
                font-size: 16px;
            }
        }
        .blog-sub-content{
            padding: 29px 0 32px;
        }
        .inner-title {
            h1{
            font-size:28px;
            }
        }
        
    }
`