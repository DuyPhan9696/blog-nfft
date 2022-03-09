import React, { useLayoutEffect, useState, useEffect } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { BsFacebook, BsTwitter, BsX, BsXLg } from "react-icons/bs";
import { useSpring, a } from 'react-spring'
import { VscMenu } from "react-icons/vsc";
import { HeaderWrapper } from './styled/HeaderWrapper'
import { Link } from 'react-router-dom';
import { PATH } from '../../constants/paths'
import categoryApi from '../../api/categoryAPI';
import SubcribeForm from '../../components/SubcribeForm/SubcribeForm';
function Header() {
    //SubcribeForm
    const [showForm, setShowForm] = useState(false)
    const openForm = () => {
        setShowForm(prev => !prev)
    }

    const [flipped, setFlipped] = useState(false);
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(30px) rotateY(${flipped ? -180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80, duration: 250 }
    });
    useLayoutEffect(() => {
        function updateSize() {
            if (window.innerWidth > 991) {
                document.getElementById('list-page').style.opacity = 1;
            }
        }
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    const showMenuMB = () => {
        if (flipped) {
            document.body.style.overflow = "auto";
        }
        else {
            document.body.style.overflow = "hidden";
        }
        setFlipped(!flipped)
    }
    return (
        <HeaderWrapper>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><img className="logo" src="/images/logo.png" /></Navbar.Brand>
                    <div className='relative d-flex justify-content-end align-content-center d-lg-none bor-icon' onClick={showMenuMB}>
                        <a.div className="absolute" style={{ opacity: opacity.to((o) => 1 - o), transform }}>
                            <VscMenu className='icon-menu-mb' aria-controls="responsive-navbar-nav" />
                        </a.div>
                        <a.div className="absolute" style={{
                            opacity,
                            transform,
                            rotateY: "-180deg"
                        }}
                        >
                            <BsXLg className='icon-x-mb' />
                        </a.div>
                    </div>
                    <Navbar.Collapse id="responsive-navbar-nav" className={flipped ? 'show' : ''}>
                        <a.div style={{ opacity: (window.innerWidth > 991) ? 1 : opacity.to((o) => o) }} className="d-flex flex-column flex-lg-row justify-content-between w-100 h-100" id="list-page">
                            <Nav className=" tab-mb align-items-center align-items-lg-start">
                                <Nav.Link as="div"><Link to={`/${PATH.HOME}`}>Home</Link></Nav.Link>
                                <Nav.Link href="#pricing">Website</Nav.Link>
                                <Nav.Link as="div"><Link to={`/${PATH.NEWS}`}>News</Link></Nav.Link>
                                <Nav.Link href="#prici"><Link to={`/${PATH.SCHOLARSHIP}`}>Scholarship</Link></Nav.Link>
                                <Nav.Link href="#pric"><Link to={`/${PATH.ACADEMY}`}>Academy</Link></Nav.Link>
                                <Nav.Link href="#pri"><Link to={`/${PATH.CAREERS}`}>Careers</Link></Nav.Link>
                                <Nav.Link href="#pr"><Link to={`/${PATH.ABOUT_US}`}>About us</Link></Nav.Link>
                                <Nav.Link href="#p">VN</Nav.Link>
                            </Nav>
                            <Nav className="connect flex-row justify-content-center mb-3 mb-lg-0" >
                                <Nav.Link href="#g"><BsFacebook /></Nav.Link>
                                <Nav.Link className='mx-4 mx-lg-0' href="#ng"><BsTwitter /></Nav.Link>
                                <Nav.Link as={'div'} href="#ing"><button className="subscribe" onClick={openForm}>Subscribe</button></Nav.Link>

                            </Nav>
                        </a.div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <SubcribeForm showForm={showForm} setShowForm={setShowForm} />
        </HeaderWrapper>
    )
}
export default Header