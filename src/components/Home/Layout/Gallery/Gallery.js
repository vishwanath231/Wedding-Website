import React from 'react';
import styled from 'styled-components';


const Gallery = () => {
    return (
        <>
            <Flower>
                <img src="image/flowers3.gif" alt="" />
            </Flower>
            <GalleryContainer>
                <Box>
                    
                </Box>
            </GalleryContainer>
            <h2>Galleryhhhh</h2>
        </>
    )
}

export default Gallery;


const Flower = styled.div `

   display: flex;
   justify-content: center;
   align-items: center;
   padding: 0 15px;
   margin: 5rem auto 2rem auto;

    img{
       width: 150px;

        /* @media(min-width:768px){
           width: 150px;
        } */
    }
`;



const GalleryContainer = styled.div `

    max-width: 1140px;
    margin: 2rem auto;
    padding: 0 15px;

`;
const Box = styled.div `

    display: grid;
    grid-gap: 2em;
    
    @media(min-width:920px){
        display: grid;
        grid-gap: 2em;
        grid-template-columns: repeat(2, 1fr);
    
    } 
`;