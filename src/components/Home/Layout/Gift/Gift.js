import React from 'react';
import styled from 'styled-components';


const Gift = () => {
    return (
        <>
            <Container>
                <div className="header__content">
                    <h2>Gift</h2>
                </div>
            </Container>
        </>
    )
}

export default Gift;

const Container = styled.div `

    width: 100%;
    height: 60vh;
    background: url('image/banner/banner-2.jpg');
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    z-index: 1;
    margin: 5em 0;

    &::before{
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(0,0,0,0.6);
        z-index: -1;
    }

    .header__content{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 60vh;
        color: #fff;
        font-family: 'Alex Brush', cursive;
        font-size: 50px;
        font-weight: 500;
    }

`;