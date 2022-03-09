import styled from 'styled-components'

export const FooterWrapper = styled.div` 
    background:#0a0b0c;
    color: hsla(0,0%,100%,.7);
    font-size:13px;
    a{
        text-decoration: none;
        color: hsla(0,0%,100%,.7);
        &:hover{
            color: #fff;
        }
    }
    ul{
        list-style: none;
        padding: 0;
        margin: 0;
        li{
            line-height:26px;
        }
        li:not(:first-child) a:before{
            content: "";
            display: block;
            width: 2px;
            height: 2px;
            margin: 0 10px;
            background: #fff;
            border-radius: 100%;
        }
    }
    .footer-inner{
        padding:30px 0;
        .name{
            color: #fff;
            font-weight:500;
        }
    }
`