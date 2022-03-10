import React, { useLayoutEffect, useState, useEffect } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { BsFacebook, BsTwitter, BsXLg } from "react-icons/bs";
import { useSpring, a } from 'react-spring'
import { VscMenu } from "react-icons/vsc";
import { HeaderWrapper } from './styled/HeaderWrapper'
import { Link } from 'react-router-dom';
import categoryApi from '../../api/categoryAPI';
import { getItem, setItem } from '../../helpers/localStorageControl'
import SubcribeForm from '../../components/SubcribeForm/SubcribeForm';
function Header() {
    const keyLang = 'LANGUAGE'
    //SubcribeForm
    const [showForm, setShowForm] = useState(false)
    // list category trên header
    const [listCategory, setListCategory] = useState([])
    // chuyển đổi ngôn ngữ false=vi - true-eng
    const [language, setLanguge] = useState(getItem(keyLang) === true ? true : false);

    const openForm = () => {
        setShowForm(prev => !prev)
    }
    // animtion button menu mobi
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
                document.body.style.overflow = "auto";
                setFlipped(false)
            }
        }
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    useEffect(() => {
        categoryApi.getAll().then((resp) => {
            setListCategory(resp.response.data)
            const path = window.location.pathname.substring(1).split('/')[0];
            document.getElementById(path).classList.add('active')
        }
        );
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
                    <div className='relative d-flex justify-content-end d-lg-none bor-icon' onClick={showMenuMB}>
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
                        <a.div style={{ opacity: (window.innerWidth > 991) ? 1 : opacity.to((o) => o) }} className="d-flex flex-column align-items-center flex-lg-row justify-content-between w-100 h-100" id="list-page">
                            <Nav className=" tab-mb align-items-center align-items-lg-start">
                                {
                                    listCategory.map((value) =>
                                    (<Nav.Link as="div" key={`${value.slugEn}`}><Link id={`${value.slugEn}`} to={`/${value.slugEn}`}
                                        onClick={(e) => {
                                            document.querySelector('.tab-mb a.active').classList.remove('active');
                                            e.currentTarget.classList.add('active');
                                        }}>
                                        {language ? value.nameEn : value.nameVi}
                                    </Link>
                                    </Nav.Link>)
                                    )
                                }
                                <Nav.Link as="div" style={{ cursor: 'pointer' }} onClick={() => { setItem(keyLang, !language); setLanguge(!language); }}>{language ? 'EN' : 'VN'}</Nav.Link>
                            </Nav>
                            <Nav className="connect flex-row justify-content-center align-items-center mb-3 mb-lg-0" >
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