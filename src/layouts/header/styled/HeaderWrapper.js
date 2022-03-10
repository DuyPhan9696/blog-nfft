import styled from 'styled-components'

export const HeaderWrapper = styled.div` 
    a{
        text-decoration: none;
    }
    .relative{
        position: relative;
    }
    .absolute{
        position: absolute;
    }
    .logo{
        width:90px;
    }
    .bor-icon{
        width:33px;
        height:33px;
        cursor: pointer;
    }
    .connect{
        svg{
            font-size:20px;
        }
        .subscribe{
            font-weight: 500;
            border-radius: 30px;
            padding: 8px 15px;
            background:#ffffff;
            color:#15171a;
            border:none;
            box-shadow:none;
            &:focus-visible{
                outline:none;
            }
        }
    }
    .tab-mb{
        a{
            color: rgba(255,255,255,.55);
            &.active{
                color:#FFFFFF;
                font-weight:600;
            }
        }
    }
    @media only screen and (max-width: 991px) {
        .icon-menu-mb{
            color:#fff;
            font-size: 32px;
        }
        .icon-x-mb{
            color:#fff;
            font-size: 27px;
        }
        #responsive-navbar-nav{
            position: fixed;
            left: 0;
            top: 67px;
            background: #212529;
            width: 100vw;
            height: calc(100vh - 67px);
            z-index: 1000;
            overflow: auto;
        }
        .tab-mb {
            a{
                font-size:5vmin;
            }
        }
    }
`