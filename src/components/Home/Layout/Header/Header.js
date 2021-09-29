import React from 'react';
import styled from 'styled-components';


const Header = () => {
    return (
        <>
            <Headers>
                <div className="header__content">
                    <h2>Olivia & Enrico</h2>
                </div>
            </Headers>   
        </>
    )
}

export default Header;


const Headers = styled.div `

    width: 100%;
    height: 100vh;
    background: url('image/slider.jpg') no-repeat center/cover;
    position: relative;
    z-index: 1;

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
        min-height: 100vh;
        color: #fff;
        font-family: 'Alex Brush', cursive;
        font-size: 30px;
    }

`;