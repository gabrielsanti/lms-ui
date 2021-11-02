import React from "react"
import HeroSlider, { Slide, Nav, OverlayContainer } from "hero-slider"
import Wrapper from "../Wrapper/Wrapper"
import Title from "../Title/Title"
import Subtitle from "../Subtitle/Subtitle"

const Slider = props => {
  const images = props.images.map(image => {
    return (
      <Slide
        background={{
          backgroundImage: image,
          backgroundAttachment: "fixed",
          backgroundPosition: "center center",
        }}
      />
    )
  })
  return (
    <HeroSlider
      slidingAnimation="left_to_right"
      orientation="horizontal"
      initialSlide={1}
      onBeforeChange={(previousSlide, nextSlide) =>
        console.log("onBeforeChange", previousSlide, nextSlide)
      }
      onChange={nextSlide => console.log("onChange", nextSlide)}
      onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.33)",
      }}
      settings={{
        slidingDuration: 250,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: true,
        autoplayDuration: 5000,
        height: "25rem",
      }}
    >
      <OverlayContainer
        style={{
          display: "flex",
          flexFlow: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.33)",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <Wrapper>
          <Title>Basic Slider</Title>
          <Subtitle>Slides' background attachment set to fixed</Subtitle>
        </Wrapper>
      </OverlayContainer>
      {images}

      <Nav />
    </HeroSlider>
  )
}

export default Slider
