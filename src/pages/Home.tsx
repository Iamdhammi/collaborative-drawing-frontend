import React from 'react';
import styled, { keyframes } from 'styled-components';
import Button from '../components/Button';
import { RiMenu4Line } from 'react-icons/ri';

import HomeBgImg from '../images/bg/home-bg.jpg';
import HomeBgImg1 from '../images/bg/home-bg1.jpg';
import HomeBgImg2 from '../images/bg/home-bg2.jpg';
import HomeBgImg3 from '../images/bg/home-bg3.jpg';
import HomeBgImg4 from '../images/bg/home-bg4.jpg';
import HomeBgImg5 from '../images/bg/home-bg5.png';
import HomeBgImg6 from '../images/bg/home-bg6.jpg';
import HomeBgImg7 from '../images/bg/home-bg7.jpg';
import HomeBgImg8 from '../images/bg/home-bg8.jpg';
import HomeBgImg9 from '../images/bg/home-bg9.jpg';
import HomeBgImg10 from '../images/bg/home-bg10.jpg';
import HomeBgImg11 from '../images/bg/home-bg11.jpg';
import HomeBgImg12 from '../images/bg/home-bg12.jpg';
import HomeBgImg13 from '../images/bg/home-bg13.jpg';
import HomeBgImg14 from '../images/bg/home-bg14.jpg';
import HomeBgImg15 from '../images/bg/home-bg15.jpg';
import HomeBgImg16 from '../images/bg/home-bg16.jpg';
import HomeBgImg17 from '../images/bg/home-bg17.jpg';
import HomeBgImg18 from '../images/bg/home-bg18.jpg';



const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`;
const MOVEBG = keyframes`
    from { -webkit-transform: translateX(0); } 
    to { -webkit-transform: translateX(-7%); }
`; 
const Slider = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 110%;
    background: url(${HomeBgImg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    transition: background-image 2s;
    -moz-transition: background-image 2s;
    -ms-transition: background-image 2s;
    -webkit-transition: background-image 2s;
    -webkit-animation-name: ${MOVEBG};
    -webkit-animation-duration: 10s;
    -webkit-animation-timing-function: ease-in-out;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-direction: alternate;      
    -moz-animation-name: ${MOVEBG};
    -moz-animation-duration: 10s;
    -moz-animation-timing-function: ease-in-out;
    -moz-animation-iteration-count: infinite;
    -moz-animation-direction: alternate;      
    -ms-animation-name: ${MOVEBG};
    -ms-animation-duration: 10s;
    -ms-animation-timing-function: ease-in-out;
    -ms-animation-iteration-count: infinite;
    -ms-animation-direction: alternate;      
    animation-name: ${MOVEBG};
    animation-duration: 10s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-direction: alternate;
`;
const Overlay = styled.div`
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
`;
const Content = styled.div`
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    .menu-icon {
        position: absolute;
        right: 40px;
        top: 20px;
        color: #fff;
        font-size: 28px;
    }
`;
const TitleContainer = styled.div`
    background-color: rgba(0,0,0,0.5);
    padding: 70px 100px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const PageTitle = styled.h2`
    color: #fff;
    text-align: center;
    font-weight: 600;
    font-size: 36px;
`;
const Subtitle = styled.p`
    color: #fff;
    text-align: center;
    font-size: 18px;
    margin-bottom: 20px;
`;

const bg = [
    HomeBgImg1, 
    HomeBgImg2, 
    HomeBgImg3,
    HomeBgImg4,
    HomeBgImg5, 
    HomeBgImg6, 
    HomeBgImg7,
    HomeBgImg8,
    HomeBgImg9, 
    HomeBgImg10, 
    HomeBgImg11,
    HomeBgImg12,
    HomeBgImg13, 
    HomeBgImg14, 
    HomeBgImg15,
    HomeBgImg16,
    HomeBgImg17, 
    HomeBgImg18
];
var active = 0;

const Home = () => {

    React.useEffect(() => {
        const changeBackground = setInterval(function(){
            const element = document.getElementById('slider');
            if(element) {
                element.style.backgroundImage = `url(${bg[active]})`;
                active++;
                if (active === Number(bg.length)) active = 0;
            }
        }, 8000);  
        return () => {
            clearInterval(changeBackground)
        }
    }, []);


    return (
        <Container>
            <Slider id="slider"></Slider>
            <Overlay></Overlay>
            <Content>
                <RiMenu4Line className="menu-icon" />
                <TitleContainer>
                    <PageTitle>Host a free meeting</PageTitle>
                    <Subtitle>Create new drawing chat room and invite people</Subtitle>
                    <Button type="link">Create a New WhiteBoard</Button>
                </TitleContainer>
            </Content>
        </Container>
    )
}

export default Home;