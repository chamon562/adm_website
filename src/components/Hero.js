import React, { useState, useRef, useEffect } from 'react'
import styled, { css } from 'styled-components/macro';
import { Button } from './Button';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { IoArrowForwardCircleOutline, IoArrowBackCircleOutline } from "react-icons/io5";

const HeroSection = styled.section`
    height: 100vh;
    max-height: 1100px;
    position: relative; 
    overflow: hidden;
`
// wrapper next
const HeroWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex; 
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative; 
`
const HeroSlide = styled.div`
    z-index: 1;
    width: 100%;
    height: 100%;
`
const HeroSlider = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* used for overlay */
    &::before{
        content: '';
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100vh;
        bottom: 0vh;
        left: 0;
        overflow: hidden;
        opacity: 0.4;
        background: linear-gradient(
            0deg, rgba(0,0,0,0.2) 0%, 
            rgba(0,0,0,0.2) 50%, 
            rgba(0,0,0,0.6) 100%,
            )
    }
`
const HeroImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`
const HeroContent = styled.div`
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    max-width: 1600px;
    width: calc(100% - 100px);
    color: #fff;

    h1{
        font-size: clamp(2rem, 8vw, 5rem);
        /* font-weight makes lettering look thinner */
        font-weight: 400;
        /* text-transform: uppercase makes text all capitol */
        text-transform: upperCase;
        text-shadow:  0px 0px 20px  rgba(0, 0, 0, 0.4);
        text-align: left;
        margin-bottom: 0.8rem;
    }

    p{
        margin-bottom: 1.2rem;
        text-shadow: 0px 0px 20px  rgba(0, 0, 0, 0.4);
    }
`

const Arrow = styled(IoMdArrowRoundForward)`
    margin-left: 0.5rem;
`

const SliderButtons = styled.div`
    position: absolute;
    bottom: 50px;
    right: 50px;
    display: flex;
    z-index: 10;
`


const arrowButtons = css`
    width: 50px;
    height: 50px;
    color: #fff;
    cursor: pointer;
    background: #00FFFF;
    border-radius: 50px;
    padding: 10px;
    margin-right: 1rem;
    user-select: none;
    transition: 0.3s;

    &:hover{
        background: #cd853f;
        transform: scale(1.05);
    }
`
const PreviousArrow = styled(IoArrowBackCircleOutline)`
    ${arrowButtons}
`

const NextArrow = styled(IoArrowForwardCircleOutline)`
    ${arrowButtons}
`

const Hero = ({ slides }) => {
    // creating the state and the funciton
    // the array will be the first value which is the initial state so call it current
    // and next value is the function that updates the state
    const [current, setCurrent] = useState(0);
    // then this looks at the slides the data and check the length short handing it and be able to look at with one variable
    // so it doesnt go path the total images I have
    const length = slides.length;
    const timeout = useRef(null)

    // automated slider to shuffle through images
    // useEffect(() =>{
    //     const nextSlide = () =>{
    //         setCurrent(current =>(current === length -1 ? 0 : current + 1))
    //     }
    //     timeout.current = setTimeout(nextSlide, 3000)

    //     return function (){
    //         if(timeout.current){
    //             clearTimeout(timeout.current)
    //         }
    //     }
    //     // looking for the current and the length for the dependcies here
    // }, [current, length])

    const nextSlide = () => {
        if(timeout.current){
            clearTimeout(timeout.current)
        }
        // what current is its going to look at the current image in the slider 
        // if the current is strict equal to length -1 then want to return first value in the data
        // else increment or add to that value with current + 1
        setCurrent(current === length - 1 ? 0 : current + 1);
        console.log(current)
    }

    const previousSlide = () => {
        if(timeout.current){
            clearTimeout(timeout.current)
        }
        // check current if its equal to 0 then return the of the length - 1 going backwards else turn current - 1
        setCurrent(current === 0 ? length - 1 : current - 1);
        console.log(current)
    }

    if(!Array.isArray(slides) || slides.length <= 0 ){
        return null
    }
    return (
        <HeroSection>
            <HeroWrapper>
                {slides.map((slide, index) => {
                    return (
                        <HeroSlide key={index}>
                            {index === current && (
                                <HeroSlider>
                                    <HeroImage src={slide.image} alt={slide.alt} />
                                    <HeroContent>
                                        <h1>{slide.title}</h1>
                                        <p>{slide.location}</p>
                                        <Button to={slide.path} primary="true" css={`max-width: 100px`}>
                                            {slide.label}
                                            <Arrow />
                                        </Button>
                                    </HeroContent>
                                </HeroSlider>
                            )}
                        </HeroSlide>
                    )
                })}
                <SliderButtons>
                    <PreviousArrow onClick={previousSlide} />
                    <NextArrow onClick={nextSlide} />
                </SliderButtons>
            </HeroWrapper>
        </HeroSection>
    )
}

export default Hero
