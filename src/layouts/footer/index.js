import React from 'react'
import { Container } from 'react-bootstrap'
import {FooterWrapper} from './styled/FooterWrapper'
function Footer(){
    return(
        <FooterWrapper>
            <Container>
                <div className='footer-inner d-flex flex-column flex-md-row'>
                    <div className='text-center text-md-start'><a className="name" href="">Ancient8 Gaming Guild</a> © 2022</div>
                    <nav className='flex-fill mb-3 mb-md-0'><ul className="d-flex justify-content-center">
                        <li><a className="d-flex align-items-center" href="">Discord</a></li>
                        <li><a className="d-flex align-items-center"  href="">Telegram</a></li>
                        <li><a className="d-flex align-items-center"  href="">Facebook</a></li>
                        <li><a className="d-flex align-items-center" href="">Twitter</a></li>
                        <li><a className="d-flex align-items-center"  href="">Youtube</a></li>
                        </ul></nav>
                    <a className='text-center text-md-start' href="">Powered by Ghost</a>
                </div>
            </Container>
        </FooterWrapper>
    )
}
export default Footer