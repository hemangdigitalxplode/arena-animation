import React from 'react'
import errImg from '../../assets/erroPage.jpg'
import { Container } from 'react-bootstrap'
import './custom404.scss'

const Custom404 = () => {
    return (
        <>
            <Container>
                <div className='mainDiv d-flex flex-column flex-md-row'>
                    <div className='imgBox mt-5 mb-3'>
                        <img className='img' src={errImg} alt="" />
                    </div>
                    <div className='erroInfo mt-5 ml-md-3'>
                        <h1>404, Page Not Found!!</h1>
                        <h2>Oops, Couldn't able to find your Page </h2>
                        <p><a href="/">Return to home</a></p>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Custom404