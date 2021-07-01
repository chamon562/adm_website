import React from 'react'
import styled, { css } from 'styled-components/macro';
import sliderData from '../data/SliderData'
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

`
const HeroSlider = styled.div`

`
const HeroImage = styled.div`

`
const HeroContent = styled.div`

`

const Hero = () => {
    return (
        <HeroSection>
            <HeroWrapper>
                {sliderData.map((slide, index) => (
                    <HeroSlide key={index}>
                        {/* this is where to showcase content */}
                        <HeroSLider>
                            <HeroImage />
                                <HeroContent>
                                    <h1>{slide.title}</h1>
                                </HeroContent>
                        </HeroSLider>
                    </HeroSlide>
                ))}
            </HeroWrapper>
        </HeroSection>
    )
}

export default Hero
