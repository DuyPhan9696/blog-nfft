import React from 'react'
import { Container } from 'react-bootstrap';
import {SumNotifyWrapper} from './styled/SumNotifyWrapper';
import PropTypes from 'prop-types'
function SumNotify({tag,title,content,isImage,linkImage}){
    return(<SumNotifyWrapper>
        <Container>
            <div className="inner-sum d-grid">
                <div className="left d-flex flex-column justify-content-center">
                        <div className="tag">{tag}</div>
                        <h2 className="title">{title}</h2>
                        <p className='content'>
                            {content}
                        </p>
                </div>
                {isImage &&(
                      <div className="right">
                      <img  src={linkImage} />
                    </div>)
                }
            </div>
        </Container>
    </SumNotifyWrapper>)
}
SumNotify.propTypes = {
    tag: PropTypes.string,
    title: PropTypes.string,
    content:PropTypes.string,
    isImage:PropTypes.bool,
    linkImage:PropTypes.string
}
export default SumNotify